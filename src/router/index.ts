import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Detail from "@/pages/content/Detail.vue";
import Login from "@/pages/user/auth/Login.vue";
import Profile from "@/pages/user/center/Profile.vue";
import ProfileUpdateM from "@/pages/user/center/ProfileUpdateM.vue";

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/p/:id', name: 'Detail', component: Detail },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/profile/update', name: 'Profile-Update', component: ProfileUpdateM },
  { path: '/login', name: 'Login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router