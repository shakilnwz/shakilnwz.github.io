<script setup>
import { inject } from 'vue'
import avater from '../../assets/images/avatar.webp'
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
        <!--         rounded-3xl  -->
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
                <h1 class="text-brand-y text-lg sm:text-xl">
                    Hello World! I'm
                    <span class=" text-transparent w-fit bg-gradient-to-r from-brand-y to-brand-x bg-clip-text text-5xl sm:text-6xl font-bold block">
                        Shakil Nawaz
                    </span>
                </h1>
                <p class="text-lg sm:text-xl font-bold">A web developer, Specialized in JavaScript and PHP</p>
            </div>

            <div class="sm:row-span-2 sm:justify-self-end justify-self-center place-self-center">
                <div 
                    class="bg-radial from-brand-x/90 to-brand-y/30 to-45% dark:from-brand-y/30 dark:to-brand-x/90 max-w-60 aspect-square rounded-full shadow-[0_0_9px_rgba(0,0,0,0.5)]">

                    <img
                        class="relative z-10 w-60 object-contain"
                        :src="avater"
                        alt="avatar"
                    />
                </div>
            </div> 

            <div class="py-5 space-y-4 sm:col-span-2">
                <p>
                    I love to explore newer technologies and build things upon that. Also love to build user centric websites that actually helps.
                </p>
                <p>
                    I have skills with WordPress, Elementor, Breakdance Builder, TailwindCSS, Semantic HTML and CSS. Currently exploring Laravel.
                </p>
                <!--  added router link -->
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
