import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import CreateAccountView from "../views/CreateAccountView.vue";
import TitlesView from "../views/TitlesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: LoginView,
    },
    {
      path: "/CreateAccount",
      name: "CreateAccount",
      component: CreateAccountView,
    },
    {
      path: "/Titles",
      name: "Titles",
      component: TitlesView,
    },
  ],
});

export default router;
