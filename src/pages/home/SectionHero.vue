<script setup>
import { inject } from 'vue'
import avater from '../../assets/images/avatar-formal.webp'
import Section from '../../components/atoms/Section.vue'
import Button from '../../components/atoms/Button.vue'

const iconList = inject('icons');
// const cursorPos = {
//     'style' : ref(null)
// }

// const pointer = (e)=>{
//     e.stopImmediatePropagation();
//     cursorPos.style.value = `left: ${e.clientX - 160}px`
// }

</script>

<template>
    <!-- <Section id="hero" @mousemove="pointer" @touchmove="pointer" class="relative overflow-hidden group"> -->
    <Section id="hero" class="relative overflow-hidden group">
        <!-- <span id="fancybox" class="z-0 absolute  top-0 left-0 right-0 bottom-0"> -->
        <!--     <span  -->
        <!--         id="cursorpulse"   -->
        <!--         :style="cursorPos.style.value"  -->
        <!--         class=" -->
        <!--         transition-all -->
        <!--         rounded-none  -->
        <!--         duration-300  -->
        <!--         h-50 -->
        <!--         group-hover:sm:h-full  -->
        <!--         sm:top-80 -->
        <!--         group-hover:sm:top-0 -->
        <!--         absolute top-1/4 -->
        <!--         bg-gradient-to-r from-transparent via-brand-y/70 to-transparent -->
        <!--         "></span> -->
        <!-- </span> -->
        <div class="relative z-10 max-w-6xl px-5 sm:px-8 mx-auto grid sm:grid-cols-3 gap-2 sm:gap-0 backdrop-blur-xs">

            <div class="sm:col-span-2">
                <h1 class="text-brand-x text-lg sm:text-xl">
                    I'm
                    <span class="pb-2 text-brand-y w-fit text-6xl sm:text-8xl font-bold block">
                        Shakil Nawaz
                    </span>
                </h1>
                <p class="text-lg sm:text-xl font-bold">Web developer &middot; Physics graduate &middot; Currently engineering with Vue, Alpine, Tailwind, Deno &amp; PHP</p>
            </div>

            <div class="sm:row-span-2 sm:justify-self-end justify-self-center place-self-center">
                <div 
                    class="bg-radial from-brand-x/90 to-brand-y/30 to-45% dark:from-brand-y/30 dark:to-brand-x/90 max-w-80 aspect-square rounded-none shadow-[0_0_9px_rgba(0,0,0,0.5)] overflow-hidden">

                    <img
                        class="relative z-10 w-80 object-contain"
                        :src="avater"
                        alt="avatar"
                    />
                </div>
            </div> 

            <div class="py-5 space-y-4 sm:col-span-2">
                <p>
                    I'm a web developer with over 3 years of experience building fast, user-focused sites — from custom Vue applications to WordPress themes and e-commerce platforms. I bring a physics graduate's rigor to frontend work: measure, optimize, iterate.
                </p>
                <p>
                    My stack spans VueJs, AlpineJS, TailwindCSS, semantic HTML, PHP and WordPress. I'm currently deepening my backend with Laravel and exploring modern runtimes like Deno. When I'm not shipping features, I'm reading about LLM tooling, open-source alternatives, and whatever's next in web tech.
                </p>
                <div class="flex pt-4 flex-col sm:flex-row gap-4 flex-wrap">
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

        </div>
    </Section>

</template>
<style scoped>

#cursorpulse{
    animation: run 5s linear infinite;
    width: 200dvw;
}
#hero:hover #cursorpulse{
    animation: none;
    width: 20rem;
}
@keyframes run {
from{
    transform: translateX(-100%);
}
to {
    transform: translateX(100%);
}
}

#fancybox{
    mask-image: url('../../assets/images/bgvector.svg');
    mask-size: 70%;
    mask-position: center;
}
</style>
