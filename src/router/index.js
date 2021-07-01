import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Prompter from "../views/Prompter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/prompter",
    name: "Prompter",
    component: Prompter,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
