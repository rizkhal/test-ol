import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "./assets/styles.css";
import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/dist/vue3-openlayers.css";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(OpenLayersMap);
app.mount("#app");
