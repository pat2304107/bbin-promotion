import { createI18n } from 'vue-i18n';

import zhCN from '../locales/zh-CN.json';
import enUS from '../locales/en-US.json';

export type I18nLocaleKey = 'en-US' | 'zh-CN';

export const I18nLocaleList = ['en-US', 'zh-CN'];

export const i18n = createI18n({
    legacy: false,
    locale: 'zh-CN',
    fallbackLocale: 'zh-CN',
    messages: {
        'en-US': enUS,
        'zh-CN': zhCN
    }
});

export default i18n;
