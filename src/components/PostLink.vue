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
            'flex-col' : articleData.type == 'project'
        }">
        <span 
            :class="{
            'bg-brand-y w-40 max-w-40 grow grayscale group-hover:grayscale-0 transition-all duration-300' : true,
            'h-full' : articleData.type == 'article',
            'h-100' : articleData.type == 'project'
            }">
            <img
                class="object-center object-contain w-full h-full" 
                :src="articleData.thumbnail ?? placeholder"
                :alt="articleData.title"
            >
        </span>

        <div class="grow p-2 h-full flex flex-col justify-around">
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
                    'bg-brand-x/20 w-full h-12 rounded-lg' : !articleData.summary
                }">
                {{ articleData.summary }}
            </p>
        </div>
    </a>
</template>
