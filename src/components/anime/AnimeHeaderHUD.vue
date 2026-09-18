<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue';
import { RouterLink } from 'vue-router';
import { useSlideDeck } from '../../composables/useSlideDeck';
import { useAnimeAudio } from '../../composables/useAnimeAudio';
import AnimatedLogo from './AnimatedLogo.vue';

const {
    currentSlide,
    currentSlideIndex,
    totalSlides,
    viewMode,
    toggleViewMode,
    toggleOverview
} = useSlideDeck();

const { isSoundEnabled, toggleSound, playHover, playClick } = useAnimeAudio();
const iconList = inject('icons') || {};

// Theme management
const isDark = ref(false);

const applyTheme = (dark) => {
    isDark.value = dark;
    document.body.classList.toggle('dark', dark);
    if (typeof window !== 'undefined') {
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }
};

const toggleTheme = () => {
    playClick();
    applyTheme(!isDark.value);
};

// Live Time Ticker (Dhaka BD / UTC)
const currentTime = ref('');
let timerInterval = null;

const updateTime = () => {
    const now = new Date();
    currentTime.value = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
};

onMounted(() => {
    // Initial theme check
    const saved = localStorage.getItem('theme');
    if (saved) {
        applyTheme(saved === 'dark');
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark);
    }

    updateTime();
    timerInterval = setInterval(updateTime, 1000);
});

onUnmounted(() => {
    if (timerInterval) clearInterval(timerInterval);
});
</script>

