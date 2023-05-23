import { createRouter, createWebHistory } from "vue-router";

import AlbumPage from "../views/AlbumPage.vue";
import HomePage from "../views/HomePage.vue";
import LandingPage from "../views/LandingPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: HomePage,
      name: "Home",
      beforeEnter: (to, from, next) => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code") || localStorage.getItem("@code");

        if (code) {
          localStorage.setItem("@code", code);
          next();
        } else {
          next("/");
        }
      },
    },
    { path: "/", component: LandingPage, name: "LandingPage" },
    { path: "/album/:albumId", component: AlbumPage, name: "AlbumPage" },
    { path: "/:pathMatch(.*)*", component: LandingPage },
  ],
});

export default router;
