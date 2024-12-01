import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Define your routes
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"), // Lazy-loaded
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"), // Lazy-loaded
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"), // Lazy-loaded
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"), // Lazy-loaded
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"), // Lazy-loaded
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: () => import("../views/AdminDashboard/Dashboard.vue"),
    redirect: "/dashboard/home",
    children: [
      {
        name: "dashboardhome",
        path: "home",
        component: () => import("../views/AdminDashboard/dashboardHome.vue"),
      },
    ],
  },
];

// Create the router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
