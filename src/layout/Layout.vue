<script setup>
import NavBar from '../components/templates/NavBar.vue';
import PrimaryFooter from '../components/templates/PrimaryFooter.vue';

</script>
<template>
    <NavBar />
    <main class="h-full">
        <slot></slot>
    </main>
    <PrimaryFooter />
</template>
