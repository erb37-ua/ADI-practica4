import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue';
import PrivacidadPage from '@/views/legal/PrivacidadPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import LegalPage from '@/views/legal/LegalPage.vue';
import CookiesPage from '@/views/legal/CookiesPage.vue';
import LoginPage from '@/views/LoginPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },{
    path: '/about',
    name: 'About',
    component: AboutPage
  },{
    path: '/cookies',
    name: 'cookies',
    component: CookiesPage
  },{
    path: '/legal',
    name: 'legal',
    component: LegalPage
  },{
    path: '/privacidad',
    name: 'privacidad',
    component: PrivacidadPage
  },{
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },{
    path: '/login',
    name: 'login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
