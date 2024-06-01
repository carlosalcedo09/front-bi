import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/LoginView.vue')
  },
  {
    path: '/RegistrarPersonal',
    name: 'RegistrarPersonalView',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrarPersonal/RegistrarPersonalView.vue')
  },
  {
    path: '/RecuperarCuenta',
    name: 'RecuperarCuentaView',
    component: () => import(/* webpackChunkName: "about" */ '../views/RecuperarCuenta/RecuperarCuentaView.vue')
  },
  {
    path: '/ValidarCodigo',
    name: 'ValidarCodigoView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ValidarCodigo/ValidarCodigoView.vue')
  },
  {
    path: '/RestablecerContraseña',
    name: 'RestablecerContraseñaView',
    component: () => import(/* webpackChunkName: "about" */ '../views/RestablecerContraseña/RestablecerContraseñaView.vue')
  },
  {
    path: '/Menu',
    name: 'MenuView',
    component: () => import(/* webpackChunkName: "about" */ '../views/Menu/MenuView.vue')
  },
  {
    path: '/ReporteGeneral',
    name: 'ReporteGeneralView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReporteGeneral/ReporteGeneralView.vue')
  },
  {
    path: '/ReportePersonalizado',
    name: 'ReportePersonalizadoView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReportePersonalizado/ReportePersonalizadoView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
