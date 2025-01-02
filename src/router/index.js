import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "",
        component: () => import("../pages/home/IndexView.vue"),
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
        component: () => import("../pages/ArticleView.vue"),
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
