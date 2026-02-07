import { MMKV } from 'react-native-mmkv';

let _storage: MMKV | null = null;

const getStorage = (): MMKV => {
  if (!_storage) {
    _storage = new MMKV();
  }
  return _storage;
};

export const MMKV_KEYS = {
  TRANSLATION_KEY: 'app_language',
} as const;

export const APP_LANGUAGES = {
  EN: 'en',
  AR: 'ar',
} as const;

export const storeData = (key: string, value: string) => {
  getStorage().set(key, value);
};

export const getData = (key: string): string | undefined => {
  return getStorage().getString(key);
};

export const removeData = (key: string) => {
  getStorage().delete(key);
};
