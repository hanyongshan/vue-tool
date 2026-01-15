import Cookies from 'js-cookie';

/**
 * 添加Cookie
 * expires为undefined时代表随浏览器关闭而失效
 * */
const addCookie = (key, value) => {
  if (value === null || value === undefined) return delCookie(key);
  value = String(value);
  Cookies.set(key, value);
};

/**
 * 获取Cookie
 * */
const getCookie = key => {
  return Cookies.get(key);
};

/**
 * 获取Cookie，不存在给默认值
 * */
const getCookieDefault = (key, defaultValue) => {
  const value = getCookie(key);
  if (value === undefined || value === null) return defaultValue;
  return value;
};

/**
 * 删除Cookie
 * */
const delCookie = key => {
  Cookies.remove(key);
};

export default { addCookie, getCookie, getCookieDefault, delCookie };
