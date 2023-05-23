import { createApp } from "vue";
import App from "./App.vue";
import api from "./services/axios";
import router from "./routes/routes";

const app = createApp(App);

app.config.globalProperties.$http = api;
app.use(router);

app.mount("#app");

export default app;
