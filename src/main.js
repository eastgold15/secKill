import "./assets/main.css";
import axios from "axios";
import persist from "pinia-plugin-persistedstate";



import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(axios);
app.use(createPinia().use(persist));
app.use(router);

app.mount("#app");
