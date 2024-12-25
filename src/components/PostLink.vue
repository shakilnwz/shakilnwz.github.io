<script setup>
import placeholder from '../assets/placeholder.webp'
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
    <a 
        :href="articleData.link" 
        :class="{
            'group overflow-clip gap-1 sm:gap-3 items-center bg-surface/60 rounded-2xl shadow hover:shadow-lg hover:shadow-brand-y/30 transition-shadow duration-300 ' : true,
            'w-full flex flex-row h-30' : articleData.type == 'article',
            'flex-col w-full sm:min-w-80 flex-1 h-fit' : articleData.type == 'project'
        }">
        <span 
            :class="{
            'bg-brand-y grayscale grow inline-block group-hover:grayscale-0 transition-all duration-300' : true,
            'h-full w-40 max-w-40' : articleData.type == 'article',
            'h-40 sm:h-70 w-full'  : articleData.type == 'project'
            }">
            <img
                class="object-center object-contain w-full h-full" 
                :src="articleData.thumbnail ?? placeholder"
                :alt="articleData.title"
            >
        </span>

        <div class="grow py-2 px-4 h-full flex flex-col justify-center">
            <div 
                :class="{
                    'flex flex-row justify-between' : true,
                    'bg-brand-x/30 w-full h-6 rounded-lg' : !articleData.title
                }">
                <h3 
                    class="font-bold">
                    {{ articleData.title }}
                </h3> 
                <span class="font-light">
                    {{ articleData.date }}
                </span>
            </div>
            <p :class="{
                    'bg-brand-x/20 w-full h-12 rounded-lg mt-2' : !articleData.summary
                }">
                {{ articleData.summary }}
            </p>
        </div>
    </a>
</template>
