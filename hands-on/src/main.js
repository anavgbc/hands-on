import { createApp } from "vue";
import App from "./App.vue";
import api from "./services/axios";
import router from "./routes/routes";
import dotenv from "dotenv";

const app = createApp(App);

dotenv.config();

app.config.globalProperties.$http = api;
app.use(router);

app.mount("#app");

export default app;
