<script setup>
import { provide } from 'vue'
import icons from './assets/icons/icons.json'
import Layout from './layout/Layout.vue';
import IndexHome from './pages/home/IndexHome.vue';

// make icons available to all component
provide('icons', icons)

</script>

<template>
    <Layout>
        <IndexHome />
    </Layout>
</template>

<style scoped>

</style>
