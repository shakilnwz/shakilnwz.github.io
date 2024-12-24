<script setup>
import { inject } from 'vue';
import Section from '../components/Section.vue'
import Button from '../components/Button.vue';
import placeholder from '../assets/placeholder.webp'
import PostLink from '../components/PostLink.vue';

const iconList = inject('icons')

</script>

<template>
    <Section class="space-y-2.5 sm:space-y-7 relative">
        <h2 class="sticky top-0 z-10 backdrop-blur-2xl sm:top-20">Recent Projects</h2>
        <div class="flex flex-col sm:flex-row flex-wrap sm:gap-7 gap-4">

            <PostLink 
                type="project"
                title="My First Post"
                link="/"
                :thumbnail="placeholder"
                date="22d"
                summary="This is the post excerpt. This is the post excerpt."

            /> 
            <PostLink 
                type="project"
                title="My First Post"
                link="/"
                :thumbnail="placeholder"
                date="22d"
                summary="This is the post excerpt. This is the post excerpt."

            />
            <PostLink />

        </div>

        <Button 
            secondary
            href="/articles"
            :svgd="iconList.projects"
            text="Show All"
        />
    </Section>
</template>
