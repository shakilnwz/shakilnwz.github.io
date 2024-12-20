<script setup>
const setup = defineProps(
    {
        "fullWidth" : Boolean
    }
)
</script>
<template>
    <section v-if='fullWidth' class="mx-auto px-5 sm:px-8 sm:py-10 py-5">
        <slot></slot>
    </section>
    <section v-else class="max-w-5xl mx-auto px-5 sm:px-8 sm:py-10 py-5">
        <slot></slot>
    </section>
</template>
