<script setup>
const link = defineProps(
    {
        "btype": String,
        "href": String,
        "svgd": String,
        "text": String

    }
)

</script>
<template>
    <a class="justify-center font-bold rounded-xl border-brand-y border-2 w-fit flex flex-row flex-wrap items-center gap-x-2 bg-brand-y hover:bg-surface text-surface hover:text-brand-y sm:px-5 py-4 sm:py-1.5" :href="link.href">
        <svg class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
                fill-rule="evenodd"
                :d="link.svgd"
                clip-rule="evenodd"
            />
        </svg>
        {{ link.text }}
    </a>
</template>
