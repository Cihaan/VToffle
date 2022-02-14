import App from "./App.vue";
import { createApp } from "vue";

import router from "./router/route";
import store from "./store/store";

//IMPORTATION COMPONENT
import TheNavBar from "./components/navbar/TheNavBar.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("the-navbar", TheNavBar)


app.mount("#app");
