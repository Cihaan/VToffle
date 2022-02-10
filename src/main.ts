import App from "./App.vue";
import { createApp } from "vue";

import router from "./router/route";
import store from "./store/store";

//IMPORTATION COMPONENT
import TheLandingVue from "./components/auth/TheLanding.vue";
import TheLogin from "./components/auth/TheLogin.vue";
import TheRegister from "./components/auth/TheRegister.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("the-landing", TheLandingVue);
app.component("the-login", TheLogin);
app.component("the-register", TheRegister);

app.mount("#app");
