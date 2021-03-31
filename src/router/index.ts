import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'Home' */'../views/Home/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: 'About' */'../views/About/About.vue'),
    meta: {
      cache: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
