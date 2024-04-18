import { createRouter, createWebHistory } from "vue-router";

import home from "../views/home.vue";
import profile from "../views/profile.vue";
import todos from "../views/todos.vue";
import weather from "../views/weather.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/todos",
    name: "todos",
    component: todos,
  },
  {
    path: "/weather",
    name: "weather",
    component: weather,
  },
  {
    path: "/profile",
    name: "profile",
    component: profile,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
