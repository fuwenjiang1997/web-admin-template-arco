export const baseRouter = [
  {
    path: '/',
    component: () => import('@/pages/home.vue'),
  },
  {
    path: '/test-page',
    component: () => import('@/pages/testPage.vue'),
  },
]
