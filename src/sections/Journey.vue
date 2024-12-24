<script setup>
import Section from '../components/Section.vue'
import SkillCard from '../components/SkillCard.vue'
import journey from '../assets/journey.json'

import vueIcon from '../assets/vue.svg'
import tailwindIcon from '../assets/tailwind.svg'
import cssIcon from '../assets/css.svg'
import jsIcon from '../assets/js.svg'
import laravelIcon from '../assets/laravel.svg'
import wordpressIcon from '../assets/wordpress.svg'
import htmlIcon from '../assets/html.svg'
import phpIcon from '../assets/php.svg'

const iconStatic = {
    'vue' : vueIcon,
    'css' : cssIcon,
    'js' : jsIcon,
    'tailwind' : tailwindIcon,
    'laravel' : laravelIcon,
    'wordpress' : wordpressIcon,
    'html' : htmlIcon,
    'php' : phpIcon
}


</script>

<template>
    <Section class="space-y-2.5 sm:space-y-7 relative">
        <h2 class="sticky top-0 z-10 backdrop-blur-2xl sm:top-20">Journey</h2>
        <div class="flex flex-col sm:flex-row flex-wrap sm:gap-7 gap-4">
            <p class="sm:max-w-70">I have skills with WordPress, Elementor, Breakdance Builder, TailwindCSS, Semantic HTML and CSS. Currently exploring Laravel.</p>

            <div class="grow relative space-y-11">
                <span class="absolute h-full w-1 bg-brand-y top-0 left-8 sm:left-12 z-0"></span>

                <!-- skill card -->
                <SkillCard
                    v-for='item in journey'
                    :key="item.id"
                    :iconSrc= "iconStatic[item.name]"
                    :iconAlt="item.iconAlt"
                    :date="item.date"
                    :title="item.title"
                    :summary="item.summary"
                />

            </div>
        </div>
        
    </Section>
</template>
