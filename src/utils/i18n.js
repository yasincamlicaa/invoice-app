import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../locales/en.json';
import translationTR from '../locales/tr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    fr: {
      translation: translationTR,
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already escapes the values
  },
});

export default i18n;
