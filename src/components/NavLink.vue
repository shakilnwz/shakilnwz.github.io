<script setup>
const link = defineProps(
    {
        "href": String,
        "svgd": String,
        "text": String

    }
)

</script>
<template>
    <a 
        class="justify-center flex flex-col sm:flex-row items-center gap-x-2 hover:bg-brand-y hover:text-surface sm:px-5 py-1.5 transition-all duration-300" 
        :href="link.href"
        role="menuitem"
    >
        <svg class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
            <path
                fill-rule="evenodd"
                :d="link.svgd"
                clip-rule="evenodd"
            />
        </svg>
        {{ link.text }}
    </a>
</template>
