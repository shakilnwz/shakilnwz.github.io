import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../pages/home/IndexView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            title: "Shakil Nawaz — Web Developer & Physics Graduate",
            description: "Portfolio of Shakil Nawaz: Vue, Alpine, Tailwind, WordPress and PHP developer with a Physics background. Based in Dhaka, Bangladesh.",
        }
    },
    {
        path: "/about",
        name: "about",
        component: HomeView,
        meta: {
            title: "About — Shakil Nawaz",
            description: "Background, skills, and what I build — Shakil Nawaz portfolio.",
        }
    },
    {
        path: "/skills",
        name: "skills",
        component: HomeView,
        meta: {
            title: "Skills & Tech Arsenal — Shakil Nawaz",
            description: "Frontend, backend, and tooling skills — Shakil Nawaz.",
        }
    },
    {
        path: "/projects",
        name: "projects",
        component: HomeView,
        meta: {
            title: "Projects — Shakil Nawaz",
            description: "Deployed web projects, e-commerce themes, and WordPress sites — Shakil Nawaz.",
        }
    },
    {
        path: "/articles",
        name: "articles",
        component: HomeView,
        meta: {
            title: "Articles & Intel — Shakil Nawaz",
            description: "Technical writing on Deno, Tailwind, Vite, and modern web tooling — Shakil Nawaz.",
        }
    },
    {
        path: "/experience",
        name: "experience",
        component: HomeView,
        meta: {
            title: "Experience — Shakil Nawaz",
            description: "Work history and roles — Shakil Nawaz portfolio.",
        }
    },
    {
        path: "/contact",
        name: "contact",
        component: HomeView,
        meta: {
            title: "Contact — Shakil Nawaz",
            description: "Get in touch — Shakil Nawaz, web developer in Dhaka.",
        }
    },
    {
        path: "/resume",
        name: "resume",
        component: () => import("../pages/about/ResumeView.vue"),
        meta: {
            title: "Résumé — Shakil Nawaz",
            description: "Full résumé — Shakil Nawaz, web developer and physics graduate.",
            print: true,
        }
    },
    {
        path: "/about/resume",
        redirect: "/resume",
    },
    {
        path: "/bio",
        name: "bio",
        component: () => import("../pages/about/BioDataView.vue"),
        meta: {
            title: "Bio-Data — Shakil Nawaz",
            description: "Complete biodata — Shakil Nawaz.",
            print: true,
        }
    },
    {
        path: "/about/bio",
        redirect: "/bio",
    },
    {
        path: "/wppost",
        name: "wppost",
        component: () => import("../pages/WPProjectsView.vue"),
        meta: {
            title: "WordPress Projects — Shakil Nawaz",
            description: "WordPress site projects — Shakil Nawaz.",
        }
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

// Inject page metadata on every route change
router.afterEach((to) => {
    const title = to.meta.title || "Shakil Nawaz — Portfolio";
    document.title = title;
    let description = to.meta.description;
    if (!description) {
        const defaultDesc = "Shakil Nawaz — Web developer, Physics graduate. Vue, Alpine, Tailwind, WordPress, PHP.";
        const existing = document.querySelector('meta[name="description"]');
        if (existing) {
            existing.content = defaultDesc;
        } else {
            const m = document.createElement("meta");
            m.name = "description";
            m.content = defaultDesc;
            document.head.appendChild(m);
        }
        return;
    }
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
    }
    meta.content = description;

    // Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
        ogTitle = document.createElement("meta");
        ogTitle.property = "og:title";
        document.head.appendChild(ogTitle);
    }
    ogTitle.content = title;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
        ogDesc = document.createElement("meta");
        ogDesc.property = "og:description";
        document.head.appendChild(ogDesc);
    }
    ogDesc.content = description;

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
        ogUrl = document.createElement("meta");
        ogUrl.property = "og:url";
        document.head.appendChild(ogUrl);
    }
    ogUrl.content = window.location.href;

    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
        ogType = document.createElement("meta");
        ogType.property = "og:type";
        document.head.appendChild(ogType);
    }
    ogType.content = "website";
});
