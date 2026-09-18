<script setup>
import { useSlideDeck, SLIDES } from '../../composables/useSlideDeck';
import { useAnimeAudio } from '../../composables/useAnimeAudio';

const {
    currentSlideIndex,
    totalSlides,
    currentSlide,
    progressPercent,
    nextSlide,
    prevSlide,
    goToSlide,
    viewMode
} = useSlideDeck();

const { playHover, playClick } = useAnimeAudio();

const handlePrev = () => {
    playClick();
    prevSlide();
};

const handleNext = () => {
    playClick();
    nextSlide();
};

const handleGoTo = (index) => {
    playClick();
    goToSlide(index);
};
</script>

<template>
    <footer class="fixed bottom-0 left-0 right-0 z-40 select-none pointer-events-none pb-2 sm:pb-3">
        <!-- Thin Cyber Progress Track -->
        <div class="w-full h-1 bg-brand-y/20 relative overflow-hidden mb-2">
            <div
                class="h-full bg-brand-y glow-brand-y-sm transition-all duration-500 ease-out"
                :style="{ width: `${progressPercent}%` }"
            ></div>
        </div>

        <!-- Floating HUD Controller Dock -->
        <div class="max-w-6xl mx-auto px-4 flex items-center justify-between pointer-events-auto">
            
            <!-- Left: Current Mission Info -->
            <div class="hidden md:flex items-center gap-2 px-3 py-1.5 bg-surface/85 border border-brand-y/35 rounded-none backdrop-blur-md shadow-sm">
                <span class="w-2 h-2 rounded-none bg-brand-y animate-ping"></span>
                <span class="font-mono text-xs font-bold text-brand-y">
                    {{ currentSlide.num }} // 07
                </span>
                <span class="text-xs font-sans font-bold text-brand-x tracking-wider uppercase">
                    {{ currentSlide.title }}
                </span>
                <span class="text-[10px] font-mono px-1.5 py-0.2 bg-brand-y/15 text-brand-y rounded-none font-bold">
                    {{ currentSlide.codeTag }}
                </span>
            </div>

            <!-- Center: Prev / Dots / Next Controls -->
            <div class="mx-auto flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 bg-surface/90 border border-brand-y/40 rounded-none backdrop-blur-md shadow-sm">
                
                <!-- PREV Button -->
                <button
                    @click="handlePrev"
                    @mouseenter="playHover"
                    class="group px-2 sm:px-3 py-1 bg-brand-y/10 hover:bg-brand-y hover:text-surface text-brand-y border border-brand-y/50 clip-chamfer-sm transition-all duration-200 cursor-pointer flex items-center gap-1"
                    title="Previous Slide (Up / Left)"
                >
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    <span class="font-mono font-bold text-xs hidden sm:inline">PREV</span>
                </button>

                <!-- Slide Number Nodes (Pills) -->
                <div class="flex items-center gap-1 px-1">
                    <button
                        v-for="(slide, index) in SLIDES"
                        :key="slide.id"
                        @click="handleGoTo(index)"
                        @mouseenter="playHover"
                        class="relative group py-1 px-1.5 sm:px-2 rounded-none font-mono text-[11px] sm:text-xs transition-all duration-200 cursor-pointer"
                        :class="currentSlideIndex === index ? 'bg-brand-y text-surface font-bold glow-brand-y-sm scale-105' : 'text-brand-x/60 hover:text-brand-y hover:bg-brand-y/10'"
                        :title="`${slide.num} - ${slide.title}`"
                    >
                        <span>{{ slide.num }}</span>

                        <!-- Micro Tooltip on Hover -->
                        <span class="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-surface border border-brand-y/60 text-brand-y font-mono text-[10px] tracking-wider rounded-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                            {{ slide.title }}
                        </span>
                    </button>
                </div>

                <!-- NEXT Button -->
                <button
                    @click="handleNext"
                    @mouseenter="playHover"
                    class="group px-2 sm:px-3 py-1 bg-brand-y/10 hover:bg-brand-y hover:text-surface text-brand-y border border-brand-y/50 clip-chamfer-sm transition-all duration-200 cursor-pointer flex items-center gap-1"
                    title="Next Slide (Down / Right / Space)"
                >
                    <span class="font-mono font-bold text-xs hidden sm:inline">NEXT</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

            </div>

            <!-- Right: Keyboard Hint -->
            <div class="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-surface/85 border border-brand-y/35 clip-chamfer-sm backdrop-blur-md text-[11px] font-mono text-brand-x/70">
                <span class="text-brand-y font-bold">NAV:</span>
                <kbd class="px-1.5 py-0.5 bg-brand-y/15 border border-brand-y/30 rounded-none text-[10px]">▲</kbd>
                <kbd class="px-1.5 py-0.5 bg-brand-y/15 border border-brand-y/30 rounded-none text-[10px]">▼</kbd>
                <span class="text-brand-x/50">/</span>
                <kbd class="px-1.5 py-0.5 bg-brand-y/15 border border-brand-y/30 rounded-none text-[10px]">SPACE</kbd>
            </div>

        </div>
    </footer>
</template>
