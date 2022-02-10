import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'

//IMPORTATION COMPONENT
import LandingComponent from "../components/auth/LandingComponent.vue"

//ROUTES
const routes: Object = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router