<script setup>
import Section from '../components/Section.vue'
import SkillCard from '../components/SkillCard.vue'
</script>

<template>
    <Section class="space-y-2.5 sm:space-y-7 relative">
        <h2 class="sticky top-0 backdrop-blur-2xl sm:top-20">Journey</h2>
        <div class="flex flex-col sm:flex-row flex-wrap sm:gap-7 gap-4">
            <p class="sm:max-w-70">I have skills with WordPress, Elementor, Breakdance Builder, TailwindCSS, Semantic HTML and CSS. Currently exploring Laravel.</p>

            <div class="grow relative space-y-11">
                <span class="absolute h-full w-1 bg-brand-y top-0 left-8 sm:left-12 z-0"></span>

                <!-- skill card -->
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />

            </div>
        </div>
        
    </Section>
</template>
