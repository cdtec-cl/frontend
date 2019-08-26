import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './components/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // Importando vista de manera directa
      component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue')
    },
    {
      path: '/farm/:name',
      name: 'farm',
      // Importando vista de manera directa
      component: () => import(/* webpackChunkName: "farm" */ './components/Farm.vue')
    }
  ]
})
