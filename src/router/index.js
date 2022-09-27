import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path : "/login",
      name : "login",
      component:() => import("../views/auth/Login.vue"),
    },
    {
      path:"/register",
      name : "register",
      component:()=> import("../views/auth/Register.vue"),
    },
    {
      path:"/dashboard",
      name:"dashboard",
      component:()=> import("../views/admin/dashboard/Dashboard.vue"),
    },
    {
      path:"/dashboard/users/list",
      name:"userslist",
      component:()=> import("../views/admin/dashboard/users/ListUsers.vue"),
    },
    {
      path:"/dashboard/users/create",
      name:"createusers",
      component:()=> import("../views/admin/dashboard/users/CreateUser.vue"),
    }
  ],
});

export default router;
