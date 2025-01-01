<script setup>
import Section from '../../components/atoms/Section.vue';
import avater from '../../assets/images/avatar.webp'
import SocialLink from '../../components/atoms/SocialLink.vue';
import { inject } from 'vue';
const iconList = inject('icons')
</script>
<template>
    <Section contained>
        <!-- resume -->
        <div class="grid-cols-3 grid divide-brand-y divide-x w-full">
            <!-- aside section -->
            <div class="">
                <!-- avater -->
                <div class="sm:row-span-2 sm:justify-self-end justify-self-center place-self-center">
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
                <ul></ul>

                <!-- interest -->
                <h2>Interest</h2>
                <ul></ul>

                <!-- education -->
                <h2>Education</h2>
                <ul></ul>

                <!-- Language -->
                <h2>Language</h2>
                <ul></ul>
            </div>
            <!-- resume main section -->
            <div class="col-span-2">
                <h1 class="text-4xl font-bold text-brand-y">Shakil Nawaz</h1>
                <h3>Web Developer, Tech Nerd</h3>
                <p>
                    Driven and goal-oriented web developer with over a year of experience in creating responsive, optimized, and user-focused websites. Committed to leveraging the latest web technologies to build fast, feature-rich, and accessible online experiences. Skilled in integrating innovative solutions to enhance project efficiency while focusing on impactful outcomes.
                </p>
                <!-- contact section -->
                <ul class="gap-2 grid grid-rows-2 grid-flow-col">
                    <li>
                        <SocialLink
                            text="Email me at"
                            textHighlight="shakilnwz@gmail.com"
                            href="mailto:shakilnwz@gmail.com"
                            :svgd="iconList.email"
                            ariaLebel="Email me at shakilnwz@gmail.com"
                        />
                    </li>
                    <li>
                        <SocialLink
                            text="Let's connect on"
                            textHighlight="WhatsApp"
                            href="https://wa.me/8801791907711"
                            :svgd="iconList.whatsapp"
                            ariaLebel="Let's connect on whatsapp"
                        />
                    </li>
                    <li>
                        <SocialLink
                            text="Find me on"
                            textHighlight="Discord"
                            href="https://discord.com/channels/@me/shakilnwz"
                            :svgd="iconList.discord"
                            ariaLebel="find me on discord"
                        />
                    </li>
                    <li>
                        <SocialLink
                            text="Find me on"
                            textHighlight="Discord"
                            href="https://discord.com/channels/@me/shakilnwz"
                            :svgd="iconList.discord"
                            ariaLebel="find me on discord"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </Section>
</template>
