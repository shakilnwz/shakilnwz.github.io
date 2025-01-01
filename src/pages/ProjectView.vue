<script setup>
import {ref, onUnmounted } from 'vue'
import Section from '../components/atoms/Section.vue';

const boxWidth = ref(200);
const boxHeight = ref(200);
const isResizing = ref(false);
const startX = ref(0);
const startY = ref(0);

const startResizing = (event) => {
    isResizing.value = true;
    startX.value = event.clientX;
    startY.value = event.clientY;

    // Add global event listeners for resizing
    window.addEventListener("mousemove", resizeBox);
    window.addEventListener("mouseup", stopResizing);
};

const resizeBox = (event) => {
    if (isResizing.value) {
        const deltaX = event.clientX - startX.value;
        const deltaY = event.clientY - startY.value;
        boxWidth.value += deltaX;
        boxHeight.value += deltaY;
        startX.value = event.clientX;
        startY.value = event.clientY;
    }
};

const resizeHeight = (event) => {
    if (isResizing.value) {
        const deltaY = event.clientY - startY.value;
        boxHeight.value += deltaY;
        startY.value = event.clientY;
    }
};

const stopResizing = () => {
    isResizing.value = false;

    // Clean up global event listeners
    window.removeEventListener("mousemove", resizeBox);
    window.removeEventListener("mouseup", stopResizing);
};

// Cleanup in case the component is destroyed during resizing
onUnmounted(() => {
    window.removeEventListener("mousemove", resizeBox);
    window.removeEventListener("mouseup", stopResizing);
})



</script>
<template>
    <Section contained>
        <h2>Projects page</h2>
        <h3 class="text-brand-y text-xl font-semibold pt-5">Drag to resize box</h3>
        <div class="flex gap-4 w-full justify-between pb-4">
            <label>
                Box Width:
                <input type="number" v-model="boxWidth" />
            </label>
            <label>
                Box Height:
                <input type="number" v-model="boxHeight" />
            </label>
        </div>
        <div
            class="relative overflow-hidden cursor-grab border-2 border-brand-x rounded-lg"
            :style="{ width: boxWidth + 'px', height: boxHeight + 'px' }"
        >
            <div
                class="absolute cursor-e-resize top-0 bottom-0 bg-brand-y right-0 w-2"
                @mousedown="startResizing"
            />
            <div
                class="absolute cursor-s-resize left-0 bottom-0 bg-brand-y right-0 h-2"
                @mousedown="startResizing"
            />
            <div
                class="absolute cursor-nwse-resize w-4 h-4 right-0 bottom-0 bg-brand-x"
                @mousedown="startResizing"
            />
        </div>
    </Section>
</template>


