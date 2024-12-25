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
        <div class="sticky top-0 z-10 backdrop-blur-3xl sm:top-20 gap-2 flex flex-wrap justify-between items-baseline pb-2">
            <h2>Recent Projects</h2>
            <Button 
                secondary
                href="/articles"
                :svgd="iconList.projects"
                text="Show All"
            />
        </div>
        <div class="flex flex-col sm:flex-row flex-wrap gap-4">

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
        </div>

        
    </Section>
</template>
