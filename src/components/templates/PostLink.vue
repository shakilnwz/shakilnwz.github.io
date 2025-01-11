<script setup>
import placeholder from '../../assets/images/placeholder.webp'
const articleData = defineProps({
    'type' : String,
    'link' : String,
    'thumbnail' : String,
    'title' : String,
    'date' : String,
    'summary' : String,
})

</script>

<template>
    <!-- TODO: add router link -->
    <a 
        target="_blank"
        :href="articleData.link" 
        :class="{
            'group overflow-clip gap-1 sm:gap-3  bg-surface/60 hover:bg-surface rounded-2xl shadow hover:shadow-lg hover:shadow-brand-y/30 transition-shadow duration-300 ' : true,
            'w-full flex flex-row h-40 relative items-end' : articleData.type == 'article',
            'flex-col w-full flex-1 sm:min-w-80 items-center' : articleData.type == 'project'
        }">
        <span 
            :class="{
            'bg-brand-y grow inline-block transition-all duration-300' : true,
            'h-full w-full grayscale group-hover:grayscale-0 absolute z-0' : articleData.type == 'article',
            'h-40 sm:h-70 w-full'  : articleData.type == 'project'
            }">
            <img
                class="object-center object-cover w-full h-full" 
                :src="articleData.thumbnail ?? placeholder"
                :alt="articleData.title"
            >
        </span>

        <div :class="{
            'grow  flex flex-col justify-center':true,
            'p-3 relative z-10 bg-gradient-to-b from-brand-x/50 to-brand-x text-surface backdrop-blur-md': articleData.type == 'article',
            'px-4 pb-4 pt-2': articleData.type == 'project'
        }">
            <div 
                :class="{
                    'flex flex-row justify-between' : true,
                    'bg-brand-x/30 w-full h-6 rounded-lg' : !articleData.title
                }">
                <h3 
                    class="font-bold">
                    {{ articleData.title }}
                </h3> 
                <span class="font-light text-right">
                    {{ articleData.date }}
                </span>
            </div>
            <p :class="{
                    'bg-brand-x/20 w-full h-12 rounded-lg mt-2' : !articleData.summary
                }">
                {{ articleData.summary.substring(0, 45).concat('...') }}
            </p>
        </div>
    </a>
</template>
