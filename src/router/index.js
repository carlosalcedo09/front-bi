import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/LoginView.vue')
  },
  {
    path: '/RecuperarCuenta',
    name: 'RecuperarCuentaView',
    component: () => import(/* webpackChunkName: "about" */ '../views/RecuperarCuenta/RecuperarCuentaView.vue')
  },
  {
    path: '/Menu',
    name: 'MenuView',
    component: () => import(/* webpackChunkName: "about" */ '../views/Menu/MenuView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
