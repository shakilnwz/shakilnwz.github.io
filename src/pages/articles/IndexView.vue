<script setup>
import Section from '../../components/atoms/Section.vue'

import denovite from '../../assets/articles/deno-vite.webp';
import articles from '../../assets/articles.json';

const thumbs ={denovite}


</script>
<template>
    <Section contained>
        <h2 class="pb-6">Articles page</h2>
        <div>
            <!-- article card -->
            <a 
                class="flex flex-col sm:flex-row gap-4 hover:border-brand-y border-b-6 border-transparent rounded-3xl transition-all" 
                v-for="(article, index) in articles" 
                :key="index" 
                :href="article.link" 
                target="_blank">
                <span class="flex-1 rounded">
                    <img class="rounded-2xl" :src="thumbs[article.thumbnail]" :alt="article.title">
                </span>
                <span class="flex-1 space-y-4 px-2">
                    <h3>{{ article.title }}</h3>
                    <p class="font-light">Published on: {{ article.postdate }}</p>
                    <p>{{ article.summary}}</p>
                </span>
            </a>
        </div>
    </Section>
</template>

<style scoped>
@import "tailwindcss/theme" theme(reference);
@import "../../assets/styles/theme.css" theme(reference);
h3{
    @apply text-brand-y text-3xl font-bold;
}
</style>
