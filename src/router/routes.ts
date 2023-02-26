import type { RouteRecordRaw } from 'vue-router';

const defaultRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'forside' },
  },
  {
    path: '/forside',
    name: 'forside',
    meta: {
      isPublic: true,
    },
    component: () => import('@/views/ForsideView.vue'),
  },
  {
    path: '/eksempel',
    name: 'eksempel',
    component: () => import('@/views/EksempelView.vue'),
  },
  {
    path: '/om',
    name: 'om',
    component: () => import('@/views/OmView.vue'),
  },
 
  { path: '/:pathMatch(.*)*', redirect: { name: 'forside' } },
];

export default defaultRoutes;