import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CavaloPage from '../views/CavaloPage.vue';
import SorteioPage from '../views/SorteioPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/CavaloPage',
    name: 'CavaloPage',
    component: CavaloPage
  },
  {
    path: '/SorteioPage',
    name: 'SorteioPage',
    component: SorteioPage
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
