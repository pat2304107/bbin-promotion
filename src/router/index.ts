import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import Home from '@/components/views/Home/Home.vue';
import Game from '@/components/views/Game/Game.vue';
import Contact from '@/components/views/Contact/Contact.vue';
import { i18n, I18nLocaleKey, I18nLocaleList } from '../plugins/i18n';
import publishConfig from '../../publish.config';

const routes = [
    {
        path: '/',
        redirect: `/${i18n.global.locale.value}`
    },
    {
        path: '/:lang',
        beforeEnter(to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) {
            const { lang } = to.params as { lang: I18nLocaleKey };

            if (!I18nLocaleList.includes(lang)) {
                return next(i18n.global.locale.value);
            }

            if (i18n.global.locale.value !== lang) {
                i18n.global.locale.value = lang;
            }

            return next();
        },
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: '/:lang/:game',
                component: Game
            },
            {
                path: '/:lang/contact',
                component: Contact
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: `/${i18n.global.locale.value}`
    }
];

const router = createRouter({
    history: createWebHistory(publishConfig.path),
    routes
});

router.beforeEach((to, _from, next) => {
    const lang = to.params.lang as I18nLocaleKey;
    if (I18nLocaleList.includes(lang) && i18n.global.locale.value !== lang) {
        i18n.global.locale.value = lang;
    }
    next();
});

export default router;
