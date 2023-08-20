import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {englishTranslation} from './src/translations/english';
import {portugueseTranslation} from './src/translations/portuguese';

const resources = {
  en: {translation: englishTranslation},
  pt: {translation: portugueseTranslation},
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
