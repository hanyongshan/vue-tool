// IndexedDB的包装器JsStore - 基础语法

import { Connection } from 'jsstore'; //引入包装器JsStore
import workerInjector from 'jsstore/dist/worker_injector'; //引入包装器JsStore
const tableName = 'ms-table';
let initState = false;

// 创建连接
const connection = new Connection();
connection.addPlugin(workerInjector);

// 初始化数据库和表
const initDataBase = dbName => {
  // 表结构定义
  const table = {
    name: tableName,
    columns: {
      key: { primaryKey: true, notNull: true },
      value: { notNull: true },
    },
  };

  // 数据库定义
  const db = {
    name: dbName,
    tables: [table],
  };
  return db;
};

/**
 * 初始化JsStore
 * await this.$msJsStore.initJsStore(this)
 * */
const initJsStore = async that => {
  const db = initDataBase(dbName(that));
  try {
    await connection.initDb(db);
    initState = true;
  } catch (error) {
    initState = false;
  }
};

/**
 * 添加JsStore
 * await this.$msJsStore.addJsStore([{key: 'key', value: 'value'}])
 * */
const addJsStore = async storeArgs => {
  if (!initState || !Array.isArray(storeArgs) || storeArgs.length === 0) return 0;

  const storeList = [];
  for (let i = 0, length = storeArgs.length; i < length; i++) {
    if (storeArgs[i] === undefined || storeArgs[i] === null) continue;
    if (storeArgs[i].value === undefined || storeArgs[i].value === null) await delJsStore([storeArgs[i].key]);
    const value = String(storeArgs[i].value);
    storeList.push({ key: storeArgs[i].key, value: value });
  }
  if (storeList.length === 0) return 0;

  return await connection.insert({
    into: tableName,
    upsert: true,
    values: storeList,
    validation: false,
    skipDataCheck: true,
  });
};

/**
 * 获取JsStore
 * const value = await this.$msJsStore.getJsStore(key)
 * */
const getJsStore = async key => {
  if (!initState || key === undefined || key === null) return null;

  const resultList = await connection.select({
    from: tableName,
    where: {
      key,
    },
  });
  if (resultList.length === 0 || resultList[0].value === undefined || resultList[0].value === null || resultList[0].value.length < 32) return null;

  return resultList[0].value;
};

/**
 * 获取JsStore，不存在给默认值
 * const value = await this.$msJsStore.getJsStoreDefault(key, default)
 * */
const getJsStoreDefault = async (key, defaultValue) => {
  const value = await getJsStore(key);
  if (value === null) return defaultValue;
  return value;
};

/**
 * 删除JsStore
 * await this.$msJsStore.delJsStore(['key'])
 * */
const delJsStore = async storeArgs => {
  if (!initState || !Array.isArray(storeArgs) || storeArgs.length === 0) return 0;
  return await connection.remove({
    from: tableName,
    where: {
      key: {
        in: storeArgs,
      },
    },
  });
};

/**
 * 根据前缀删除JsStore
 * await this.$msJsStore.delPrefixesJsStore(['prefixe'])
 * */
const delPrefixesJsStore = async prefixes => {
  if (!initState || !Array.isArray(prefixes) || prefixes.length === 0) return 0;

  const prefixe = prefixes.join('|');
  return await connection.remove({
    from: tableName,
    where: {
      key: {
        regex: new RegExp(`^(${prefixe})`),
      },
    },
  });
};

/**
 * 获取JsStore中全部key
 * const keys = await this.$msJsStore.getJsStoreKeys()
 * */
const getJsStoreKeys = async () => {
  if (!initState) return [];
  const resultList = await connection.select({
    from: tableName,
  });
  if (resultList.length === 0) return [];
  return resultList.reduce((t, v) => [...t, v.key], []);
};

export default { initJsStore, addJsStore, getJsStore, getJsStoreDefault, delJsStore, delPrefixesJsStore, getJsStoreKeys };

/**
 * 获取数据库名称
 * */
const dbName = that => {
  const baseUrlList = that.$store.state.baseUrl.split('/').filter(baseUrl => {
    return baseUrl !== undefined && baseUrl !== null && baseUrl.trim() !== '';
  });
  return 'ms-' + (baseUrlList.length === 0 ? 'default' : baseUrlList.join('-'));
};
