import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import defaultRoutes from './routes';

const routes: Array<RouteRecordRaw> = [...defaultRoutes];

const router = createRouter({
  history: createWebHashHistory(process.env.NODE_ENV === 'production' ? '/' : '/'),
  routes,
  scrollBehavior(to) {
    // , from, savedPosition
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
    return { top: 0 };
  },
});



export default router;