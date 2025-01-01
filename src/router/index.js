import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "../pages/home/IndexView.vue";
import AboutView from "../pages/about/IndexView.vue";
import ResumeView from "../pages/about/ResumeView.vue";
import ArticleView from "../pages/ArticleView.vue";
import ContactView from "../pages/ContactView.vue";
import ProjectView from "../pages/ProjectView.vue";

const routes = [
  {
    path: "/",
    children: [
      { path: "", component: HomeView },
      {
        path: "/about",
        children: [
          { path: "", component: AboutView },
          { path: "/resume", component: ResumeView },
        ],
      },
      { path: "/articles", component: ArticleView },
      { path: "/contact", component: ContactView },
      { path: "/projects", component: ProjectView },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
