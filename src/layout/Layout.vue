<script setup>
import { provide, computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { useAnimeAudio } from '../composables/useAnimeAudio';

const route = useRoute();
provide('route', route);

const { playHover, playClick } = useAnimeAudio();

const isPrintableDoc = computed(() => {
    return ['/resume', '/bio', '/about/resume', '/about/bio'].includes(route.path);
});

const isDark = computed(() => {
    if (typeof document !== 'undefined') {
        return document.body.classList.contains('dark');
    }
    return false;
});

const toggleTheme = () => {
    playClick();
    if (typeof document !== 'undefined') {
        const nextDark = !document.body.classList.contains('dark');
        document.body.classList.toggle('dark', nextDark);
        localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    }
};

const printDoc = () => {
    playClick();
    window.print();
};
</script>

<template>
    <div class="min-h-screen w-full bg-base-y text-brand-x transition-colors duration-300">
        
        <!-- Tactical Header for Printable Views (Resume / Bio) -->
        <header
            v-if="isPrintableDoc"
            class="print:hidden sticky top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-brand-y/30 px-4 sm:px-8 py-3"
        >
            <div class="max-w-6xl mx-auto flex items-center justify-between gap-4">
                
                <RouterLink
                    to="/"
                    @mouseenter="playHover"
                    @click="playClick"
                    class="flex items-center gap-2 font-mono text-xs font-bold text-brand-y hover:text-brand-x transition-colors group"
                >
                    <span class="group-hover:-translate-x-1 transition-transform">&larr;</span>
                    <span>RETURN TO SLIDE DECK</span>
                </RouterLink>

                <div class="flex items-center gap-2.5 font-mono text-xs">
                    <!-- Print Button -->
                    <button
                        @click="printDoc"
                        @mouseenter="playHover"
                        class="px-3 py-1.5 bg-brand-y hover:bg-surface text-surface hover:text-brand-y border border-brand-y font-bold rounded-none transition-all cursor-pointer flex items-center gap-1.5"
                    >
                        <span>🖨️ PRINT / PDF</span>
                    </button>

                    <!-- Theme Toggle -->
                    <button
                        @click="toggleTheme"
                        @mouseenter="playHover"
                        class="p-1.5 border border-brand-y/40 hover:border-brand-y rounded-none text-brand-y cursor-pointer"
                        title="Toggle Theme"
                    >
                        🌓
                    </button>
                </div>

            </div>
        </header>

        <!-- Main View Container -->
        <main :class="{ 'print:p-0': isPrintableDoc }">
            <slot></slot>
        </main>

    </div>
</template>
