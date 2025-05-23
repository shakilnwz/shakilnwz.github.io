<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { RouterLink } from 'vue-router';
import NavLink from "../atoms/NavLink.vue"

const route = inject('route')
const iconList = inject('icons')
const themeSwitch = {
    'light' : iconList.sun,
    'dark' : iconList.moon
}

const switchIcon = ref(themeSwitch['light'])

const applyTheme = (theme) =>{
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
    switchIcon.value = themeSwitch[theme]
}

const savedTheme = localStorage.getItem('theme');
savedTheme ? applyTheme(savedTheme) : window.matchMedia('(prefers-color-scheme: dark)').matches ? applyTheme('dark') : applyTheme('light')

const toggleTheme = ()=>{
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme); 
}

const isSticky = ref(false);

const handleScroll = ()=>{
    isSticky.value = window.scrollY > 20;
}
onMounted(()=>{
    window.addEventListener('scroll', handleScroll);
})
onUnmounted(()=>{
    window.removeEventListener('scroll', handleScroll);
})
</script>

<template>
    <nav 
        :class="{
            'sm:fixed left-0 right-0 top-0 transition-all duration-300 relative z-50 sm:shadow-none py-2.5' : true,
            'sm:py-5' : !isSticky,
            'sm:shadow-sm sm:backdrop-blur-xl sm:py-2.5' : isSticky,
            'print:hidden' : route.path === '/resume'
        }"
        >
        <div class="relative z-999 max-w-6xl mx-auto px-5 flex flex-row items-center justify-between sm:px-8 gap-2">
            <!-- logo -->

            <RouterLink class="block" to="/" aria-label='Home'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10" viewBox="0 0 45 40">
                    <g class="fill-current" fill-rule="evenodd">
                        <path class="text-brand-x" d="M0 0h16.548L45 18.912 28.216 40H15.782l15.32-18.854L0 0Z"/>
                        <path class="text-brand-y" d="M22.979 0h10.486L10.789 40H0L22.979 0Z"/>
                    </g>
                </svg>
            </RouterLink>

            <!-- tab -->
            <div 
                class="backdrop-blur-2xl sm:bg-surface fixed bottom-0 left-0 right-0 sm:relative sm:rounded-xl overflow-hidden shadow-[0_-1px_10px_rgba(0,0,0,0.4)] sm:shadow-[0_1px_5px_rgba(0,0,0,0.25)] "
                role="menuitem"
            >
                <ul class="flex flex-row *:grow *:basis-1 divide-brand-y divide-x">
                    <li>
                        <NavLink 
                            href="/about"
                            :svgd="iconList.about"
                            text="About"
                        />
                    </li>
                    <li>
                        <NavLink 
                            href="/articles" 
                            :svgd="iconList.articles"
                            text="Articles" 
                        />
                    </li>
                    <li>
                        <NavLink 
                            href="/projects"
                            :svgd="iconList.projects"
                            text="Projects"
                        />
                    </li>
                    <li>
                        <NavLink 
                            href="/contact"
                            :svgd="iconList.contact"
                            text="Contact"
                        />
                    </li>
                </ul>

            </div>

            <!-- quicklinks -->
            <div class="flex flex-row gap-4">

                <a  class="hover:text-brand-y" href="https://github.com/shakilnwz" target="_blank">
                    <svg class="h-5 transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"  >
                        <path
                            class="fill-current"
                            fill-rule="evenodd"
                            :d="iconList.github"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>

                <!-- theme toggle -->
                <div class="cursor-pointer hover:text-brand-y" @click="toggleTheme()">
                    <svg class="h-5 transition duration-300" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
                        <path
                            class="fill-current"
                            fill-rule="evenodd"
                            :d="switchIcon" 
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>
