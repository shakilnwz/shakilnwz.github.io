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
        :class="link.secondary ? 'bg-transparent hover:bg-brand-y text-brand-y hover:text-surface':'bg-brand-y hover:bg-surface text-surface hover:text-brand-y'" 
        class="justify-center uppercase font-bold text-lg/4.5 rounded-none border-brand-y border-1 w-full sm:w-fit flex flex-row flex-wrap items-center gap-x-2  px-6 py-3 transition-all duration-300" 
        :to="link.href ?? '#'">
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
