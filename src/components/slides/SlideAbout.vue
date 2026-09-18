<script setup>
import { RouterLink } from 'vue-router';
import { useAnimeAudio } from '../../composables/useAnimeAudio';
import resumeContent from '../../assets/resumeContent.json';
import bioContent from '../../assets/biodataContent.json';

const { playHover, playClick } = useAnimeAudio();

const stats = [
    { label: 'ANALYTICAL RIGOR (PHYSICS BSc)', value: 96, rank: 'S' },
    { label: 'FRONTEND AGILITY (VUE / ALPINE / TAILWIND)', value: 95, rank: 'S' },
    { label: 'QA & RELIABILITY (HACCP / TESTING)', value: 92, rank: 'A+' },
    { label: 'BACKEND INGENUITY (PHP / LARAVEL / WP)', value: 88, rank: 'A' },
    { label: 'AGENTIC CODING (AI WORKFLOWS)', value: 90, rank: 'A+' }
];
</script>

<template>
    <div class="w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden">
        
        <!-- Ambient ASCII Watermark -->
        <div class="absolute -bottom-6 -right-6 font-mono text-[9px] text-brand-y/[0.05] select-none pointer-events-none hidden md:block leading-none">
            <pre>
+------------------------------------+
| LORE_DATABASE_ENTRY: SHAKIL_NAWAZ  |
| CLASS: FULL_STACK_ENGINEER         |
| ORIGIN: BANGLADESH                 |
| LEVEL: SENIOR_DEV // 2026          |
+------------------------------------+
            </pre>
        </div>

        <div class="max-w-6xl w-full mx-auto space-y-6 sm:space-y-8 relative z-10 py-6">
            
            <!-- Section Header -->
            <div class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-brand-y/30 pb-3 gap-2">
                <div>
                    <div class="flex items-center gap-2 text-xs font-mono text-brand-y uppercase tracking-widest">
                        <span>// SECTOR_02 :: SYSTEM_LORE</span>
                        <span class="text-[10px] font-mono px-1.5 py-0.2 bg-brand-y/20 text-brand-y rounded-none font-bold">
                            BIO.LORE
                        </span>
                    </div>
                    <h2 class="text-3xl sm:text-5xl font-black font-sans text-brand-y tracking-tight uppercase">
                        CHARACTER LORE &amp; STATS
                    </h2>
                </div>

                <div class="flex items-center gap-2">
                    <RouterLink
                        to="/resume"
                        @mouseenter="playHover"
                        @click="playClick"
                        class="px-3.5 py-1.5 bg-brand-y/15 hover:bg-brand-y text-brand-y hover:text-surface border border-brand-y font-mono text-xs font-bold uppercase rounded-none transition-all"
                    >
                        📄 FULL RÉSUMÉ
                    </RouterLink>
                    <RouterLink
                        to="/bio"
                        @mouseenter="playHover"
                        @click="playClick"
                        class="px-3.5 py-1.5 bg-surface hover:bg-brand-y/15 text-brand-x hover:text-brand-y border border-brand-y/40 font-mono text-xs uppercase rounded-none transition-all"
                    >
                        🧬 BIO-DATA
                    </RouterLink>
                </div>
            </div>

            <!-- Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                <!-- Left: Lore Story & Origin (6 Cols) -->
                <div class="lg:col-span-6 space-y-4 text-left">
                    <div class="p-5 sm:p-6 bg-surface/80 border border-brand-y/35 rounded-none backdrop-blur-md space-y-4 shadow-sm">
                        <div class="flex items-center justify-between border-b border-brand-y/20 pb-2 font-mono text-xs text-brand-y">
                            <span>[PROFILE_SUMMARY]</span>
                            <span>CLASS: FULL-STACK ENGINEER</span>
                        </div>

                        <p class="text-sm sm:text-base text-brand-x/90 leading-relaxed font-body">
                            {{ bioContent.bio }}
                        </p>

                        <div class="border-t border-brand-y/20 pt-3 space-y-2 font-mono text-xs">
                            <div class="flex justify-between">
                                <span class="text-brand-x/60">ACADEMIC FOUNDATION:</span>
                                <span class="font-bold text-brand-y">BSc in Physics (2022)</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-brand-x/60">INSTITUTION:</span>
                                <span class="text-brand-x font-medium">Satkhira Govt. College</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-brand-x/60">QA INSPECTION ROOTS:</span>
                                <span class="text-brand-x font-medium">KM International GmbH (5 Years)</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-brand-x/60">LOCATION:</span>
                                <span class="text-brand-x font-medium">Rampura, Dhaka &bull; Bangladesh</span>
                            </div>
                        </div>
                    </div>

                    <!-- Passions & Interests Tags with clean rounded-none border -->
                    <div class="p-4 bg-surface/70 border border-brand-y/30 rounded-none">
                        <span class="block font-mono text-xs text-brand-y font-bold mb-2">
                            [CORE_PASSIONS // EXPLORATION]
                        </span>
                        <div class="flex flex-wrap gap-1.5">
                            <span
                                v-for="(interest, i) in resumeContent.interests"
                                :key="i"
                                class="px-2.5 py-0.5 bg-brand-y/10 border border-brand-y/30 font-mono text-xs text-brand-x/90 rounded-none"
                            >
                                # {{ interest }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Right: Anime RPG Attribute Radar & Philosophy (6 Cols) -->
                <div class="lg:col-span-6 space-y-4">
                    
                    <!-- Attributes Card with clean rounded-none border -->
                    <div class="p-5 sm:p-6 bg-surface/80 border border-brand-y/35 rounded-none backdrop-blur-md space-y-4 shadow-sm">
                        <div class="flex items-center justify-between border-b border-brand-y/20 pb-2 font-mono text-xs text-brand-y">
                            <span>[ATTRIBUTE_MATRIX]</span>
                            <span>STATUS: MAX POTENTIAL</span>
                        </div>

                        <!-- Stat Bars -->
                        <div class="space-y-3 pt-1">
                            <div v-for="(stat, idx) in stats" :key="idx" class="space-y-1">
                                <div class="flex items-center justify-between text-xs font-mono">
                                    <span class="font-bold text-brand-x/90">{{ stat.label }}</span>
                                    <div class="flex items-center gap-1.5">
                                        <span class="px-1.5 bg-brand-y/20 text-brand-y font-bold text-[10px] rounded-none">
                                            RANK {{ stat.rank }}
                                        </span>
                                        <span class="font-bold text-brand-y">{{ stat.value }}%</span>
                                    </div>
                                </div>
                                <div class="h-2 w-full bg-brand-y/15 rounded-none overflow-hidden">
                                    <div
                                        class="h-full bg-brand-y glow-brand-y-sm transition-all duration-700 ease-out rounded-none"
                                        :style="{ width: `${stat.value}%` }"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Philosophy Triad with clean rounded-none cards -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
                        <div class="p-3 bg-surface/70 border border-brand-y/30 rounded-none text-left">
                            <span class="text-brand-y font-bold block mb-1">01 // RIGOR</span>
                            <p class="text-brand-x/80 font-body text-xs">
                                Physics precision applied to frontend performance &amp; zero-latency UX.
                            </p>
                        </div>
                        <div class="p-3 bg-surface/70 border border-brand-y/30 rounded-none text-left">
                            <span class="text-brand-y font-bold block mb-1">02 // CLARITY</span>
                            <p class="text-brand-x/80 font-body text-xs">
                                Modular components, clean architecture, and accessible semantic code.
                            </p>
                        </div>
                        <div class="p-3 bg-surface/70 border border-brand-y/30 rounded-none text-left">
                            <span class="text-brand-y font-bold block mb-1">03 // EVOLUTION</span>
                            <p class="text-brand-x/80 font-body text-xs">
                                Rapid adoption of next-gen tools (Deno 2, Tailwind v4, Vite 8, LLMs).
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>
