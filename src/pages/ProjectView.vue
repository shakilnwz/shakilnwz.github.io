<script setup>
import Section from '../components/atoms/Section.vue'

import eliteabu from '../assets/projects/eliteabu.webp';
import lifkoach from '../assets/projects/lifkoach.webp';
import educavo from '../assets/projects/educavo.webp';
import projects from '../assets/projects.json';

const thumbs = { eliteabu, lifkoach, educavo }


</script>
<template>
    <Section contained>
        <h2 class="pb-6">Projects</h2>
        <div class="space-y-8 sm:space-y-16">
            <a class="project-card flex h-fit flex-col relative sm:flex-row sm:even:flex-row-reverse gap-4 hover:border-brand-y/90 border-b-6 border-transparent rounded-3xl transition-all overflow-hidden"
                v-for="(project, index) in projects" :key="index" :href="project.link" target="_blank">
                <span class="basis-full block rounded">
                    <img class="rounded-2xl h-full object-cover" :src="thumbs[project.thumbnail]" :alt="project.title">
                </span>
                <span class="basis-full space-y-4 px-2">
                    <h3>{{ project.title }}</h3>
                    <p class="font-light text-brand-x/90 text-base">Started: {{ project.startDate }}, Ended: {{
                        project.endDate }}</p>
                    <p>{{ project.summary }}</p>
                </span>
            </a>
        </div>
    </Section>
</template>

<style scoped>
@import "tailwindcss/theme" theme(reference);
@import "../assets/styles/theme.css" theme(reference);

.project-card {
    &:before {
        @apply absolute text-center font-bold inset-full rounded-t-3xl bottom-0 text-transparent content-['View_Project'] font-bold py-4 transition-all;
    }

    &:hover:before {
        @apply text-brand-x inset-x-0 top-auto bg-brand-y/80 backdrop-blur-sm;
    }
}

h3 {
    @apply text-brand-y text-3xl font-bold;
}
</style>
