import { createMMKV} from 'react-native-mmkv';
const getStorage = createMMKV;
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
  getStorage().remove(key);
};
