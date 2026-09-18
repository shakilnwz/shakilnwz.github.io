import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../pages/home/IndexView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: HomeView,
    },
    {
        path: "/skills",
        name: "skills",
        component: HomeView,
    },
    {
        path: "/projects",
        name: "projects",
        component: HomeView,
    },
    {
        path: "/articles",
        name: "articles",
        component: HomeView,
    },
    {
        path: "/experience",
        name: "experience",
        component: HomeView,
    },
    {
        path: "/contact",
        name: "contact",
        component: HomeView,
    },
    {
        path: "/resume",
        name: "resume",
        component: () => import("../pages/about/ResumeView.vue"),
    },
    {
        path: "/about/resume",
        redirect: "/resume",
    },
    {
        path: "/bio",
        name: "bio",
        component: () => import("../pages/about/BioDataView.vue"),
    },
    {
        path: "/about/bio",
        redirect: "/bio",
    },
    {
        path: "/wppost",
        name: "wppost",
        component: () => import("../pages/WPProjectsView.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/",
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
