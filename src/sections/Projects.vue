<script setup>
import { inject } from 'vue';
import Section from '../components/Section.vue'
import Button from '../components/Button.vue';
import placeholder from '../assets/placeholder.webp'
import PostLink from '../components/PostLink.vue';

const iconList = inject('icons')

</script>

<template>
    <Section class="space-y-2.5 sm:space-y-4 relative">
        <div class="sticky top-0 z-10 backdrop-blur-3xl sm:top-15 gap-2 ">
            <div class="max-w-5xl px-5 sm:px-8 mx-auto flex flex-wrap justify-between py-2 items-center">
                <h2>Recent Projects</h2>
                <Button 
                    secondary
                    href="/articles"
                    :svgd="iconList.projects"
                    text="Show All"
                />
            </div>
        </div>
        <div class="max-w-5xl px-5 sm:px-8 mx-auto flex flex-col sm:flex-row flex-wrap gap-4">

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
