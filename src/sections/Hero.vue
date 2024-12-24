<script setup>
import { inject } from 'vue'
import Section from '../components/Section.vue'
import Button from "../components/Button.vue"

const iconList = inject('icons');
</script>

<template>
    <Section class="grid sm:grid-cols-3 gap-2 sm:gap-0">
        <div class="sm:col-span-2">
            <h1 class="text-brand-y text-lg sm:text-xl">
                Hello World! I'm
                <span class="text-transparent w-fit bg-gradient-to-r from-brand-y to-brand-x bg-clip-text text-5xl sm:text-6xl font-bold block">
                    Shakil Nawaz
                </span>
            </h1>
            <p class="text-lg sm:text-xl font-bold">A web developer, Specialized in JavaScript and PHP</p>
        </div>

        <div class="sm:row-span-2 sm:justify-self-end justify-self-center self-center">
            <div class="bg-radial from-brand-x/90 to-brand-y/30 to-45% max-w-60 aspect-ratio-1 rounded-full shadow-[0_0_9px_rgba(0,0,0,0.5)]">
                <img class="w-full aspect-ratio-1" loading='lazy' src="../assets/avatar.webp" alt="avatar"  />
            </div>
        </div> 

        <div class="py-5 space-y-4 sm:col-span-2">
            <p>
                I love to explore newer technologies and build things upon that. Also love to build user centric websites that actually helps.
            </p>
            <p>
                I have skills with WordPress, Elementor, Breakdance Builder, TailwindCSS, Semantic HTML and CSS. Currently exploring Laravel.
            </p>

            <div class="flex flex-row gap-2 flex-wrap">
                <Button
                    text="More About Me"
                    href="/about"
                    :svgd="iconList.about"
                />
                <Button
                    secondary
                    text="Résumé"
                    href="/resume"
                    :svgd="iconList.pdf"
                />
            </div>
        </div>
    </Section>

</template>
