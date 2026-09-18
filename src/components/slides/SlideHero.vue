<script setup>
import { ref, defineExpose } from 'vue';
import { RouterLink } from 'vue-router';
import { useSlideDeck } from '../../composables/useSlideDeck';
import { useAnimeAudio } from '../../composables/useAnimeAudio';
import AnimatedLogo from '../anime/AnimatedLogo.vue';

// Avatar assets
import avatarFormal from '../../assets/images/avatar-formal.webp';
import avatarCyber from '../../assets/images/avatar3.webp';
import asciiText from '../../assets/images/ascii_avater.txt?raw';

const { goToSlide } = useSlideDeck();
const { playHover, playClick } = useAnimeAudio();

// Interactive Persona Selector
const personaMode = ref('ascii');
const avatarRef = ref(null);

const setPersona = (mode) => {
    playClick();
    personaMode.value = mode;
};

// Cleaned up ASCII text for display
const asciiDisplay = asciiText
    .split('\n')
    .filter((line, i) => i > 2 && i < 59)
    .join('\n');

// Expose avatar ref for shatter effect
defineExpose({ avatarRef });
</script>

<template>
    <div class="w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden">
        
        <!-- Ambient Watermark -->
        <div class="absolute -top-6 left-10 font-mono text-[10px] text-brand-y/[0.04] select-none pointer-events-none hidden lg:block leading-none">
            <pre>
   _____ _    _          _  ___ _        _   _                 __      __      _____ 
  / ____| |  | |   /\   | |/ / | |      | \ | |   /\   \ \    / //\   |__  /
 | (___ | |__| |  /  \  | ' /| | |      |  \| |  /  \   \ \  / //  \    / / 
  \___ \|  __  | / /\ \ |  < | | |      | . ` | / /\ \   \ \/ // /\ \  / /  
  ____) | |  | |/ ____ \| . \| | |____  | |\  |/ ____ \   \  // ____ \/ /__ 
 |_____/|_|  |_/_/    \_\_|\_\_|______| |_| \_/_/    \_\   \/ /_/    \_\_____|
            </pre>
        </div>

        <div class="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10 py-6">
            
            <!-- LEFT: Narrative Authority (4 cols on desktop) -->
            <div class="lg:col-span-4 order-2 lg:order-1 space-y-5 text-left">
                
                <!-- Section Marker -->
                <div class="inline-flex items-center gap-2 font-mono text-xs text-brand-y border-b border-brand-y/40 pb-1">
                    <span class="w-1.5 h-1.5 bg-brand-y inline-block"></span>
                    <span class="tracking-widest font-bold">01 / INTRODUCTION</span>
                </div>

                <!-- Main Name & Title -->
                <div class="space-y-2">
                    <h1 class="text-4xl sm:text-5xl xl:text-6xl font-black font-sans uppercase tracking-tight text-brand-y leading-none">
                        SHAKIL NAWAZ
                    </h1>
                    <div class="flex items-center gap-3 pt-0.5">
                        <AnimatedLogo size="sm" :animate="true" :glow="false" />
                        <h2 class="text-base sm:text-lg font-mono font-bold text-brand-x tracking-wide">
                            Physics &bull; Web Engineering
                        </h2>
                    </div>
                </div>

                <!-- Bio Summary Briefing -->
                <p class="text-sm sm:text-base text-brand-x/85 leading-relaxed max-w-md font-body">
                    A physics graduate and software engineer building high-performance web systems. Focused on reactive architectures, strict type discipline, and clean user-centered interfaces with <span class="text-brand-y font-bold">Vue</span>, <span class="text-brand-y font-bold">Alpine</span>, <span class="text-brand-y font-bold">Tailwind</span>, <span class="text-brand-y font-bold">Deno</span>, and <span class="text-brand-y font-bold">PHP</span>.
                </p>

                <!-- Quick Navigation Jump -->
                <div class="pt-2 font-mono text-xs flex flex-wrap gap-4 text-brand-x/70">
                    <button
                        @click="goToSlide(4); playClick()"
                        @mouseenter="playHover"
                        class="hover:text-brand-y transition-colors flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
                    >
                        <span>&rarr; Intel &amp; Articles</span>
                    </button>
                    <RouterLink
                        to="/resume"
                        @mouseenter="playHover"
                        @click="playClick"
                        class="hover:text-brand-y transition-colors flex items-center gap-1.5 underline underline-offset-4"
                    >
                        <span>&rarr; Formal Résumé</span>
                    </RouterLink>
                </div>

            </div>

            <!-- CENTER: Visual Anchor Frame (4 cols on desktop) -->
            <div class="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center">
                
                <!-- Avatar / ASCII Art Frame -->
                <div 
                    ref="avatarRef"
                    class="relative w-72 sm:w-80 lg:w-full max-w-[360px] aspect-square p-2.5 bg-surface/90 border-2 border-brand-y/60 rounded-none glow-brand-y-sm transition-all group shadow-sm"
                >
                    <!-- Image / ASCII Display Container -->
                    <div class="relative w-full h-full rounded-none overflow-hidden bg-black border border-brand-y/40 flex items-center justify-center">
                        
                        <!-- ASCII Matrix Persona (Featured) -->
                        <div
                            v-if="personaMode === 'ascii'"
                            class="w-full h-full p-2 overflow-hidden flex items-center justify-center font-mono text-[5px] sm:text-[6px] md:text-[6.8px] text-brand-y leading-[1.03] select-none text-center"
                        >
                            <pre class="overflow-hidden whitespace-pre drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">{{ asciiDisplay }}</pre>
                        </div>

                        <!-- Formal Persona -->
                        <img
                            v-else-if="personaMode === 'formal'"
                            :src="avatarFormal"
                            alt="Shakil Nawaz - Formal Persona"
                            class="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-105"
                        />

                        <!-- Cyber Cutout Persona -->
                        <img
                            v-else-if="personaMode === 'cyber'"
                            :src="avatarCyber"
                            alt="Shakil Nawaz - Cyber Persona"
                            class="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(102,60,240,0.6)] transition-all duration-500 scale-95 group-hover:scale-100"
                        />

                        <!-- Holographic Scanline Overlay (ASCII Mode Only) -->
                        <div 
                            v-if="personaMode === 'ascii'"
                            class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] opacity-40"
                        ></div>
                    </div>

                    <!-- Pilot Status Badge -->
                    <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-surface border border-brand-y font-mono text-[11px] font-bold text-brand-y rounded-none shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                        <span class="w-1.5 h-1.5 rounded-none bg-emerald-500 animate-pulse"></span>
                        <span>DHAKA, BD &bull; AVAILABLE FOR WORK</span>
                    </div>

                </div>

                <!-- Persona Switcher Selector -->
                <div class="flex items-center gap-1 mt-6 font-mono text-[11px] p-1 bg-surface/85 border border-brand-y/40 rounded-none shadow-sm">
                    <span class="px-2 text-brand-x/60 text-[10px] font-bold">PERSONA:</span>
                    <button
                        @click="setPersona('ascii')"
                        @mouseenter="playHover"
                        class="px-2.5 py-1 rounded-none transition-all cursor-pointer"
                        :class="personaMode === 'ascii' ? 'bg-brand-y text-surface font-bold glow-brand-y-sm' : 'text-brand-x hover:text-brand-y'"
                    >
                        ASCII ART
                    </button>
                    <button
                        @click="setPersona('formal')"
                        @mouseenter="playHover"
                        class="px-2.5 py-1 rounded-none transition-all cursor-pointer"
                        :class="personaMode === 'formal' ? 'bg-brand-y text-surface font-bold glow-brand-y-sm' : 'text-brand-x hover:text-brand-y'"
                    >
                        FORMAL
                    </button>
                    <button
                        @click="setPersona('cyber')"
                        @mouseenter="playHover"
                        class="px-2.5 py-1 rounded-none transition-all cursor-pointer"
                        :class="personaMode === 'cyber' ? 'bg-brand-y text-surface font-bold glow-brand-y-sm' : 'text-brand-x hover:text-brand-y'"
                    >
                        CYBER
                    </button>
                </div>

            </div>

            <!-- RIGHT: Engineering Pillars & Actions (4 cols on desktop) -->
            <div class="lg:col-span-4 order-3 space-y-5 text-left">
                
                <!-- Engineering Pillars Panel -->
                <div class="border border-brand-y/30 bg-surface/75 p-4 rounded-none shadow-sm font-mono space-y-3">
                    <div class="text-[11px] font-bold text-brand-y tracking-wider flex items-center gap-1.5 pb-2 border-b border-brand-y/20">
                        <span class="w-1.5 h-1.5 bg-brand-y inline-block"></span>
                        <span>CORE COMPETENCIES</span>
                    </div>
                    <ul class="space-y-2 text-xs text-brand-x/85">
                        <li class="flex items-start gap-2">
                            <span class="text-brand-y font-bold">01.</span>
                            <span><strong>Physics Rigor</strong>: Analytical mindset, scientific modeling, and mathematical logic.</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-brand-y font-bold">02.</span>
                            <span><strong>Runtime Precision</strong>: Deno 2 + Vite + Tailwind v4 performance stack.</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-brand-y font-bold">03.</span>
                            <span><strong>Modular UI</strong>: Reactive Vue 3, Alpine, and accessible architectures.</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-brand-y font-bold">04.</span>
                            <span><strong>Enterprise Web</strong>: Headless WordPress, PHP backends, and robust deployments.</span>
                        </li>
                    </ul>
                </div>

                <!-- Tactical Call To Actions -->
                <div class="flex flex-col sm:flex-row lg:flex-col gap-2.5">
                    <button
                        @click="goToSlide(3); playClick()"
                        @mouseenter="playHover"
                        class="px-5 py-2.5 bg-brand-y hover:bg-surface text-surface hover:text-brand-y border-2 border-brand-y font-mono font-bold text-xs uppercase tracking-wider rounded-none transition-all duration-300 glow-brand-y-sm cursor-pointer flex items-center justify-center gap-2 group hover-lift"
                    >
                        <span>EXPLORE 8 MISSIONS</span>
                        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </button>

                    <button
                        @click="goToSlide(6); playClick()"
                        @mouseenter="playHover"
                        class="px-5 py-2.5 bg-transparent hover:bg-brand-y/15 text-brand-y border-2 border-brand-y/70 hover:border-brand-y font-mono font-bold text-xs uppercase tracking-wider rounded-none transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 hover-lift"
                    >
                        <span>DISPATCH MESSAGE</span>
                    </button>
                </div>

            </div>

        </div>
    </div>
</template>
