import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/Home.vue';
import Game1 from '@/views/Game1/Game1.vue';

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: 'game1',
                name: 'Game1',
                component: Game1
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
});

export default router;
