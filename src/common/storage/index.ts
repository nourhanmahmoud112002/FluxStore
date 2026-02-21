import { createMMKV } from 'react-native-mmkv';

const storage = createMMKV();

export const MMKV_KEYS = {
  TRANSLATION_KEY: 'app_language',
  USER_KEY: 'user_data',
} as const;

export const APP_LANGUAGES = {
  EN: 'en',
  AR: 'ar',
} as const;

export const storeData = (
  key: string,
  value: string | number | boolean | object,
) => {
  if (typeof value === 'object') {
    storage.set(key, JSON.stringify(value));
  } else {
    storage.set(key, value);
  }
};

export const getStringData = (key: string): string | undefined => {
  return storage.getString(key);
};

export const getNumberData = (key: string): number | undefined => {
  return storage.getNumber(key);
};

export const getBooleanData = (key: string): boolean | undefined => {
  return storage.getBoolean(key);
};

export const getObjectData = <T>(key: string): T | undefined => {
  const value = storage.getString(key);
  try {
    return value ? JSON.parse(value) : undefined;
  } catch (e) {
    console.log(e);

    return undefined;
  }
};

export const getData = (key: string): string | undefined => {
  return storage.getString(key);
};

export const removeData = (key: string) => {
  storage.remove(key);
};
