<script setup>
import { RouterLink } from 'vue-router';

const link = defineProps(
    {
        "secondary": Boolean,
        "href": String,
        "svgd": String,
        "text": String

    }
)

</script>
<template>
    <RouterLink
        :class="link.secondary ? 'bg-surface hover:bg-brand-y text-brand-y hover:text-surface':'bg-brand-y hover:bg-surface text-surface hover:text-brand-y'" 
        class="justify-center font-bold rounded-xl border-brand-y border-2 w-fit flex flex-row flex-wrap items-center gap-x-2  px-5 py-1 transition-all duration-300" 
        :to="link.href">
        <svg v-if="link.svgd" class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
            <path
                fill-rule="evenodd"
                :d="link.svgd"
                clip-rule="evenodd"
            />
        </svg>
        {{ link.text }}
    </RouterLink>
</template>
