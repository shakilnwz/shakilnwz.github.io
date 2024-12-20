<script setup>
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
    <a v-if="link.secondary" class="justify-center font-bold rounded-xl border-brand-y border-2 w-fit flex flex-row flex-wrap items-center gap-x-2 hover:bg-brand-y bg-surface hover:text-surface text-brand-y px-5 py-1 transition-all" :href="link.href">
        <svg v-if="link.svgd" class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
                fill-rule="evenodd"
                :d="link.svgd"
                clip-rule="evenodd"
            />
        </svg>
        {{ link.text }}
    </a>
    <a v-else class="transition-all justify-center font-bold rounded-xl border-brand-y border-2 w-fit flex flex-row flex-wrap items-center gap-x-2 bg-brand-y hover:bg-surface text-surface hover:text-brand-y px-5 py-1" :href="link.href">
        <svg v-if="link.svgd" class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
                fill-rule="evenodd"
                :d="link.svgd"
                clip-rule="evenodd"
            />
        </svg>
        {{ link.text }}
    </a>
</template>
