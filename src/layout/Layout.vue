<script setup>
import NavBar from '../components/templates/NavBar.vue';
import PrimaryFooter from '../components/templates/PrimaryFooter.vue';

</script>
<template>
    <NavBar />
    <slot></slot>
    <PrimaryFooter />
</template>
