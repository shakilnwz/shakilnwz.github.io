<script setup>
import Section from '../../components/atoms/Section.vue';
import avater from '../../assets/images/avatar.webp'
import SocialLink from '../../components/atoms/SocialLink.vue';
import { inject } from 'vue';
const iconList = inject('icons')

const resumeContent = {
    skills: ["Responsive Web Development", "WordPress", "Elementor", "BreakDance", "JavaScript", "PHP", "Tailwind CSS", "CSS", "HTML", "QA and Analysis"],
    interests: ['Linux', 'Laravel', "Artificial Intelligence", "Open Source Alternatives", "Renewable energy", "Astro Physics", "Music"],
    education:[
        {
            class: 'BSc',
            major: 'Physics',
            institute: "Satkhira Govt. College, Satkhira",
            passYear: '2022',
            result: 'CGPA: 2.41 (Scale 4)'
        },
        {
            class: 'HSC',
            major: 'Science',
            institute: "Shimanta Adarsha College, Satkhira",
            passYear: '2014',
            result: 'GPA: 3.40 (Scale 5)'
        }
    ],
    language:[
        {
            name: 'Bengali',
            fluency: 'Native'
        },
        {
            name: 'English',
            fluency: 'Fluent in Reading, Writing, Speaking'
        }
    ],
    projects: [

    ],
    workExp: []


}

</script>
<template>
    <Section contained>
        <!-- resume -->
        <div class="grid-cols-3 grid divide-brand-y divide-x w-full border-1 border-brand-y py-4">
            <!-- aside section -->
            <div class="px-4">
                <!-- avater -->
                <div class="w-full grid place-items-center">
                    <div 
                        class="bg-radial from-brand-x/90 to-brand-y/30 to-45% max-w-40 aspect-square rounded-full shadow-[0_0_9px_rgba(0,0,0,0.5)]">
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
            <div class="col-span-2 px-4">
                <h1 class="text-4xl font-bold text-brand-y">Shakil Nawaz</h1>
                <h3>Web Developer, Tech Nerd</h3>
                <p class="text-justify py-4">
                    Driven and goal-oriented web developer with over a year of experience in creating responsive, optimized, and user-focused websites. Committed to leveraging the latest web technologies to build fast, feature-rich, and accessible online experiences. Skilled in integrating innovative solutions to enhance project efficiency while focusing on impactful outcomes.
                </p>
                <!-- contact section -->
                <ul class="gap-2 grid grid-rows-2 grid-flow-col">
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
                <ul></ul>
                
                <!-- work experience -->
                <h2>Work Experience</h2>
                <ul></ul>
            </div>
        </div>
    </Section>
</template>

<style scoped>
@import "tailwindcss/theme" theme(reference);
@import "../../assets/styles/theme.css" theme(reference);

.skills {
    @apply flex flex-row flex-wrap gap-1;

    &>li{
        @apply bg-brand-y text-surface font-bold w-fit rounded py-0.5 px-1;
    }
}
.interests{
    &>li{
        &::before{
            @apply font-bold content-['\2192\0020'];
        }
    }
}
ul{
    @apply pb-4;
}
a, p, li{
    @apply text-sm;
}

h2{
    @apply text-xl;
    &::before{
    @apply content-['❖\0020'];
    }
}

</style>
