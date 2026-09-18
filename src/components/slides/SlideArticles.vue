<script setup>
import { useAnimeAudio } from '../../composables/useAnimeAudio';
import articles from '../../assets/articles.json';
import denovite from '../../assets/articles/deno-vite.webp';

const { playHover, playClick } = useAnimeAudio();
const article = articles[0] || {};
</script>

<template>
    <div class="w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden">
        
        <!-- Ambient ASCII Watermark -->
        <div class="absolute -top-6 -left-6 font-mono text-[9px] text-brand-y/[0.05] select-none pointer-events-none hidden md:block leading-none">
            <pre>
+------------------------------------+
| TECHNICAL_INTEL_INDEX // ARTICLES  |
| TOPIC: DENO 2 + TAILWIND V4 + VITE |
| ARCHIVE_STATE: PUBLISHED           |
+------------------------------------+
            </pre>
        </div>

        <div class="max-w-6xl w-full mx-auto space-y-5 sm:space-y-6 relative z-10 py-6">
            
            <!-- Section Header -->
            <div class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-brand-y/30 pb-3 gap-2">
                <div>
                    <div class="flex items-center gap-2 text-xs font-mono text-brand-y uppercase tracking-widest">
                        <span>// SECTOR_05 :: INTEL_ARCHIVE</span>
                        <span class="text-[10px] font-mono px-1.5 py-0.2 bg-brand-y/20 text-brand-y rounded-none font-bold">
                            DOCS.ARCH
                        </span>
                    </div>
                    <h2 class="text-3xl sm:text-5xl font-black font-sans text-brand-y tracking-tight uppercase">
                        INTEL ARCHIVE &amp; ARTICLES
                    </h2>
                </div>

                <span class="font-mono text-xs text-brand-x/70">
                    STATUS: 01 DEPLOYED DISPATCH
                </span>
            </div>

            <!-- Content Grid: Article Feature + Code Terminal -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                <!-- Left: Article Feature Card (7 Cols) with clean rounded-none borders -->
                <div class="lg:col-span-7 space-y-4 text-left">
                    <div class="p-5 sm:p-6 bg-surface/85 border-2 border-brand-y/50 rounded-none glow-brand-y-sm backdrop-blur-md space-y-4 shadow-sm">
                        
                        <div class="flex items-center justify-between font-mono text-xs text-brand-y border-b border-brand-y/20 pb-2">
                            <span>DISPATCH // {{ article.postdate }}</span>
                            <span class="px-2.5 py-0.5 bg-brand-y/15 border border-brand-y/30 rounded-none text-[10px]">
                                RUNTIME &bull; STYLING
                            </span>
                        </div>

                        <!-- Thumbnail Preview -->
                        <div class="relative aspect-[16/8] rounded-none overflow-hidden border border-brand-y/40 bg-surface">
                            <img
                                :src="denovite"
                                :alt="article.title"
                                class="w-full h-full object-cover"
                            />
                            <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-40"></div>
                        </div>

                        <h3 class="text-xl sm:text-2xl font-bold font-sans text-brand-y leading-tight">
                            {{ article.title }}
                        </h3>

                        <p class="text-xs sm:text-sm text-brand-x/90 font-body leading-relaxed">
                            {{ article.summary }}
                        </p>

                        <!-- Key Intel Bulletpoints -->
                        <div class="space-y-1.5 font-mono text-xs text-brand-x/80 border-t border-brand-y/20 pt-3">
                            <div class="flex items-center gap-2">
                                <span class="text-brand-y font-bold">&gt;</span>
                                <span>Deno 2 Runtime: Native TypeScript, zero npm bloat, secure defaults.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-brand-y font-bold">&gt;</span>
                                <span>Tailwind v4 Engine: CSS-first architecture with instantaneous builds.</span>
                            </div>
                        </div>

                        <div class="pt-2">
                            <a
                                :href="article.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                @mouseenter="playHover"
                                @click="playClick"
                                class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-y hover:bg-surface text-surface hover:text-brand-y border-2 border-brand-y font-mono font-bold text-xs uppercase tracking-wider rounded-none transition-all duration-300 shadow-sm group"
                            >
                                <span>READ DISPATCH ON LINKEDIN</span>
                                <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>

                <!-- Right: Anime Cyber Terminal Code Inspector (5 Cols) with clean rounded-none borders -->
                <div class="lg:col-span-5 space-y-4">
                    <div class="p-5 bg-black/90 border-2 border-brand-y/60 rounded-none font-mono text-xs shadow-sm text-left">
                        
                        <!-- Terminal Top Bar -->
                        <div class="flex items-center justify-between border-b border-brand-y/30 pb-2 mb-3">
                            <div class="flex items-center gap-1.5">
                                <span class="w-2.5 h-2.5 rounded-none bg-red-500/80"></span>
                                <span class="w-2.5 h-2.5 rounded-none bg-yellow-500/80"></span>
                                <span class="w-2.5 h-2.5 rounded-none bg-emerald-500/80"></span>
                            </div>
                            <span class="text-[10px] text-brand-y/80 tracking-widest font-bold">
                                DENO_VITE_KERNEL.SH
                            </span>
                        </div>

                        <!-- Code Lines -->
                        <div class="space-y-1 text-brand-x/90 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto">
                            <p class="text-brand-y font-bold"># Initialize Deno + Tailwind v4 + Vite</p>
                            <p><span class="text-emerald-400">$</span> deno run -A --node-modules-dir npm:vite</p>
                            <p class="text-brand-x/40">---------------------------------------</p>
                            <p class="text-purple-400">// vite.config.ts</p>
                            <p class="text-brand-x/80">import { defineConfig } from 'vite'</p>
                            <p class="text-brand-x/80">import tailwindcss from '@tailwindcss/vite'</p>
                            <p class="text-brand-x/80">export default defineConfig({</p>
                            <p class="pl-3 text-brand-x/80">plugins: [tailwindcss()]</p>
                            <p class="text-brand-x/80">})</p>
                            <p class="text-brand-x/40">---------------------------------------</p>
                            <p class="text-emerald-400">&gt; Status: Compile success in 24ms</p>
                            <p class="text-brand-y animate-pulse">&gt; Ready on http://localhost:5173/ _</p>
                        </div>

                    </div>

                    <!-- Tech Badge Note with clean rounded-none corners -->
                    <div class="p-3.5 bg-surface/70 border border-brand-y/30 rounded-none text-xs font-mono text-left">
                        <span class="text-brand-y font-bold block mb-0.5">// RESEARCH FOCUS:</span>
                        <p class="text-brand-x/80 font-body text-xs">
                            Actively publishing on modern web standards, lightweight runtimes, and frontier styling patterns.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
