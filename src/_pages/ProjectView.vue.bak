<script setup>
import {ref, onUnmounted } from 'vue'
import Section from '../components/atoms/Section.vue';

const canvas = ref(null)
const boxWidth = ref(200);
const boxHeight = ref(200);
const isResizing = ref(false);
const startX = ref(0);
const startY = ref(0);

const startResizing = (func, event) => {
    event.preventDefault()
    isResizing.value = true;
    const touch = event.touches ? event.touches[0] : event
    startX.value = touch.clientX;
    startY.value = touch.clientY;

    window.addEventListener("mousemove", func);
    window.addEventListener("touchmove", func);
    window.addEventListener("mouseup", stopResizing);
    window.addEventListener("touchend", stopResizing);
};

const resizeBox = (event) => {
    resizeWidth(event)
    resizeHeight(event)
};

const resizeHeight = (event) => {
    if (isResizing.value) {
        const touch = event.touches ? event.touches[0] : event
        const deltaY = touch.clientY - startY.value;
        boxHeight.value += deltaY;
        startY.value = touch.clientY;
    }
};

const resizeWidth = (event) => {
    if (isResizing.value) {
        const touch = event.touches ? event.touches[0] : event
        const deltaX = touch.clientX - startX.value;
        boxWidth.value += deltaX;
        startX.value = touch.clientX;
    }
};

const stopResizing = () => {
    isResizing.value = false;

    window.removeEventListener("mousemove", resizeHeight)
    window.removeEventListener("mousemove", resizeWidth)
    window.removeEventListener("mousemove", resizeBox)
    window.removeEventListener("mouseup", stopResizing)
    window.removeEventListener("touchmove", resizeHeight)
    window.removeEventListener("touchmove", resizeWidth)
    window.removeEventListener("touchmove", resizeBox)
    window.removeEventListener("touchend", stopResizing)
};

onUnmounted(() => {
    window.removeEventListener("mousemove", resizeHeight)
    window.removeEventListener("mousemove", resizeWidth)
    window.removeEventListener("mousemove", resizeBox)
    window.removeEventListener("mouseup", stopResizing)
    window.removeEventListener("touchmove", resizeHeight)
    window.removeEventListener("touchmove", resizeWidth)
    window.removeEventListener("touchmove", resizeBox)
    window.removeEventListener("touchend", stopResizing)
})


</script>
<template>
    <Section contained>
        <h2>Projects page</h2>
        <h3 class="text-brand-y text-xl font-semibold pt-5">Drag to resize box</h3>
        <div class="flex flex-wrap gap-4 w-full justify-between pb-4">
            <label class="flex-auto flex justify-between sm:justify-start gap-4">
                Box Width:
                <input class="outline-1 outline-brand-y rounded-lg px-2" type="number" v-model="boxWidth" />
            </label>
            <label class="flex-auto flex justify-between sm:justify-start gap-4">
                Box Height:
                <input class="outline-1 outline-brand-y rounded-lg px-2" type="number" v-model="boxHeight" />
            </label>
        </div>
        <div ref="canvas" class="w-full">
            <div
                class="relative overflow-hidden cursor-grab border-2 border-brand-x rounded-lg"
                :style="{ width: boxWidth + 'px', height: boxHeight + 'px' }"
            >
                <div
                    class="absolute cursor-e-resize top-0 bottom-0 bg-brand-y/40 right-0 w-5 flex" 
                    @mousedown="(e)=>{startResizing(resizeWidth, e)}" @touchstart="(e)=>{startResizing(resizeWidth, e)}"
                >
                    <span class='my-auto user-select-none text-sm rotate-270 origin-center'>{{boxHeight}}</span>
                </div>
                <div
                    class="absolute cursor-s-resize left-0 bottom-0 bg-brand-y/40 right-0 h-5 user-select-none"
                    @mousedown="(e)=>{startResizing(resizeHeight, e)}" @touchstart="(e)=>{startResizing(resizeHeight, e)}"
                >
                    <span class='mx-auto w-fit block user-select-none text-sm'>{{boxWidth}}</span>
                </div>
                <div
                    class="absolute cursor-nwse-resize w-5 h-5 right-0 bottom-0 bg-brand-x/50"
                    @mousedown="(e)=>{startResizing(resizeBox, e)}" @touchstart="(e)=>{startResizing(resizeBox, e)}"
                />
            </div>
        </div>
    </Section>
</template>


