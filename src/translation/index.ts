import i18n from 'i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import RNRestart from 'react-native-restart';

import { APP_LANGUAGES, getData, MMKV_KEYS, storeData } from '../common';
import ar from './ar.json';
import en from './en.json';
import { TranslationPath } from './types';

type AppLanguages = keyof typeof resources;

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

// Get initial language with fallback to device language
const getInitialLanguage = (): string => {
  try {
    const storedLanguage = getData(MMKV_KEYS.TRANSLATION_KEY);
    if (storedLanguage) return storedLanguage;
  } catch (error) {
    // Storage not ready yet, fallback to device language
    console.warn('Storage not ready, using device language');
  }

  // Fallback to device language
  const deviceLang = RNLocalize.getLocales()[0]?.languageCode;
  return deviceLang === 'ar' ? APP_LANGUAGES.AR : APP_LANGUAGES.EN;
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources,
  lng: getInitialLanguage(),
  fallbackLng: APP_LANGUAGES.EN,
  interpolation: {
    escapeValue: false,
  },
  debug: __DEV__,
});

// Switch language with RTL support
export const switchLanguage = (targetLang: Partial<AppLanguages>) => {
  storeData(MMKV_KEYS.TRANSLATION_KEY, targetLang as string);

  const isArabic = targetLang === APP_LANGUAGES.AR;
  I18nManager.forceRTL(isArabic);
  I18nManager.allowRTL(isArabic);

  setTimeout(() => {
    RNRestart.Restart();
  }, 500);
};

// Type-safe translation hook
export const useAppTranslation = () => {
  const typedT = <
    TKeys extends TranslationPath | (string & {}),
    TInterpolations extends Record<string, string | number> = {},
  >(
    key: TKeys,
    params?: TInterpolations,
  ): string => i18n.t(key as string, params);

  return {
    t: typedT,
  };
};

// Access t function outside React components
export const onTranslate = (key: string, options = {}) => i18n.t(key, options);

export const availableLanguages = i18next.languages;

export const currentLanguage = i18next.language;

export const isArabic = i18n.language === APP_LANGUAGES.AR;

export default i18n;

