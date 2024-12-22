<script setup>
const setup = defineProps(
    {
        "fullWidth" : Boolean
    }
)
</script>
<template>
    <section class="mx-auto px-5 sm:px-8 sm:py-10 py-5" :class="setup.fullWidth ? '':'max-w-5xl' ">
        <slot></slot>
    </section>
</template>
