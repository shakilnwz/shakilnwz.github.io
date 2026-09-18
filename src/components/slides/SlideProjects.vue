<script setup>
import { ref, computed } from 'vue';
import { useAnimeAudio } from '../../composables/useAnimeAudio';
import projects from '../../assets/projects.json';

// Project thumbnails
import zuus from '../../assets/projects/zuus.webp';
import atroly from '../../assets/projects/atroly.webp';
import besomoy from '../../assets/projects/besomoy.webp';
import imaginesignage from '../../assets/projects/imaginesignage.webp';
import eliteabu from '../../assets/projects/eliteabu.webp';
import lifkoach from '../../assets/projects/lifkoach.webp';
import educavo from '../../assets/projects/educavo.webp';
import fccrwd from '../../assets/projects/fccrwd.webp';

const { playHover, playClick } = useAnimeAudio();

const thumbs = {
    zuus,
    atroly,
    besomoy,
    imaginesignage,
    eliteabu,
    lifkoach,
    educavo,
    fccrwd
};

const activeIndex = ref(0);
const activeFilter = ref('all'); // 'all' | 'custom' | 'wordpress'

const filteredProjects = computed(() => {
    if (activeFilter.value === 'all') return projects;
    if (activeFilter.value === 'wordpress') {
        return projects.filter(p => p.tags.includes('WordPress'));
    }
    return projects.filter(p => !p.tags.includes('WordPress'));
});

const currentProject = computed(() => {
    return filteredProjects.value[activeIndex.value] || filteredProjects.value[0] || projects[0];
});

const setProjectIndex = (index) => {
    playClick();
    activeIndex.value = index;
};

const nextProject = () => {
    playClick();
    if (activeIndex.value < filteredProjects.value.length - 1) {
        activeIndex.value++;
    } else {
        activeIndex.value = 0;
    }
};

const prevProject = () => {
    playClick();
    if (activeIndex.value > 0) {
        activeIndex.value--;
    } else {
        activeIndex.value = filteredProjects.value.length - 1;
    }
};

const setFilter = (filter) => {
    playClick();
    activeFilter.value = filter;
    activeIndex.value = 0;
};
</script>

<template>
    <div class="w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden">
        
        <!-- Ambient ASCII Watermark -->
        <div class="absolute -bottom-6 -left-6 font-mono text-[9px] text-brand-y/[0.05] select-none pointer-events-none hidden md:block leading-none">
            <pre>
