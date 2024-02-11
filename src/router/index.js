import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/verify",
    name: "verify",
    children: [
      {
        path: "/login",
        name: "login",
      },
      {
        path: "/logout",
        name: "logout",
      },
      {
        path: "/illustrate",
        name: "illustrate",
      },
      {
        path: "/register",
        name: "register",
      },
    ],
  },

  {
    path: "/fronted",
    name: "fronted",
    component: () => import("@/FrontedLayout/main.vue"),
    children: [
      {
        path: "/fronted/home",
        name: "/fronted/home",
        component: () => import("@/FrontedLayout/home.vue"),
      },
    ],
  },
  {
    path: "/backend",
    name: "backend",

    children: [
      {
        path: "/backend/home",
        name: "/backend/home",
        component: () => import("@/BackendLayout/home.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.fullPath == "/") {
    next("/fronted/home");
  } else {
    next();
  }
});

export default router;
