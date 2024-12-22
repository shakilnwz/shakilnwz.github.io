<script setup>
import { provide } from 'vue'
import icons from './assets/icons.json'
import Nav from './components/Nav.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

// make icons available to all component
provide('icons', icons)

</script>

<template>
        <Nav />
        <Main />
        <Footer />
</template>

<style scoped>

</style>
