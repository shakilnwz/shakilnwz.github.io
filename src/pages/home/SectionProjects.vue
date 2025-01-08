<script setup>
import { inject } from 'vue';
import Section from '../../components/atoms/Section.vue'
import Button from '../../components/atoms/Button.vue';
import PostLink from '../../components/templates/PostLink.vue';
import eliteabu from '../../assets/projects/eliteabu.webp';
import lifkoach from '../../assets/projects/lifkoach.webp';
import projects from '../../assets/projects.json'

const projectThumb = {eliteabu, lifkoach}

const iconList = inject('icons')

</script>

<template>
    <Section class="space-y-2.5 sm:space-y-4 relative">
        <div class="sticky top-0 z-10 backdrop-blur-3xl sm:top-15 gap-2 ">
            <div class="max-w-5xl px-5 sm:px-8 mx-auto flex flex-wrap justify-between py-2 items-center">
                <h2>Recent Projects</h2>
                <Button 
                    secondary
                    href="/projects"
                    :svgd="iconList.projects"
                    text="Show All"
                />
            </div>
        </div>
        <div class="max-w-5xl px-5 sm:px-8 mx-auto flex flex-col sm:flex-row flex-wrap gap-4">

            <PostLink 
                v-for="(project, index) in projects.slice(0,2)"
                :key="index"
                type="project"
                :title="project.title"
                :link="project.link"
                :thumbnail="projectThumb[project.thumbnail]"
                :date="project.endDate"
                :summary="project.summary"
            /> 
        </div>

        
    </Section>
</template>
