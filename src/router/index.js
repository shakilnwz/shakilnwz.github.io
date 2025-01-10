import { createWebHashHistory, createRouter } from "vue-router";
import HomeView from "../pages/home/IndexView.vue";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "",
        component: HomeView,
      },
      {
        path: "/about",
        children: [
          {
            path: "",
            component: () => import("../pages/about/IndexView.vue"),
          },
          {
            path: "/resume",
            component: () => import("../pages/about/ResumeView.vue"),
          },
        ],
      },
      {
        path: "/articles",
        component: () => import("../pages/articles/IndexView.vue"),
      },
      {
        path: "/contact",
        component: () => import("../pages/ContactView.vue"),
      },
      {
        path: "/projects",
        component: () => import("../pages/ProjectView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
