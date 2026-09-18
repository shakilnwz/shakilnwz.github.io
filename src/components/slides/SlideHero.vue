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
        
        <!-- Ambient ASCII Header Watermark -->
        <div class="absolute -top-6 left-10 font-mono text-[10px] text-brand-y/[0.06] select-none pointer-events-none hidden lg:block leading-none">
            <pre>
   _____ _    _          _  ___ _        _   _                 __      __      _____ 
  / ____| |  | |   /\   | |/ / | |      | \ | |   /\   \ \    / //\   |__  /
 | (___ | |__| |  /  \  | ' /| | |      |  \| |  /  \   \ \  / //  \    / / 
  \___ \|  __  | / /\ \ |  < | | |      | . ` | / /\ \   \ \/ // /\ \  / /  
  ____) | |  | |/ ____ \| . \| | |____  | |\  |/ ____ \   \  // ____ \/ /__ 
 |_____/|_|  |_/_/    \_\_|\_\_|______| |_| \_/_/    \_\   \/ /_/    \_\_____|
            </pre>
        </div>

        <div class="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10 py-6">
            
            <!-- LEFT: Identity & Bio (4 cols on desktop) -->
            <div class="lg:col-span-4 order-2 lg:order-1 space-y-4 sm:space-y-5 text-center lg:text-left">
                
                <!-- Tactical Mission Badge -->
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-y/15 border border-brand-y/40 rounded-none">
                    <span class="w-2 h-2 rounded-none bg-brand-y animate-ping"></span>
                    <span class="font-mono text-xs font-bold text-brand-y tracking-wider">
                        // SECTOR_01 :: PILOT_IDENT
                    </span>
                    <span class="text-[10px] font-mono px-1.5 py-0.2 bg-brand-y/20 text-brand-y rounded-none font-bold">
                        INIT.SYS
                    </span>
                </div>

                <!-- Main Headline with Animated Logo -->
                <div class="space-y-1">
                    <p class="font-mono text-xs sm:text-sm text-brand-x/80 tracking-widest uppercase flex items-center gap-2 justify-center lg:justify-start">
                        <span>&gt; SYSTEM.INIT // HELLO WORLD, I'M</span>
                    </p>
                    <div class="flex items-center gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start">
                        <h1 class="text-4xl sm:text-5xl xl:text-6xl font-black font-sans uppercase tracking-tight text-brand-y text-glow leading-none">
                            SHAKIL NAWAZ
                        </h1>
                        <AnimatedLogo size="sm" :animate="true" :glow="true" />
                    </div>
                    <div class="flex items-center gap-2 pt-1 justify-center lg:justify-start">
                        <span class="h-0.5 w-8 bg-brand-y inline-block"></span>
                        <h2 class="text-base sm:text-lg font-display font-bold text-brand-x uppercase tracking-wide">
                            Web Developer &amp; Tech Nerd
                        </h2>
                    </div>
                </div>

                <!-- Bio Summary Briefing -->
                <p class="text-sm sm:text-base text-brand-x/90 leading-relaxed max-w-md mx-auto lg:mx-0 font-body">
                    A physics-minded software engineer with 3+ years of experience forging fast, responsive, and user-centric web applications. Specializing in <span class="text-brand-y font-bold">Vue.js</span>, <span class="text-brand-y font-bold">Alpine.js</span>, <span class="text-brand-y font-bold">TailwindCSS</span>, and full-scale <span class="text-brand-y font-bold">WordPress &amp; PHP</span> solutions.
                </p>
            </div>

            <!-- CENTER: Avatar / Persona (4 cols on desktop) -->
            <div class="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center">
                
                <!-- Avatar / ASCII Art Frame -->
                <div 
                    ref="avatarRef"
                    class="relative w-72 sm:w-80 lg:w-full max-w-[360px] aspect-square p-3 bg-surface/85 border-2 border-brand-y/60 rounded-none glow-brand-y-sm transition-all group"
                >
                    
                    <!-- Decorative Corner Accents -->
                    <span class="absolute top-2 left-2 text-[10px] font-mono text-brand-y/60">[SCAN: ACTIVE]</span>
                    <span class="absolute top-2 right-2 text-[10px] font-mono text-brand-y/60">[RES: 100%]</span>
                    <span class="absolute bottom-2 left-2 text-[10px] font-mono text-brand-y/60">[UNIT: SNZ-01]</span>
                    <span class="absolute bottom-2 right-2 text-[10px] font-mono text-brand-y/60">[SYNC: 99.9%]</span>

                    <!-- Image / ASCII Display Container -->
                    <div class="relative w-full h-full rounded-none overflow-hidden bg-black/90 border border-brand-y/40 flex items-center justify-center">
                        
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

                        <!-- Holographic Scanline Overlay -->
                        <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] opacity-40"></div>
                    </div>

                    <!-- Pilot Status Badge -->
                    <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-surface border border-brand-y font-mono text-[11px] font-bold text-brand-y rounded-none shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                        <span class="w-1.5 h-1.5 rounded-none bg-emerald-500 animate-pulse"></span>
                        <span>STATUS: ACTIVE &bull; DHAKA, BD</span>
                    </div>

                </div>

                <!-- Persona Switcher Selector -->
                <div class="flex items-center gap-1.5 mt-6 font-mono text-[11px] p-1 bg-surface/85 border border-brand-y/40 rounded-none shadow-sm">
                    <span class="px-2 text-brand-x/60 text-[10px] font-bold">MODE:</span>
                    <button
                        @click="setPersona('ascii')"
                        @mouseenter="playHover"
                        class="px-2.5 py-1 rounded-none transition-all cursor-pointer flex items-center gap-1"
                        :class="personaMode === 'ascii' ? 'bg-brand-y text-surface font-bold glow-brand-y-sm' : 'text-brand-x hover:text-brand-y'"
                    >
                        <span>ASCII ART</span>
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

            <!-- RIGHT: Stats & Actions (4 cols on desktop) -->
            <div class="lg:col-span-4 order-3 space-y-4 sm:space-y-5 text-center lg:text-right">
                
                <!-- Tactical Stats -->
                <div class="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <div class="p-3 bg-surface/75 border border-brand-y/30 rounded-none hover:border-brand-y/60 hover-lift transition-colors">
                        <span class="block font-mono text-xl sm:text-2xl font-black text-brand-y">03+</span>
                        <span class="block font-mono text-[10px] sm:text-xs text-brand-x/70 uppercase">Years Experience</span>
                    </div>
                    <div class="p-3 bg-surface/75 border border-brand-y/30 rounded-none hover:border-brand-y/60 hover-lift transition-colors">
                        <span class="block font-mono text-xl sm:text-2xl font-black text-brand-y">08+</span>
                        <span class="block font-mono text-[10px] sm:text-xs text-brand-x/70 uppercase">Deployed Projects</span>
                    </div>
                    <div class="p-3 bg-surface/75 border border-brand-y/30 rounded-none hover:border-brand-y/60 hover-lift transition-colors">
                        <span class="block font-mono text-xl sm:text-2xl font-black text-brand-y">BSc</span>
                        <span class="block font-mono text-[10px] sm:text-xs text-brand-x/70 uppercase">Physics Foundation</span>
                    </div>
                    <div class="p-3 bg-surface/75 border border-brand-y/30 rounded-none hover:border-brand-y/60 hover-lift transition-colors">
                        <span class="block font-mono text-xl sm:text-2xl font-black text-brand-y">100%</span>
                        <span class="block font-mono text-[10px] sm:text-xs text-brand-x/70 uppercase">Responsive Code</span>
                    </div>
                </div>

                <!-- Tactical Call To Actions -->
                <div class="flex flex-col gap-2.5 items-center lg:items-end">
                    <button
                        @click="goToSlide(3); playClick()"
                        @mouseenter="playHover"
                        class="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-brand-y hover:bg-surface text-surface hover:text-brand-y border-2 border-brand-y font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded-none transition-all duration-300 glow-brand-y-sm cursor-pointer flex items-center justify-center lg:justify-end gap-2 group hover-lift"
                    >
                        <span>DEPLOY MISSIONS</span>
                        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </button>

                    <button
                        @click="goToSlide(6); playClick()"
                        @mouseenter="playHover"
                        class="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent hover:bg-brand-y/15 text-brand-y border-2 border-brand-y/70 hover:border-brand-y font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded-none transition-all duration-300 cursor-pointer flex items-center justify-center lg:justify-end gap-2 hover-lift"
                    >
                        <span>DISPATCH COMMS</span>
                    </button>

                    <RouterLink
                        to="/resume"
                        @mouseenter="playHover"
                        @click="playClick"
                        class="px-4 py-2.5 sm:py-3 bg-surface/80 hover:bg-brand-y/20 text-brand-x hover:text-brand-y border border-brand-y/40 font-mono text-xs uppercase tracking-wider rounded-none transition-all hover-lift"
                    >
                        📄 RÉSUMÉ
                    </RouterLink>
                </div>

                <!-- Terminal hint -->
                <div class="font-mono text-[10px] text-brand-x/40 space-y-0.5 hidden lg:block">
                    <p><span class="text-brand-y">$</span> cat position.txt <span class="opacity-60">// Available for opportunities</span></p>
                    <p><span class="text-brand-y">$</span> cat stack.txt <span class="opacity-60">// Vue, Alpine, Tailwind, PHP</span></p>
                </div>
            </div>

        </div>
    </div>
</template>
