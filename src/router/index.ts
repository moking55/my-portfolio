import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/github",
      beforeEnter() {
        location.replace("http://github.com/moking55");
      },
      component: HomeView
    }
  ]
});

export default router;
