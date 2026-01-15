/**
 * 添加LocalStorage
 * */
const addLocalStorage = (key, value) => {
  if (value === null || value === undefined) return delLocalStorage(key);
  value = String(value);
  localStorage.setItem(key, value);
};

/**
 * 获取LocalStorage
 * */
const getLocalStorage = key => {
  return localStorage.getItem(key);
};

/**
 * 获取LocalStorage，不存在给默认值
 * */
const getLocalStorageDefault = (key, defaultValue) => {
  const value = getLocalStorage(key);
  if (value === undefined || value === null) return defaultValue;
  return value;
};

/**
 * 删除LocalStorage
 * */
const delLocalStorage = key => {
  localStorage.removeItem(key);
};

/**
 * 获取LocalStorage中全部key
 */
const getLocalStorageKeys = () => {
  const keys = [];
  for (let i = 0, length = localStorage.length; i < length; i++) {
    keys.push(localStorage.key(i));
  }
  return keys;
};

export default { addLocalStorage, getLocalStorage, getLocalStorageDefault, delLocalStorage, getLocalStorageKeys };
