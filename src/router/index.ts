import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/Home.vue'),
    meta: {
      cache: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/About.vue'),
    meta: {
      cache: false
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
