import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

//IMPORTATION COMPONENT
import TheLanding from "../components/auth/TheLanding.vue";
import TheLogin from "../components/auth/TheLogin.vue";
import TheRegister from "../components/auth/TheRegister.vue";
import TheProfile from "../components/profile/TheProfile.vue"

//ROUTES
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/landing",
  },
  {
    path: "/landing",
    name: "TheLanding",
    component: TheLanding,
  },
  {
    path: "/login",
    name: "TheLogin",
    component: TheLogin,
  },
  {
    path: "/register",
    name: "TheRegister",
    component: TheRegister,
  },
  {
    path: "/profile",
    name: "TheProfile",
    component: TheProfile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active-link",
});

export default router;
