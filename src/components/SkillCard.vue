<script setup>
const data = defineProps({
    'iconSrc' : String,
    'iconAlt' : String,
    'date' : String,
    'title' : String,
    'summary' : String
})
</script>

<template>
    <div class='flex flex-row gap-4 transition-all duration-500 relative'>
        <!-- svg icon -->
        <div class="w-17 h-17 sm:w-25 sm:h-25 shrink-0 bg-surface rounded-full shadow-brand-y shadow-sm grid place-items-center transition-all duration-500">
            <img 
                class="w-10 h-10 sm:h-12 sm:w-13" 
                :src="data.iconSrc" 
                :alt="data.iconAlt"
                loading="lazy"
            >
        </div>
        <!-- skill detail -->
        <div class="flex flex-col justify-center grow relative gap-0 sm:gap-1">
            <p class="text-sm sm:text-base">{{ data.date }}</p>
            <p class="text-sm sm:text-base font-bold">{{ data.title }}</p>

            <!-- divider -->
            <svg xmlns="http://www.w3.org/2000/svg"  class='w-full h-0.5 stroke-current text-brand-y'>
                <line x1="0"  x2="100%" fill="transparent" stroke-width="4px" stroke-dasharray="12 5 3 5" />
            </svg>
            <p class="text-sm sm:text-base">{{ data.summary }}</p>
        </div>
    </div>
</template>
