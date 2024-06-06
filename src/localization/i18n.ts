import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "../localization/locales/en/translation.json"
import no from "../localization/locales/no/translation.json"

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
        en: {
            translation: en,
        },
        no: {
            translation: no,
        },
    }
  });

export default i18n;