<template>
    <header class="fixed top-0 left-0 right-0 z-40 select-none backdrop-blur-md bg-surface/75 border-b border-brand-y/25 transition-all">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
            
            <!-- Left: Animated Logo & Pilot Indicator -->
            <div class="flex items-center gap-3 sm:gap-5">
                <RouterLink
                    to="/"
                    @mouseenter="playHover"
                    @click="playClick"
                    class="group flex items-center gap-2.5 focus:outline-none"
                    aria-label="Home"
                >
                    <!-- Animated Logo Frame with clean rounded-none border -->
                    <div class="relative p-1 rounded-none border border-brand-y/40 bg-surface/90 group-hover:border-brand-y group-hover:glow-brand-y-sm transition-all duration-300 flex items-center justify-center">
                        <AnimatedLogo size="sm" :animate="true" :glow="true" />
                        <span class="absolute -top-1 -right-1 w-1.5 h-1.5 bg-brand-y rounded-none animate-ping"></span>
                    </div>

                    <div class="flex flex-col">
                        <div class="flex items-center gap-1.5">
                            <span class="font-sans font-bold text-base sm:text-lg tracking-wide text-brand-y group-hover:text-glow transition-all">
                                SHAKIL NAWAZ
                            </span>
                            <span class="text-[10px] font-mono px-1.5 py-0.2 bg-brand-y/15 text-brand-y border border-brand-y/30 rounded-none hidden sm:inline-block">
                                UNIT-01
                            </span>
                        </div>
                        <span class="text-[10px] font-mono text-brand-x/70 tracking-wider hidden md:block">
                            WEB ENGINEER // TECH NERD
                        </span>
                    </div>
                </RouterLink>

                <!-- Status Pill -->
                <div class="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-brand-y/10 border border-brand-y/20 rounded-none font-mono text-[11px] text-brand-x/80">
                    <span class="w-2 h-2 rounded-none bg-emerald-500 animate-pulse"></span>
                    <span>SYS_ONLINE</span>
                    <span class="text-brand-y/40">|</span>
                    <span>{{ currentTime }}</span>
                </div>
            </div>

            <!-- Center: Active Slide Badge / Mission Trigger -->
            <button
                @click="toggleOverview"
                @mouseenter="playHover"
                class="hidden md:flex items-center gap-2 px-3 py-1 bg-surface/90 hover:bg-brand-y/15 border border-brand-y/40 hover:border-brand-y rounded-none transition-all group cursor-pointer"
                title="Open Mission Navigator (M)"
            >
                <span class="text-xs font-mono font-bold text-brand-y">
                    [ {{ currentSlide.num }} // 07 ]
                </span>
                <span class="text-xs font-sans font-bold tracking-wider text-brand-x group-hover:text-brand-y uppercase">
                    {{ currentSlide.title }}
                </span>
                <span class="text-[10px] font-mono px-1.5 py-0.5 bg-brand-y/20 text-brand-y rounded-none font-bold">
                    {{ currentSlide.codeTag }}
                </span>
                <span class="text-[10px] font-mono text-brand-x/50 group-hover:text-brand-y">
                    [M]
                </span>
            </button>

            <!-- Right: Action HUD Buttons -->
            <div class="flex items-center gap-1.5 sm:gap-2.5 font-mono text-xs">
                
                <!-- Slide vs Scroll Mode Switcher -->
                <button
                    @click="toggleViewMode"
                    @mouseenter="playHover"
                    class="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 border border-brand-y/40 hover:border-brand-y bg-surface/80 hover:bg-brand-y/10 rounded-none transition-all cursor-pointer"
                    :title="viewMode === 'slide' ? 'Switch to Continuous Scroll View' : 'Switch to Full-Screen Slide Deck'"
                >
                    <svg v-if="viewMode === 'slide'" class="w-3.5 h-3.5 text-brand-y" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                    <svg v-else class="w-3.5 h-3.5 text-brand-y" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <span class="hidden sm:inline font-bold uppercase tracking-wider text-[11px]">
                        {{ viewMode === 'slide' ? 'DECK' : 'SCROLL' }}
                    </span>
                </button>

                <!-- Audio SFX Toggle -->
                <button
                    @click="toggleSound"
                    @mouseenter="playHover"
                    class="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 border transition-all cursor-pointer"
                    :class="isSoundEnabled ? 'border-brand-y bg-brand-y/15 text-brand-y glow-brand-y-sm' : 'border-brand-y/30 bg-surface/80 text-brand-x/60 hover:text-brand-y hover:border-brand-y/60'"
                    :title="isSoundEnabled ? 'Sound FX Enabled (S)' : 'Enable Sci-Fi Audio FX (S)'"
                >
                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path v-if="isSoundEnabled" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        <path v-else d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27l4.73 4.73H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                    </svg>
                    <span class="hidden md:inline font-bold uppercase text-[11px]">
                        {{ isSoundEnabled ? 'SFX:ON' : 'SFX:OFF' }}
                    </span>
                </button>

                <!-- Deck Navigator Trigger (Mobile / Desktop) -->
                <button
                    @click="toggleOverview"
                    @mouseenter="playHover"
                    class="p-1.5 sm:px-2.5 sm:py-1 border border-brand-y/40 hover:border-brand-y bg-surface/80 hover:bg-brand-y/10 rounded-none text-brand-y transition-all cursor-pointer"
                    title="Deck Navigator"
                >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path>
                    </svg>
                </button>

                <!-- Dark / Light Theme Toggle -->
                <button
                    @click="toggleTheme"
                    @mouseenter="playHover"
                    class="p-1.5 sm:p-2 border border-brand-y/40 hover:border-brand-y bg-surface/80 hover:bg-brand-y/15 rounded-none text-brand-y transition-all cursor-pointer group"
                    :title="isDark ? 'Switch to Light Mode (T)' : 'Switch to Dark Mode (T)'"
                >
                    <svg v-if="isDark" class="w-4 h-4 fill-current group-hover:rotate-45 transition-transform" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" :d="iconList.sun || 'M8 12a4 4 0 100-8 4 4 0 000 8z'" clip-rule="evenodd"/>
                    </svg>
                    <svg v-else class="w-4 h-4 fill-current group-hover:-rotate-12 transition-transform" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" :d="iconList.moon || 'M8 2a6 6 0 100 12A6 6 0 008 2z'" clip-rule="evenodd"/>
                    </svg>
                </button>

                <!-- GitHub direct link -->
                <a
                    href="https://github.com/shakilnwz"
                    target="_blank"
                    rel="noopener noreferrer"
                    @mouseenter="playHover"
                    @click="playClick"
                    class="p-1.5 sm:p-2 border border-brand-y/40 hover:border-brand-y bg-surface/80 hover:bg-brand-y/15 rounded-none text-brand-x hover:text-brand-y transition-all"
                    title="GitHub: shakilnwz"
                    aria-label="GitHub"
                >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" :d="iconList.github" clip-rule="evenodd"/>
                    </svg>
                </a>
            </div>

        </div>
    </header>
</template>
