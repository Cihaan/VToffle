import App from "./App.vue";
import { createApp } from "vue";

import router from "./router/route"
import store from './store/store'

//IMPORTATION COMPONENT
import LandingComponent from "./components/auth/Landing.vue"

const app = createApp(App);

app.crea

app.use(store);
app.use(router);

app.mount("#app");
