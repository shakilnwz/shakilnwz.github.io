<script setup>
import { provide } from 'vue'
import icons from './assets/icons.json'
import Nav from './Nav.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'

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
