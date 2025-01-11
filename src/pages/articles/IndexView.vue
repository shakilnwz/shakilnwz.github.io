<script setup>
import Section from '../../components/atoms/Section.vue'

import denovite from '../../assets/articles/deno-vite.webp';
import articles from '../../assets/articles.json';

const thumbs = { denovite }


</script>
<template>
    <Section contained>
        <h2 class="pb-6">Articles</h2>
        <div class="space-y-4 sm:space-y-8">
            <!-- article card -->
            <a class="article-card flex h-fit flex-col relative sm:flex-row gap-4 hover:border-brand-y/90 border-b-6 border-transparent rounded-3xl transition-all overflow-hidden"
                v-for="(article, index) in articles" :key="index" :href="article.link" target="_blank">
                <span class="basis-full block rounded">
                    <img class="rounded-2xl h-full object-cover" :src="thumbs[article.thumbnail]" :alt="article.title">
                </span>
                <span class="basis-full space-y-4 px-2">
                    <h3>{{ article.title }}</h3>
                    <p class="font-light text-brand-x/90 text-base">Published on: {{ article.postdate }}</p>
                    <p>{{ article.summary }}</p>
                </span>
            </a>
        </div>
    </Section>
</template>

<style scoped>
@import "tailwindcss/theme" theme(reference);
@import "../../assets/styles/theme.css" theme(reference);

.article-card {
    &:before {
        @apply absolute text-center font-bold inset-full rounded-t-3xl bottom-0 text-transparent content-['Read_More'] font-bold py-4 transition-all;
    }

    &:hover:before {
        @apply text-brand-x inset-x-0 top-auto bg-brand-y/80 backdrop-blur-sm;
    }
}

h3 {
    @apply text-brand-y text-3xl font-bold;
}
</style>
