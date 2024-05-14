const routes = [
    {
        path: '/',
        name: 'index',
        title: '首頁',
        component: () => import('@/components/HelloWorld.vue')
    }
];

export default routes;
