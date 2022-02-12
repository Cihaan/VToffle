import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

//IMPORTATION COMPONENT
import TheLanding from "../components/auth/landing/TheLanding.vue";
import TheLogin from "../components/auth/login/TheLogin.vue";
import TheRegister from "../components/auth/register/TheRegister.vue";
import TheProfile from "../components/profile/profile/TheProfile.vue";
import TheInfoForm from "../components/profile/info-form/TheInfoForm.vue";
import ThePasswordForm from "../components/profile/pwd-form/ThePasswordForm.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active-link",
});

export default router;
