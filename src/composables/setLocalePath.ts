import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { i18n, I18nLocaleKey } from '@/plugins/i18n';

export function useLanguage() {
    const router = useRouter();
    const route = useRoute();
    const currentLang = ref<I18nLocaleKey>(i18n.global.locale.value as I18nLocaleKey);

    const setLocalePath = (lang: I18nLocaleKey) => {
        const currentPath = route.fullPath.replace(/^\/(en|cn)/, '');
        const newPath = `/${lang}${currentPath}`;
        currentLang.value = lang;
        router.push(newPath);
    };

    return {
        currentLang,
        setLocalePath
    };
}

export default useLanguage;
