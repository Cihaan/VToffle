import App from "./App.vue";
import { createApp } from "vue";


import router from "./router/route";

//IMPORTATION COMPONENT
import TheNavBar from "./components/navbar/TheNavBar.vue";

const app = createApp(App);


app.use(router);

app.component("the-navbar", TheNavBar)


app.mount("#app");
