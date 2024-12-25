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
        <h2 class="sticky top-0 z-10 backdrop-blur-2xl sm:top-20">Recent Articles</h2>
        <div class="flex flex-col sm:flex-row flex-wrap sm:gap-7 gap-4">
            <p class="sm:basis-72 grow">I have skills with WordPress, Elementor, Breakdance Builder, TailwindCSS, Semantic HTML and CSS. Currently exploring Laravel.</p>

            <div class="sm:basis-xl grow space-y-4">
                <!-- article card -->
               <PostLink 
                    type="article"
                    title="My First Post"
                    link="/"
                    :thumbnail="placeholder"
                    date="22d"
                    summary="This is the post excerpt. This is the post excerpt."

                /> 
                <PostLink 
                    type="article"
                    title="My First Post"
                    link="/"
                    :thumbnail="placeholder"
                    date="22d"
                    summary="This is the post excerpt. This is the post excerpt."

                />
                <PostLink 
                    type="article"
                />
                

            </div>
        </div>

        <Button 
            secondary
            href="/articles"
            :svgd="iconList.list"
            text="Show All"
        />
    </Section>
</template>
