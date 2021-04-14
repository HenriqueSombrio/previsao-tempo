import { createWebHistory, createRouter } from "vue-router";
import principal from '../components/principal.vue'

const routes = [
    {
      path: "/",
      name: "Principal",
      component: principal,
    }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;