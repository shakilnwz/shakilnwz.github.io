<script setup>
import { provide } from 'vue'
import icons from './assets/icons/icons.json'
import Layout from './layout/Layout.vue';



// make icons available to all component
provide('icons', icons)

</script>

<template>
    <Layout>
        <Transition name="slide-fade">
            <RouterView />
        </Transition>
    </Layout>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
