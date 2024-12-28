<script setup>
 const data = defineProps({
     'isVisible': {
         'type': Boolean,
         'default': false
     },
     'iconSrc' : String,
     'iconAlt' : String,
     'date' : String,
     'title' : String,
     'summary' : String
 })


</script>

<template>
    <div 
        :class="{
            'flex flex-row gap-4 transition-all duration-500 relative': true,
            '' : data.isVisible
        }">
        <!-- svg icon -->
        <div class="w-17 h-17 sm:h-25 sm:w-25 grid place-items-center">
            <div 
                :class="{
                    'w-2 h-2 shrink-0 bg-surface rounded-full shadow-brand-y shadow-sm grid place-items-center transition-all duration-500':true,
                    'w-full h-full' : data.isVisible

                }">
                <img 
                    :class="{
                        'w-0 h-0 transition-all duration-700': true,
                        'w-10 h-10 sm:w-13 sm:h-12 ': data.isVisible
                    }" 
                    :src="data.iconSrc" 
                    :alt="data.iconAlt"
                    loading="lazy"
                >
            </div>
        </div>
        <!-- skill detail -->
        <div 
            :class="{
                'flex flex-col justify-center grow relative gap-0 sm:gap-1 overflow-hidden': true,
            }">
            <p 
                :class="{
                    'invisible text-sm sm:text-base transition-all duration-300': true,
                    'visible' : data.isVisible
                }">{{ data.date }}</p>
            <p  :class="{
                    'invisible text-sm sm:text-base transition-all duration-300 font-bold': true,
                    'visible' : data.isVisible
                }">{{ data.title }}</p>

            <!-- divider -->
            <svg xmlns="http://www.w3.org/2000/svg"   :class="{
                'invisible w-full h-0.5 stroke-current text-brand-y': true,
                'visible' : data.isVisible
            }">

                <line x1="0"  x2="100%" fill="transparent" stroke-width="4px" stroke-dasharray="12 5 3 5" />
            </svg>
            <p v-show="data.isVisible" :class="{
                    'invisible text-sm sm:text-base transition-all duration-300': true,
                    'visible' : data.isVisible
                }">{{ data.summary }}</p>
        </div>
    </div>
</template>
