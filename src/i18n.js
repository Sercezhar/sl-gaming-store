import i18next from 'i18next';
import global_en from './localization/en/global.json';
import global_ua from './localization/ua/global.json';

const l = {
  0: 'en',
  1: 'ua',
};

const currentLng = Number(window.localStorage.getItem('language')) ?? 0;

i18next.init({
  interpolation: { escapeValue: true },
  lng: l[currentLng] ?? 'en',
  resources: {
    en: {
      global: global_en,
    },
    ua: {
      global: global_ua,
    },
  },
});
