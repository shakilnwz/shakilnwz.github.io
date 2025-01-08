<script setup>
import Button from '../../components/atoms/Button.vue'
import Section from '../../components/atoms/Section.vue';
import avater from '../../assets/images/avatar.webp'
import SocialLink from '../../components/atoms/SocialLink.vue';
import { inject } from 'vue';
import resumeContent from '../../assets/resumeContent.json'

import allProjects from '../../assets/projects.json'
const projects = allProjects.slice(0, 2)
const iconList = inject('icons')

const printPage = ()=> window.print()

</script>
<template>
    <Section contained>
        <div class="flex flex-wrap justify-between py-2 items-center print:hidden">
            <h2 class="resumeheader">Resume</h2>
            <Button
                @click.prevent="printPage"
                secondary
                :svgd="iconList.pdf"
                text="Print"
            />
        </div>
        <!-- resume -->
        <div class="grid-cols-3 grid divide-brand-y divide-x-2 bg-surface divide-x w-full border-1 border-brand-y/40 py-6">
            <!-- aside section -->
            <div class="px-6">
                <!-- avater -->
                <div class="w-full grid place-items-center pb-10">
                    <div 
                        class="bg-radial from-brand-x/90 to-brand-y/30 to-45% dark:from-brand-y/90 dark:to-brand-x/90 max-w-40 aspect-square rounded-full">
                        <img
                            class="relative z-10 w-40 object-contain"
                            :src="avater"
                            alt="avatar"
                        />
                    </div>
                </div>

                <!-- skills -->
                <h2>Skills</h2>
                <ul class="skills">
                    <li v-for="(skill, index) in resumeContent.skills" :key="index">
                        {{ skill }}
                    </li>
                </ul>

                <!-- interest -->
                <h2>Interest</h2>
                <ul class="interests">
                    <li v-for="(interest, index) in resumeContent.interests" :key="index">
                        {{ interest }}
                    </li>
                </ul>

                <!-- education -->
                <h2>Education</h2>
                <ul class="education">
                    <li v-for="(education, index) in resumeContent.education" :key="index">
                        <strong>{{ education.class }} - {{ education.major }}</strong>
                        <p>{{ education.institute }}</p>
                        <p>{{ education.passYear }}  {{ education.result }}</p>
                    </li>
                </ul>

                <!-- Language -->
                <h2>Language</h2>
                <ul class="language">
                    <li v-for="(language, index) in resumeContent.language" :key="index">
                        <strong>{{ language.name }}</strong>
                        <p>{{ language.fluency }}</p>
                    </li>
                </ul>
            </div>
            <!-- resume main section -->
            <div class="col-span-2 px-6">
                <h1 class="text-4xl font-bold text-brand-y">Shakil Nawaz</h1>
                <h3 class="font-bold">Web Developer, Tech Nerd</h3>
                <p class="text-justify py-4">
                    Driven and goal-oriented web developer with over a year of experience in creating responsive, optimized, and user-focused websites. Committed to leveraging the latest web technologies to build fast, feature-rich, and accessible online experiences. Skilled in integrating innovative solutions to enhance project efficiency while focusing on impactful outcomes.
                </p>
                <!-- contact section -->
                <ul class="gap-2 grid grid-flow-row sm:grid-rows-2 sm:grid-flow-col">
                    <li>
                        <SocialLink
                            textHighlight="shakilnwz@gmail.com"
                            href="mailto:shakilnwz@gmail.com"
                            :svgd="iconList.email"
                            ariaLebel="Email me at shakilnwz@gmail.com"
                        />
                    </li>
                    <li>
                        <SocialLink
                            textHighlight="+880 179 190 7711"
                            href="https://wa.me/8801791907711"
                            :svgd="iconList.whatsapp"
                            ariaLebel="Let's connect on whatsapp"
                        />
                    </li>
                    <li>
                        <SocialLink
                            textHighlight="linkedin.com/in/shakilnwz"
                            href="https://linkedin.com/in/shakilnwz"
                            :svgd="iconList.linkedin"
                            ariaLebel="find me on linkedin"
                        />
                    </li>
                    <li>
                        <SocialLink
                            textHighlight="Discord"
                            href="https://discord.com/channels/@me/shakilnwz"
                            :svgd="iconList.discord"
                            ariaLebel="find me on discord"
                        />
                    </li>
                </ul>

                <!-- recent project -->
                <h2>Recent Projects</h2>
                <ul class="projects">
                    <li v-for="(project, index) in projects" :key="index">
                        <a target="_blank" :href="project.link">
                            <p><strong>{{ project.title }}</strong></p>
                            {{ project.link }}
                            <p><i>{{ project.startDate ? project.startDate + ' - ' : ""}}{{ project.endDate }}</i></p>
                        </a>
                    </li>
                </ul>
                
                <!-- work experience -->
                <h2>Work Experience</h2>
                <ul class="workexp">
                    <li v-for="(wexp, index) in resumeContent.workExp" :key="index">
                        <p><strong>{{ wexp.jobtitle }}</strong></p>
                        <div class="flex flex-row justify-between pb-1">
                            <div class="grow w-full">
                                <p>{{ wexp.company }}</p>
                                <p><i>{{ wexp.startdate ? wexp.startdate + ' - ' : ""}}{{ wexp.enddate }}</i></p>
                            </div>
                            <p class="shrink grow-0 text-right">{{ wexp.location }}</p>
                        </div>
                        <i class="font-bold text-base">Achievements/Tasks:</i>
                        <ul class="tasks">
                            <li v-for="(task, index) in wexp.achievements" :key="index">
                                {{ task }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </Section>
</template>

<style scoped>
@import "tailwindcss/theme" theme(reference);
@import "../../assets/styles/theme.css" theme(reference);

ul.skills {
    @apply flex flex-row flex-wrap gap-1.5;

    &>li{
        @apply bg-brand-y/30 font-bold w-fit rounded p-1.5;
    }
}
ul.interests{
    &>li{
        &::before{
            @apply font-bold content-['\2192\0020'];
        }
    }
}

ul.projects{
    @apply space-y-2 pb-4;
    &>li{
        @apply flex flex-row gap-2;
        &::before{
            @apply pl-1 leading-5 content-['\2192'] font-bold text-lg;
    }}
}

ul.workexp{
    @apply space-y-2;
    & .tasks{
        @apply list-disc pl-3;


    }
    & strong{
        @apply text-lg text-brand-x/90;
    }
}

ul{
    @apply pt-1;

    &:not(:last-of-type){
        @apply pb-4;
    }
}
a, p, li{
    @apply text-sm;
}
i{
    @apply text-brand-x/80;
}

h2:not(.resumeheader){
    @apply text-2xl;
    &::before{
    @apply content-['❖\0020'];
    }
}

</style>