+------------------------------------+
| MISSIONS_DEPLOYMENT_CATALOGUE_V4   |
| STATUS: 8 VERIFIED SHIPMENTS       |
| CLIENTS: TURKEY &bull; USA &bull; THEMEFOREST|
+------------------------------------+
            </pre>
        </div>

        <div class="max-w-6xl w-full mx-auto space-y-4 sm:space-y-6 relative z-10 py-4 sm:py-6">
            
            <!-- Section Header -->
            <div class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-brand-y/30 pb-2.5 gap-2">
                <div>
                    <div class="flex items-center gap-2 text-xs font-mono text-brand-y uppercase tracking-widest">
                        <span>// SECTOR_04 :: DEPLOYED_MISSIONS</span>
                        <span class="text-[10px] font-mono px-1.5 py-0.2 bg-brand-y/20 text-brand-y rounded-none font-bold">
                            OPS.PROJ
                        </span>
                    </div>
                    <h2 class="text-3xl sm:text-5xl font-black font-sans text-brand-y tracking-tight uppercase">
                        DEPLOYED MISSIONS
                    </h2>
                </div>

                <!-- Filter Pills with clean rounded-none borders -->
                <div class="flex items-center gap-1.5 p-1 bg-surface/85 border border-brand-y/40 rounded-none font-mono text-xs shadow-sm">
                    <button
                        @click="setFilter('all')"
                        @mouseenter="playHover"
                        class="px-3 py-1 rounded-none transition-all cursor-pointer"
                        :class="activeFilter === 'all' ? 'bg-brand-y text-surface font-bold glow-brand-y-sm' : 'text-brand-x hover:text-brand-y'"
                    >
                        ALL ({{ projects.length }})
                    </button>
                    <button
                        @click="setFilter('custom')"
                        @mouseenter="playHover"
                        class="px-3 py-1 rounded-none transition-all cursor-pointer"
                        :class="activeFilter === 'custom' ? 'bg-brand-y text-surface font-bold glow-brand-y-sm' : 'text-brand-x hover:text-brand-y'"
                    >
                        CUSTOM CODE / E-COMM
                    </button>
                    <button
                        @click="setFilter('wordpress')"
                        @mouseenter="playHover"
                        class="px-3 py-1 rounded-none transition-all cursor-pointer"
                        :class="activeFilter === 'wordpress' ? 'bg-brand-y text-surface font-bold glow-brand-y-sm' : 'text-brand-x hover:text-brand-y'"
                    >
                        WORDPRESS &amp; BUILDERS
                    </button>
                </div>
            </div>

            <!-- Main Featured Project Display Card with clean rounded-none border -->
            <div class="p-4 sm:p-6 bg-surface/85 border-2 border-brand-y/50 rounded-none glow-brand-y-sm backdrop-blur-md shadow-sm">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
                    
                    <!-- Left: Holographic Thumbnail Screen (6 Cols) -->
                    <div class="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] bg-surface rounded-none overflow-hidden border border-brand-y/50 group">
                        <img
                            :src="thumbs[currentProject.thumbnail]"
                            :alt="currentProject.title"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <!-- Holographic Scanline Overlay -->
                        <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] opacity-40"></div>
                        
                        <!-- Top HUD Overlay -->
                        <div class="absolute top-2 left-2 px-2.5 py-0.5 bg-surface/90 border border-brand-y/60 font-mono text-[10px] text-brand-y rounded-none">
                            MISSION // {{ String(activeIndex + 1).padStart(2, '0') }} OF {{ filteredProjects.length }}
                        </div>
                    </div>

                    <!-- Right: Mission Specs & Summary (6 Cols) -->
                    <div class="lg:col-span-6 space-y-3.5 text-left">
                        <div class="space-y-1">
                            <div class="flex items-center gap-2 font-mono text-xs text-brand-y">
                                <span>{{ currentProject.startDate }} &rarr; {{ currentProject.endDate }}</span>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold font-sans text-brand-y leading-snug">
                                {{ currentProject.title }}
                            </h3>
                        </div>

                        <!-- Tech Stack Badges -->
                        <div class="flex flex-wrap gap-1.5">
                            <span
                                v-for="(tag, t) in currentProject.tags"
                                :key="t"
                                class="px-2.5 py-0.5 bg-brand-y/15 border border-brand-y/40 font-mono text-[11px] text-brand-x font-bold rounded-none"
                            >
                                {{ tag }}
                            </span>
                        </div>

                        <!-- Objective & Execution Summary -->
                        <p class="text-xs sm:text-sm text-brand-x/90 font-body leading-relaxed">
                            {{ currentProject.summary }}
                        </p>

                        <!-- Action Launch Button -->
                        <div class="pt-2 flex items-center gap-3">
                            <a
                                :href="currentProject.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                @mouseenter="playHover"
                                @click="playClick"
                                class="px-5 py-2.5 bg-brand-y hover:bg-surface text-surface hover:text-brand-y border-2 border-brand-y font-mono font-bold text-xs uppercase tracking-wider rounded-none transition-all duration-300 flex items-center gap-2 glow-brand-y-sm group"
                            >
                                <span>LAUNCH MISSION URL</span>
                                <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                            </a>

                            <!-- Prev / Next Mission Arrows -->
                            <div class="flex items-center gap-1.5 font-mono text-xs">
                                <button
                                    @click="prevProject"
                                    @mouseenter="playHover"
                                    class="p-2 bg-surface border border-brand-y/40 hover:border-brand-y hover:bg-brand-y/15 text-brand-y rounded-none transition-all cursor-pointer"
                                    title="Previous Mission"
                                >
                                    &larr;
                                </button>
                                <button
                                    @click="nextProject"
                                    @mouseenter="playHover"
                                    class="p-2 bg-surface border border-brand-y/40 hover:border-brand-y hover:bg-brand-y/15 text-brand-y rounded-none transition-all cursor-pointer"
                                    title="Next Mission"
                                >
                                    &rarr;
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Mini Thumbnails Selector Strip with clean rounded-none corners -->
            <div class="grid grid-cols-4 sm:grid-cols-8 gap-2">
                <button
                    v-for="(proj, idx) in filteredProjects"
                    :key="idx"
                    @click="setProjectIndex(idx)"
                    @mouseenter="playHover"
                    class="relative aspect-[16/10] bg-surface rounded-none overflow-hidden border transition-all duration-200 cursor-pointer shadow-sm"
                    :class="activeIndex === idx ? 'border-brand-y glow-brand-y-sm scale-105' : 'border-brand-y/25 hover:border-brand-y/70 opacity-70 hover:opacity-100'"
                    :title="proj.title"
                >
                    <img :src="thumbs[proj.thumbnail]" :alt="proj.title" class="w-full h-full object-cover" />
                    <span class="absolute bottom-1 right-1 px-1 bg-black/75 text-brand-y font-mono text-[9px] rounded-none">
                        0{{ idx + 1 }}
                    </span>
                </button>
            </div>

        </div>
    </div>
</template>
