import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
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
      path:'/verify',
      name:'verify',
      component: () => import('../views/VerifyEmailView.vue')
    },
    {
      path:'/create-comment/:category?',
      name:'create-comment',
      component: () => import('../views/CreateComment.vue')
    },
  ],
})

export default router
