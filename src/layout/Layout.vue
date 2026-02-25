<script setup>
import { provide, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '../components/templates/NavBar.vue';
import PrimaryFooter from '../components/templates/PrimaryFooter.vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
    const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.3,
        effects: true,
        ignoreMobileResize: true
    });
})


const route = useRoute()
provide('route', route)
</script>
<template>

    <NavBar />
    <div id="smooth-wrapper" class="overscroll-none overflow-y-auto">
        <div id="smooth-content">
            <main 
                :class="{
                    'sm:pt-16 ': true, 
                    'print:pt-0' : route.path === '/resume'
                }">

                <slot></slot>

            </main>

            <PrimaryFooter />
        </div>
    </div>
</template>
<style>
    @import 'tailwindcss/theme' theme(reference);
    @import '../assets/styles/theme.css' theme(reference);
#smooth-content:before{
    content: '';
    @apply border-brand-y/50 absolute border-x border-dashed h-full max-w-7xl mx-auto block inset-0 inset-x-2 sm:inset-x-0 z-30 pointer-events-none;
}
</style>
