<script setup>
const data = defineProps({
    'isVisible': {
        'type': Boolean,
        'default': false
    },
    'iconSrc': String,
    'iconAlt': String,
    'date': String,
    'title': String,
    'summary': String
})


</script>

<template>
    <div :class="{
        'flex flex-row gap-2 h-22 sm:h-fit w-full overflow-hidden sm:overflow-visible pl-1 sm:pl-0 sm:gap-4 transition-all duration-500 relative items-center': true,
        '': data.isVisible
    }">
        <!-- svg icon -->
        <div class="w-12 h-12 aspect-square sm:h-25 sm:w-25 grid place-items-center">
            <div :class="{
                'w-2 h-2 shrink-0 bg-surface rounded-full shadow-brand-y shadow-sm grid place-items-center transition-all duration-500': true,
                'w-full h-full': data.isVisible

            }">
                <img :class="{
                    'w-0 h-0 transition-all duration-700': true,
                    'w-7 h-7 sm:w-13 sm:h-12 ': data.isVisible
                }" :src="data.iconSrc" :alt="data.iconAlt" loading="lazy">
            </div>
        </div>
        <!-- skill detail -->
        <div :class="{
            'w-0 whitespace-nowrap flex flex-col justify-center grow relative gap-0 sm:gap-1 overflow-hidden transition-all duration-400': true,
            'w-fit': data.isVisible
        }">
            <p :class="{
                'w-0 whitespace-nowrap overflow-hidden text-sm sm:text-base transition-all duration-200': true,
                'w-full': data.isVisible
            }">{{ data.date }}</p>
            <p :class="{
                'w-0 whitespace-break-spaces sm:whitespace-nowrap overflow-hidden text-sm font-bold sm:text-base transition-all duration-400': true,
                'w-full': data.isVisible
            }">{{ data.title }}</p>

            <!-- divider -->
            <svg xmlns="http://www.w3.org/2000/svg" :class="{
                'w-0 h-0.5 stroke-current text-brand-y transition-all duration-400': true,
                'w-full': data.isVisible
            }">

                <line x1="0" x2="100%" fill="transparent" stroke-width="4px" stroke-dasharray="12 5 3 5" />
            </svg>
            <div class="w-full overflow-hidden">
                <p :class="{
                    'w-0 whitespace-break-spaces sm:whitespace-nowrap text-sm text-ellipsis overflow-hidden sm:text-base transition-all duration-700': true,
                    'w-full': data.isVisible
                }">{{ data.summary }}</p>
            </div>
        </div>
    </div>
</template>
