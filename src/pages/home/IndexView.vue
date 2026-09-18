<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { useSlideDeck } from '../../composables/useSlideDeck';
import { useShatterEffect } from '../../composables/useShatterEffect';

// Aesthetic anime HUD components
import AnimeBackground from '../../components/anime/AnimeBackground.vue';
import AnimeHeaderHUD from '../../components/anime/AnimeHeaderHUD.vue';
import AnimeDockHUD from '../../components/anime/AnimeDockHUD.vue';
import AnimeSlashOverlay from '../../components/anime/AnimeSlashOverlay.vue';
import AnimeMissionNavigator from '../../components/anime/AnimeMissionNavigator.vue';

// The 7 Slide Components
import SlideHero from '../../components/slides/SlideHero.vue';
import SlideAbout from '../../components/slides/SlideAbout.vue';
import SlideSkills from '../../components/slides/SlideSkills.vue';
import SlideProjects from '../../components/slides/SlideProjects.vue';
import SlideArticles from '../../components/slides/SlideArticles.vue';
import SlideExperience from '../../components/slides/SlideExperience.vue';
import SlideContact from '../../components/slides/SlideContact.vue';

const {
    currentSlideIndex,
    transitionDirection,
    isSlashing,
    viewMode,
    onKeyDown,
    onWheel,
    onTouchStart,
    onTouchEnd
} = useSlideDeck();

const { shatter, reassemble } = useShatterEffect();

// Template ref for the hero slide component instance
const heroSlideRef = ref(null);

const slideComponents = [
    SlideHero,
    SlideAbout,
    SlideSkills,
    SlideProjects,
    SlideArticles,
    SlideExperience,
    SlideContact
];

const activeComponent = computed(() => slideComponents[currentSlideIndex.value] || SlideHero);

// Watch for slide transitions involving the hero
watch(currentSlideIndex, (newIdx, oldIdx) => {
    if (viewMode.value !== 'slide') return;

    // Shatter when LEAVING hero (slide 0)
    if (oldIdx === 0 && newIdx !== 0) {
        const heroComp = heroSlideRef.value;
        const avatarEl = heroComp?.avatarRef;
        if (avatarEl) {
            shatter(avatarEl);
        }
    }

    // Reassemble when RETURNING to hero (slide 0)
    if (newIdx === 0 && oldIdx !== 0) {
        // Small delay to let the slide transition start
        setTimeout(() => {
            const heroComp = heroSlideRef.value;
            const avatarEl = heroComp?.avatarRef;
            if (avatarEl) {
                reassemble(avatarEl);
            }
        }, 100);
    }
});

onMounted(() => {
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('wheel', onWheel);
    window.removeEventListener('touchstart', onTouchStart);
    window.removeEventListener('touchend', onTouchEnd);
});
</script>

<template>
    <div class="relative w-full min-h-screen bg-base-y text-brand-x selection:bg-brand-y selection:text-white transition-colors duration-300">
        
        <!-- Ambient anime particle & cyber grid canvas -->
        <AnimeBackground />

        <!-- Fixed Top Anime Header HUD -->
        <AnimeHeaderHUD />

        <!-- Manga Speedline Action Slash Transition Overlay -->
        <AnimeSlashOverlay :active="isSlashing" :direction="transitionDirection" />

        <!-- Mission Navigator Tactical Modal -->
        <AnimeMissionNavigator />

        <!-- MODE 1: IMMERSIVE FULL-VIEWPORT SLIDE DECK (DEFAULT) -->
        <main
            v-if="viewMode === 'slide'"
            class="relative w-full h-[100dvh] overflow-hidden pt-14 sm:pt-16 pb-14 sm:pb-16 flex items-center justify-center"
        >
            <Transition
                :name="transitionDirection === 'next' ? 'slide-up' : 'slide-down'"
                mode="out-in"
            >
                <div
                    :key="currentSlideIndex"
                    class="w-full h-full overflow-y-auto overflow-x-hidden flex items-center justify-center"
                >
                    <component :is="activeComponent" :ref="currentSlideIndex === 0 ? (el) => { heroSlideRef = el } : undefined" />
                </div>
            </Transition>
        </main>

        <!-- MODE 2: CONTINUOUS SCROLL VIEW -->
        <main
            v-else
            class="relative w-full pt-16 pb-20 space-y-12 sm:space-y-24"
        >
            <section id="hero" class="min-h-[90vh] flex items-center justify-center border-b border-brand-y/20">
                <SlideHero />
            </section>

            <section id="about" class="min-h-[90vh] flex items-center justify-center border-b border-brand-y/20">
                <SlideAbout />
            </section>

            <section id="skills" class="min-h-[90vh] flex items-center justify-center border-b border-brand-y/20">
                <SlideSkills />
            </section>

            <section id="projects" class="min-h-[90vh] flex items-center justify-center border-b border-brand-y/20">
                <SlideProjects />
            </section>

            <section id="articles" class="min-h-[90vh] flex items-center justify-center border-b border-brand-y/20">
                <SlideArticles />
            </section>

            <section id="experience" class="min-h-[90vh] flex items-center justify-center border-b border-brand-y/20">
                <SlideExperience />
            </section>

            <section id="contact" class="min-h-[90vh] flex items-center justify-center">
                <SlideContact />
            </section>
        </main>

        <!-- Fixed Bottom Anime Dock HUD -->
        <AnimeDockHUD />

    </div>
</template>

<style scoped>
/* Slide Up Animation (Next) */
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
}
.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px) scale(0.98);
}

/* Slide Down Animation (Prev) */
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-down-enter-from {
    opacity: 0;
    transform: translateY(-30px) scale(0.98);
}
.slide-down-leave-to {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
}
</style>
