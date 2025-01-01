import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../pages/home/IndexView.vue";
import AboutView from "../pages/AboutView.vue";
import ArticleView from "../pages/ArticleView.vue";
import ContactView from "../pages/ContactView.vue";
import ProjectView from "../pages/ProjectView.vue";
const routes = [
  {
    path: "/",
    children: [
      { path: "/", component: HomeView },
      { path: "/about", component: AboutView },
      { path: "/articles", component: ArticleView },
      { path: "/contact", component: ContactView },
      { path: "/projects", component: ProjectView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
