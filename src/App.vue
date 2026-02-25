<script setup>
import { provide } from 'vue'
import icons from './assets/icons/icons.json'
import Layout from './layout/Layout.vue';



// make icons available to all component
provide('icons', icons)

</script>

<template>
        <Layout>

            <RouterView v-slot="{ Component }">
                <Transition name="slide-fade">
                    <component :is="Component" />
                </Transition>
            </RouterView>
        </Layout>
</template>

<style>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
    transition-delay: 0.3s;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

</style>
