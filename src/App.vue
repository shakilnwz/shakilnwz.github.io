<script setup>
import { provide } from 'vue';
import icons from './assets/icons/icons.json';
import Layout from './layout/Layout.vue';

// Provide icons globally
provide('icons', icons);
</script>

<template>
    <Layout>
        <RouterView v-slot="{ Component }">
            <Transition name="page-fade" mode="out-in">
                <component :is="Component" />
            </Transition>
        </RouterView>
    </Layout>
</template>

<style>
.page-fade-enter-active,
.page-fade-leave-active {
    transition: opacity 0.2s ease;
}
.page-fade-enter-from,
.page-fade-leave-to {
    opacity: 0;
}
</style>
