<script setup>
import { inject } from 'vue';
import Section from '../components/Section.vue'
import Button from '../components/Button.vue';

const iconList = inject('icons')

</script>

<template>
    <Section class="space-y-2.5 sm:space-y-7 relative">
        <h2 class="sticky top-0 z-10 backdrop-blur-2xl sm:top-20">Recent Articles</h2>
        <div class="flex flex-col sm:flex-row flex-wrap sm:gap-7 gap-4">
            <p class="sm:basis-72 grow">I have skills with WordPress, Elementor, Breakdance Builder, TailwindCSS, Semantic HTML and CSS. Currently exploring Laravel.</p>

            <div class="sm:basis-xl grow space-y-11">
                <!-- article card -->
                <a 
                    href="#" 
                    class="group w-full flex flex-row overflow-clip gap-1 sm:gap-3 items-center bg-surface/60 rounded-2xl shadow hover:shadow-lg hover:shadow-brand-y/30 transition-shadow duration-300 h-30">
                    <span class="bg-brand-y w-40 h-full grow grayscale group-hover:grayscale-0 transition-all duration-300">
                        <img class="object-center object-contain w-full h-full" src="../assets/placeholder.webp" alt="">
                    </span>
                    

                    <div class="grow p-2 h-full">
                        <div 
                            class="flex flex-row justify-between">
                            <h3 class="font-bold">My post title</h3> 
                            <span class="font-light">22d</span>
                        </div>
                        <p>This is some post excerpt content. This is some post excerpt content</p>
                    </div>
                </a>


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
