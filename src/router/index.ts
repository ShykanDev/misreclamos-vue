import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: ()=> import('../views/MainCategories.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: ()=> import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('../views/LoginView.vue')
    },
    {
      path:'/verify-email',
      name:'verifyEmail',
      component: () => import('../views/VerifyEmailView.vue')
    }
  ],
})

export default router
