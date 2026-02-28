import { createWebHistory, createRouter } from "vue-router";
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
            {
                path: "/wppost",
                component: () => import("../pages/WPProjectsView.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
