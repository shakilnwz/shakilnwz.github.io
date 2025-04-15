<script setup>
import { provide } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '../components/templates/NavBar.vue';
import PrimaryFooter from '../components/templates/PrimaryFooter.vue';

const route = useRoute()
provide('route', route)
</script>
<template>
    <NavBar />
    <main 
        :class="{
            'h-vh overflow-y-auto sm:pt-16': true, 
            'print:pt-0' : route.path === '/resume'
        }">
        <slot></slot>
    </main>
    <PrimaryFooter />
</template>
