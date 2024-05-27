import { createI18n } from 'vue-i18n';

import zhCN from '../locales/cn.json';
import enUS from '../locales/en.json';

export type I18nLocaleKey = 'en' | 'cn';

export const I18nLocaleList = ['en', 'cn'];

export const i18n = createI18n({
    legacy: false,
    warnHtmlMessage: false,
    locale: 'cn',
    fallbackLocale: 'cn',
    messages: {
        en: enUS,
        cn: zhCN
    }
});

export default i18n;
