import { LOCAL_STORAGE_KEY } from '../types';

const expirationTime = 24 * 60 * 60 * 1000;

const setCookie = (key: LOCAL_STORAGE_KEY, value: string, expiration?: Date) => {
  if (global.document?.cookie !== undefined) {
    const defaultExpiration = expiration || new Date(new Date().getTime() + expirationTime);
    global.document.cookie = `${ key }=${ value };Path=/;Expires=${ defaultExpiration.toString() }`;
  }
};

const getCookie = (key: LOCAL_STORAGE_KEY) => {
  const cookies = global.document?.cookie.split(';');

  if (!cookies || !cookies.length) {
    return '';
  }

  const selectedCookie = cookies.find(c => c.includes(key)) || '';
  const values = selectedCookie.split('=');
  return values?.[1] ?? '';
};

const deleteCookie = (key: LOCAL_STORAGE_KEY) => {
  setCookie(key, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'));
};

/**
 * If localStorage is supported, store key-value in localstorage.
 * Else, it will store it in cookies
 */
export const setItem = (key: LOCAL_STORAGE_KEY, value: string) => {
  if (global?.localStorage) {
    global.localStorage.setItem(key, value);
  } else {
    setCookie(key, value);
  }
};

/**
 * If localStorage is supported, read key-value from localstorage.
 * Else, it will read it from cookies
 */
export const getItem = (key: LOCAL_STORAGE_KEY) => {
  if (global?.localStorage) {
    return global.localStorage.getItem(key) ?? '';
  }

  return getCookie(key) ?? '';
};


/**
 * If localStorage is supported, remove key from localstorage.
 * Else, it will remove it from cookies
 */
export const removeItem = (key: LOCAL_STORAGE_KEY) => {
  if (global?.localStorage) {
    global.localStorage.removeItem(key);
  } else {
    deleteCookie(key);
  }
};