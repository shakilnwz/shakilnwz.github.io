<script setup>
import Section from '../components/atoms/Section.vue'
import { ref, onMounted } from 'vue';



const posts = ref([]);
const loading = ref(true);
const error = ref(null);
const url = 'https://dev-shakilnwz.pantheonsite.io/wp-json/wp/v2/posts?_embed';

const fetchPosts = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        posts.value = await response.json();
    } catch (err) {
        error.value = err.message;
        console.error("Error fetching posts:", err);
    } finally {
        loading.value = false;
    }
}

onMounted(() => {
    fetchPosts();
}
);


</script>
<template>
    <Section contained>
        <h1 class="pb-6">Dynamic Posts</h1>
        <div class="space-y-8 sm:space-y-16">
            <pre>
                {{ posts }}
            </pre>
            <a class="project-card " v-for="(post, index) in posts" :key="index" :href="post.link" target="_blank">
                <span class="basis-full block rounded">
                    <img class="rounded-2xl h-full object-cover" :src="post._embedded?.['wp:featuredmedia']?.[0]?.source_url" :alt="post.title">
                </span>
                <span class="basis-full space-y-3 px-2">
                    <h3>{{ post.title.rendered }}</h3>
                    <span class="project-tag">Tech/Tools Used:
                        <ul>
                            <li v-for="(tag, index) in post.tags" :key="index">{{ tag }} </li>
                        </ul>
                    </span>
                    <p v-html="post.excerpt.rendered"></p>
                </span>
            </a>
        </div>
    </Section>
</template>

<style scoped>
@import "tailwindcss/theme" theme(reference);
@import "../assets/styles/theme.css" theme(reference);


.project-card {
    @apply flex h-fit flex-col relative sm:flex-row sm:even:flex-row-reverse gap-4 hover:border-brand-y/90 border-b-6 border-transparent rounded-3xl transition-all overflow-hidden;

    &:before {
        @apply absolute text-center inset-full rounded-t-3xl bottom-0 text-transparent content-['View_Project'] font-bold py-4 transition-all;
    }

    &:hover:before {
        @apply text-brand-x inset-x-0 top-auto bg-brand-y/80 backdrop-blur-sm;
    }

    & .project-tag {
        @apply text-base font-bold text-brand-y block;

        & ul {
            @apply flex flex-row flex-wrap;
        }

        & li {
            @apply text-sm list-disc font-light ml-6 text-brand-x;
        }
    }
}

h1 {
    @apply text-5xl text-brand-y font-bold;
}

h3 {
    @apply text-brand-y text-3xl font-bold;
}
</style>
