<script setup>
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useSlideDeck, SLIDES } from '../../composables/useSlideDeck';
import { useAnimeAudio } from '../../composables/useAnimeAudio';

const {
    isOverviewOpen,
    toggleOverview,
    currentSlideIndex,
    goToSlide
} = useSlideDeck();

const { playHover, playClick } = useAnimeAudio();

const handleSelect = (index) => {
    playClick();
    goToSlide(index);
    isOverviewOpen.value = false;
};

const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isOverviewOpen.value) {
        toggleOverview();
    }
};

onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
    <div
        v-if="isOverviewOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-surface/85 animate-fade-in"
        @click.self="toggleOverview"
    >
        <!-- Modal Card Frame with clean rounded-none corners -->
        <div class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface border-2 border-brand-y/60 rounded-none p-5 sm:p-8 shadow-sm">
            
            <!-- Top Bar -->
            <div class="flex items-center justify-between border-b border-brand-y/30 pb-4 mb-6">
                <div class="flex items-center gap-3">
                    <div class="w-3 h-3 bg-brand-y animate-ping rounded-none"></div>
                    <div>
                        <h3 class="text-xl sm:text-2xl font-bold uppercase tracking-wider text-brand-y">
                            TACTICAL MISSION SELECT
                        </h3>
                        <p class="font-mono text-xs text-brand-x/70">
                            SELECT SECTOR DESTINATION &bull; SYSTEM READY
                        </p>
                    </div>
                </div>

                <button
                    @click="toggleOverview"
                    @mouseenter="playHover"
                    class="px-3 py-1 border border-brand-y/50 hover:bg-brand-y hover:text-surface text-brand-y font-mono font-bold text-xs rounded-none transition-all cursor-pointer"
                >
                    [ESC] CLOSE
                </button>
            </div>

            <!-- Slides Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-6">
                <button
                    v-for="(slide, index) in SLIDES"
                    :key="slide.id"
                    @click="handleSelect(index)"
                    @mouseenter="playHover"
                    class="group relative text-left p-4 border transition-all duration-300 rounded-none cursor-pointer"
                    :class="currentSlideIndex === index
                        ? 'border-brand-y bg-brand-y/20 glow-brand-y-sm'
                        : 'border-brand-y/30 hover:border-brand-y hover:bg-brand-y/10 bg-surface/50'"
                >
                    <!-- Watermark Code Tag -->
                    <span class="absolute right-3 bottom-2 text-sm font-mono font-bold text-brand-y/20 group-hover:text-brand-y/40 transition-colors pointer-events-none">
                        // {{ slide.codeTag }}
                    </span>

                    <div class="flex items-center justify-between mb-2">
                        <span class="font-mono text-xs font-bold text-brand-y">
                            // {{ slide.num }}
                        </span>
                        <span class="text-[10px] font-mono px-1.5 py-0.5 bg-brand-y/15 text-brand-y border border-brand-y/30 rounded-none">
                            {{ slide.badge }}
                        </span>
                    </div>

                    <h4 class="font-sans font-bold text-base text-brand-x group-hover:text-brand-y transition-colors">
                        {{ slide.title }}
                    </h4>
                    <p class="text-xs text-brand-x/75 font-body mt-1">
                        {{ slide.subtitle }}
                    </p>
                </button>
            </div>

            <!-- Special Auxiliary Terminals (Resume, Bio, Contact) -->
            <div class="border-t border-brand-y/30 pt-4 flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-2 text-xs font-mono text-brand-x/70">
                    <span class="text-brand-y font-bold">AUXILIARY PROTOCOLS:</span>
                </div>

                <div class="flex items-center gap-3 flex-wrap">
                    <RouterLink
                        to="/resume"
                        @mouseenter="playHover"
                        @click="isOverviewOpen = false; playClick()"
                        class="px-3 py-1.5 border border-brand-y/50 hover:bg-brand-y hover:text-surface text-brand-y font-mono font-bold text-xs clip-chamfer-sm transition-all"
                    >
                        📄 TACTICAL RÉSUMÉ (PRINTABLE)
                    </RouterLink>

                    <RouterLink
                        to="/bio"
                        @mouseenter="playHover"
                        @click="isOverviewOpen = false; playClick()"
                        class="px-3 py-1.5 border border-brand-y/50 hover:bg-brand-y hover:text-surface text-brand-y font-mono font-bold text-xs clip-chamfer-sm transition-all"
                    >
                        🧬 BIO-DATA PROTOCOL
                    </RouterLink>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.98); }
    to { opacity: 1; transform: scale(1); }
}
.animate-fade-in {
    animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
