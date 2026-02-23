<script setup>
const setup = defineProps(
    {
        "contained" : Boolean
    }
)
</script>
<template>
    <section 
        :class="{
            'mx-auto sm:py-10 md:py-16 py-6' : true,
            'max-w-6xl px-5 sm:px-8' : setup.contained
        }">
        <slot></slot>
    </section>
</template>
