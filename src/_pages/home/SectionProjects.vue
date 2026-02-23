<script setup>
import { inject } from 'vue';
import Section from '../../components/atoms/Section.vue'
import Button from '../../components/atoms/Button.vue';
import PostLink from '../../components/templates/PostLink.vue';


import atroly from '../../assets/projects/atroly.webp';
import imaginesignage from '../../assets/projects/imaginesignage.webp';
import eliteabu from '../../assets/projects/eliteabu.webp';
import besomoy from '../../assets/projects/besomoy.webp';
import projects from '../../assets/projects.json'

const projectThumb = {atroly, besomoy, imaginesignage, eliteabu}

const iconList = inject('icons')

</script>

<template>
    <Section class="space-y-4 sm:space-y-8 relative">
        <div class="sticky top-0 z-10 backdrop-blur-3xl sm:top-15 gap-2 ">
            <div class="max-w-6xl px-5 sm:px-8 mx-auto flex flex-col sm:flex-row gap-2 flex-wrap justify-between py-2 sm:items-center">
                <h2>Recent Projects</h2>
                <Button secondary href="/projects" :svgd="iconList.projects" text="Show All" />
            </div>
        </div>
        <div class="max-w-6xl px-5 sm:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

            <PostLink v-for="(project, index) in projects.slice(0, 4)" :key="index" type="project" :title="project.title"
                :link="project.link" :thumbnail="projectThumb[project.thumbnail]" :date="project.endDate"
                 />
        </div>


    </Section>
</template>
