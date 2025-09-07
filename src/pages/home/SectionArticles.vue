<script setup>
import { inject } from 'vue';
import Section from '../../components/atoms/Section.vue'
import Button from '../../components/atoms/Button.vue';
import PostLink from '../../components/templates/PostLink.vue'
import denovite from '../../assets/articles/deno-vite.webp';
import articles from '../../assets/articles.json';

const thumbs = { denovite }

const iconList = inject('icons')

</script>

<template>
    <Section class="space-y-4 sm:space-y-8 relative">
        <div class="sticky top-0 z-10 backdrop-blur-3xl sm:top-15 gap-2">
            <div class="max-w-6xl px-5 sm:px-8 mx-auto flex flex-wrap justify-between py-2 items-center">
                <h2>Recent Articles</h2>
                <Button secondary href="/articles" :svgd="iconList.list" text="Show All" />
            </div>
        </div>
        <div class="max-w-6xl px-5 sm:px-8 mx-auto flex flex-col sm:flex-row flex-wrap sm:gap-7 gap-4">
            <p class="sm:basis-72 whitespace-break-spaces grow">My most recent posts on development, learning, and problem-solving — fresh from my desk.</p>

            <div class="sm:basis-xl grow space-y-4">
                <!-- article card -->
                <PostLink v-for="(article, index) in articles.slice(0, 3)" :key="index" type="article"
                    :title="article.title" :link="article.link" :thumbnail="thumbs[article.thumbnail]"
                    :date="article.postdate" :summary="article.summary" />
            </div>
        </div>

    </Section>
</template>
