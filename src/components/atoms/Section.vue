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
            'mx-auto sm:py-10 py-5' : true,
            'max-w-6xl px-5 sm:px-8' : setup.contained
        }">
        <slot></slot>
    </section>
</template>
