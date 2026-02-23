<script setup>
import { provide } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '../components/templates/NavBar.vue';
import PrimaryFooter from '../components/templates/PrimaryFooter.vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
ScrollSmoother.create({
	smooth: 1.3, // how long (in seconds) it takes to "catch up" to the native scroll position
	effects: true, // looks for data-speed and data-lag attributes on elements
	smoothTouch: 0.1 // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});


const route = useRoute()
provide('route', route)
</script>
<template>
    <NavBar />
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <main 
                :class="{
                    'h-vh overflow-y-auto sm:pt-16': true, 
                    'print:pt-0' : route.path === '/resume'
                }">
                <slot></slot>
            </main>
            <PrimaryFooter />
        </div>
    </div>
</template>
