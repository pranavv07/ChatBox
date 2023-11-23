import { createWebHistory, createRouter } from "vue-router";
import { useUserStore } from "@/store";

//Lazy load Routes
const routes = [
  {
    path: "/",
    name: "ChatBox",
    component: () => import("../views/ChatBox"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//Navigation Guard
router.beforeEach(async (to, from, next) => {
  const store = useUserStore()
  if (to.name !== "Login" && !store.isLoggedIn) next({ name: "Login" });
  else next();
});

export default router;
