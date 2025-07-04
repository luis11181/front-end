import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//import { init } from 'next-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../public/locales/en/common.json';
import es from '../public/locales/es/common.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;