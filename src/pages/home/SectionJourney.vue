<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import Section from '../../components/atoms/Section.vue'
import SkillCard from '../../components/templates/SkillCard.vue'

// import static assets
import journey from '../../assets/journey.json'
import vueIcon from '../../assets/icons/vue.svg'
import tailwindIcon from '../../assets/icons/tailwind.svg'
import cssIcon from '../../assets/icons/css.svg'
import jsIcon from '../../assets/icons/js.svg'
import laravelIcon from '../../assets/icons/laravel.svg'
import wordpressIcon from '../../assets/icons/wordpress.svg'
import htmlIcon from '../../assets/icons/html.svg'
import phpIcon from '../../assets/icons/php.svg'


// creating icon path and view status
const iconStatic = reactive({
    'vue': { icon: vueIcon, inView: false },
    'css': { icon: cssIcon, inView: false },
    'js': { icon: jsIcon, inView: false },
    'tailwind': { icon: tailwindIcon, inView: false },
    'laravel': { icon: laravelIcon, inView: false },
    'wordpress': { icon: wordpressIcon, inView: false },
    'html': { icon: htmlIcon, inView: false },
    'php': { icon: phpIcon, inView: false }
})


//get all the item to animate
const listItem = ref([])

// add observer and update view status
const intObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.id
            if (iconStatic[id]) {
                iconStatic[id].inView = entry.isIntersecting
            }
        });
    },
    { root: null, threshold: 0.5, rootMargin: "700px 0px -70px 0px" },
);

// mount the observer
onMounted(() => {
    listItem.value = listItem.value.map((el) => el.$el)
    listItem.value.forEach(
        (elem) => intObserver.observe(elem)
    )
})

// unmount the observer
onUnmounted(() => {
    listItem.value.forEach(
        (elem) => intObserver.unobserve(elem)
    )
    intObserver.disconnect()
})
</script>

<template>
    <Section class="space-y-2.5 sm:space-y-4 relative">
        <div
            class="sticky z-10 backdrop-blur-3xl sm:top-15 gap-2 flex flex-wrap justify-between py-2 items-center">
            <h2 class=" max-w-6xl mx-auto w-full px-5 sm:px-8">Journey</h2>
        </div>
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row flex-wrap sm:gap-7 gap-4 px-5 sm:px-8">

            <p class="sm:max-w-70">I enjoy engaging in problem-solving and continuously learning new things.</p>

            <div id="cards" class="grow relative space-y-11">
                <span id="hline" class="absolute bottom-0 w-1 bg-brand-y top-5 left-6.5 sm:left-12 z-0"></span>

                <!-- skill card -->
                <SkillCard ref="listItem" :id='index' v-for='(item, index) in journey' :key="index"
                    :iconSrc="iconStatic[item.name].icon" :iconAlt="item.name + ' logo'" :date="item.date"
                    :title="item.title" :summary="item.summary" :isVisible="iconStatic[item.name].inView" />

            </div>
        </div>

    </Section>
</template>
