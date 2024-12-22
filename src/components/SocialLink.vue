<script setup>
const content = defineProps(
    {
        "icon" : Boolean,
        "href": String,
        "svgd": String,
        "text": String,
        "textHighlight": String
    }
)
</script>

<template>
    <a 
        target="_blank"
        class="justify-center w-fit flex flex-row items-center gap-x-2 hover:underline group transition-all duration-300" 
        :href="content.href" >
        <span  v-if="content.svgd" class="p-2 rounded-full border-brand-y border"  :class="content.icon? 'bg-brand-y group':'bg-surface'" >
            <svg class="fill-current group-hover:text-brand-x h-4" :class="content.icon? 'text-surface':'text-brand-y'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                <path
                    fill-rule="evenodd"
                    :d="content.svgd"
                    clip-rule="evenodd"
                />
            </svg>
        </span>
        <span v-if="!content.icon ">
            {{ content.text ? content.text : "" }}
            <span class="text-brand-y" v-if="content.textHighlight">
                {{ content.textHighlight }}
            </span>
        </span>
    </a>
</template>
