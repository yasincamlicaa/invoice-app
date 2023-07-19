import React from 'react';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import translationEN from '../locales/en.json';
import translationTR from '../locales/tr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    tr: {
      translation: translationTR,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

function Language() {
    
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className='text-center'>
      <button className={i18n.language  === "en" ? "btn btn-success border" : "btn btn-default border"} onClick={() => changeLanguage('en')}>English</button>
      <button className={i18n.language  === "tr" ? "btn btn-success border" : "btn btn-default border"} onClick={() => changeLanguage('tr')}>Turkish</button>
    </div>
  );
}

export default Language;
