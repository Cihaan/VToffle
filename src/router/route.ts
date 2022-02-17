import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

//IMPORTATION COMPONENT
import TheLanding from "../components/auth/TheLanding.vue";
import TheLogin from "../components/auth/TheLogin.vue";
import TheRegister from "../components/auth/TheRegister.vue";
import TheProfile from "../components/profile/TheProfile.vue";
import TheInfoForm from "../components/profile/TheInfoForm.vue";
import ThePasswordForm from "../components/profile/ThePasswordForm.vue";
import TheFind from "../components/find/TheFind.vue";

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
  {
    path: "/info-form",
    name: "TheInfoForm",
    component: TheInfoForm,
  },
  {
    path: "/pwd-form",
    name: "ThePasswordForm",
    component: ThePasswordForm,
  },
  {
    path: "/find",
    name: "TheFind",
    component: TheFind,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active-link",
});

export default router;
