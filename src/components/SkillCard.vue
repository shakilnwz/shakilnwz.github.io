<script setup>

</script>

<template>
    <div class='flex flex-row gap-4 transition-all duration-500 z-10 relative'>
        <!-- svg icon -->
        <div class="w-17 h-17 sm:w-25 sm:h-25 shrink-0 bg-surface rounded-full shadow-brand-y shadow-sm grid place-items-center transition-all duration-500">
            <img class="w-10 sm:w-13" src="../assets/vue.svg" alt="vue logo">
        </div>
        <!-- skill detail -->
        <div class="flex flex-col justify-center grow relative">
            <p class="text-sm sm:text-base">Jan 2022</p>
            <p class="text-sm sm:text-base font-bold">My post title looooong</p>
            <p class="text-sm sm:text-base">I love to explore technologies.</p>
            <svg xmlns="http://www.w3.org/2000/svg"  class='w-full h-0.5 stroke-current text-brand-y absolute bottom-0'>
                <line x1="0"  x2="100%" fill="transparent" stroke-width="4px" stroke-dasharray="12 5 3 5" />
            </svg>
        </div>
    </div>
</template>
