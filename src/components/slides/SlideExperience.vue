<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useAnimeAudio } from '../../composables/useAnimeAudio';
import resumeContent from '../../assets/resumeContent.json';
import bioContent from '../../assets/biodataContent.json';

const { playHover, playClick } = useAnimeAudio();

const activeRoleIndex = ref(0);

const roles = [
    {
        jobtitle: 'Frontend Developer',
        company: 'Genforge LLC',
        location: 'Full Time &bull; Remote',
        period: 'May 2026 &rarr; Present',
        summary: 'Engineering production-grade responsive frontend applications, themes, and interactive client platforms.',
        achievements: [
            'Architecting responsive web applications with Vue.js, TailwindCSS, and modern JavaScript.',
            'Leading e-commerce and SaaS interface implementations with high performance and accessibility.',
            'Collaborating with cross-functional teams to deliver scalable component libraries.'
        ]
    },
    {
        jobtitle: 'Freelance Software Developer',
        company: 'Freelance Marketplace / Future Innovation Ltd. / Genforge.com',
        location: 'Work From Home',
        period: 'April 2023 &rarr; Present',
        summary: 'Delivered web apps and high-performance websites for international clients with 100% satisfaction.',
        achievements: resumeContent.workExp[0]?.achievements || []
    },
    {
        jobtitle: 'QA Inspector & Senior QA Inspector',
        company: 'KM International GmbH (Organic Shrimp Project)',
        location: 'Satkhira &amp; Cox\'s Bazar',
        period: 'Sept 2017 &rarr; Dec 2022',
        summary: 'Pioneered systematic laboratory quality control, employee training, and data collection frameworks.',
        achievements: resumeContent.workExp[1]?.achievements || []
    }
];

const selectRole = (idx) => {
    playClick();
    activeRoleIndex.value = idx;
};
</script>

<template>
    <div class="w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden">
        
        <!-- Ambient ASCII Watermark -->
        <div class="absolute -bottom-6 -right-6 font-mono text-[9px] text-brand-y/[0.05] select-none pointer-events-none hidden md:block leading-none">
            <pre>
+------------------------------------+
| SERVICE_CHRONOLOGY // LOGBOOK      |
| TOTAL_SERVICE: 8+ YEARS (DEV + QA) |
| SPECIALTY: WEB_UX &bull; SYSTEMATIC_QA |
+------------------------------------+
            </pre>
        </div>

        <div class="max-w-6xl w-full mx-auto space-y-4 sm:space-y-6 relative z-10 py-4 sm:py-6">
            
            <!-- Section Header -->
            <div class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-brand-y/30 pb-3 gap-2">
                <div>
                    <div class="flex items-center gap-2 text-xs font-mono text-brand-y uppercase tracking-widest">
                        <span>// SECTOR_06 :: SERVICE_LOG</span>
                        <span class="text-[10px] font-mono px-1.5 py-0.2 bg-brand-y/20 text-brand-y rounded-none font-bold">
                            LOG.HIST
                        </span>
                    </div>
                    <h2 class="text-3xl sm:text-5xl font-black font-sans text-brand-y tracking-tight uppercase">
                        SERVICE LOG &amp; ROLES
                    </h2>
                </div>

                <RouterLink
                    to="/resume"
                    @mouseenter="playHover"
                    @click="playClick"
                    class="px-3.5 py-1.5 bg-brand-y/15 hover:bg-brand-y text-brand-y hover:text-surface border border-brand-y font-mono text-xs font-bold uppercase rounded-none transition-all"
                >
                    📄 PRINTABLE RÉSUMÉ
                </RouterLink>
            </div>

            <!-- Content Grid: Timeline Roles Selector + Detailed Achievement View -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                
                <!-- Left: Timeline Role Nodes (5 Cols) with clean rounded-none borders -->
                <div class="lg:col-span-5 space-y-3">
                    <div
                        v-for="(role, index) in roles"
                        :key="index"
                        @click="selectRole(index)"
                        @mouseenter="playHover"
                        class="p-4 bg-surface/80 border transition-all duration-300 rounded-none cursor-pointer text-left relative group shadow-sm"
                        :class="activeRoleIndex === index
                            ? 'border-brand-y bg-brand-y/15 glow-brand-y-sm'
                            : 'border-brand-y/25 hover:border-brand-y/70 hover:bg-brand-y/10'"
                    >
                        <div class="flex items-center justify-between font-mono text-xs text-brand-y mb-1">
                            <span class="font-bold">// 0{{ index + 1 }}</span>
                            <span class="text-[11px] text-brand-x/70" v-html="role.period"></span>
                        </div>

                        <h3 class="font-sans font-bold text-base text-brand-x group-hover:text-brand-y transition-colors">
                            {{ role.jobtitle }}
                        </h3>

                        <p class="font-mono text-xs text-brand-y/90 mt-0.5" v-html="role.company"></p>
                        <p class="text-[11px] text-brand-x/60 font-mono mt-0.5" v-html="role.location"></p>
                    </div>

                    <!-- Education Capsule with clean rounded-none corners -->
                    <div class="p-4 bg-surface/70 border border-brand-y/30 rounded-none text-left font-mono text-xs space-y-1.5">
                        <span class="text-brand-y font-bold block mb-1">// ACADEMIC CREDENTIALS:</span>
                        <div class="flex justify-between">
                            <span class="text-brand-x/90 font-bold">BSc Physics (2022)</span>
                            <span class="text-brand-x/60">Satkhira Govt. College</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-brand-x/90">HSC Science (2014)</span>
                            <span class="text-brand-x/60">Shimanta Adarsha College</span>
                        </div>
                    </div>
                </div>

                <!-- Right: Active Role Intel & Achievements (7 Cols) with clean rounded-none border -->
                <div class="lg:col-span-7">
                    <div class="p-5 sm:p-6 bg-surface/85 border-2 border-brand-y/50 rounded-none glow-brand-y-sm backdrop-blur-md space-y-4 text-left shadow-sm">
                        
                        <!-- Role Header -->
                        <div class="border-b border-brand-y/20 pb-3">
                            <span class="font-mono text-xs text-brand-y block mb-1">
                                [MISSION_DETAILS // UNIT ROLE: 0{{ activeRoleIndex + 1 }}]
                            </span>
                            <h3 class="text-xl sm:text-2xl font-bold font-sans text-brand-y">
                                {{ roles[activeRoleIndex].jobtitle }}
                            </h3>
                            <p class="font-mono text-xs text-brand-x/80 mt-1" v-html="roles[activeRoleIndex].company"></p>
                            <p class="text-xs text-brand-x/90 mt-2 font-body italic">
                                "{{ roles[activeRoleIndex].summary }}"
                            </p>
                        </div>

                        <!-- Achievements Checklist -->
                        <div>
                            <h4 class="font-mono text-xs font-bold text-brand-y uppercase tracking-wider mb-2.5">
                                // KEY ACHIEVEMENTS &amp; RESPONSIBILITIES:
                            </h4>
                            <ul class="space-y-2 max-h-[36vh] overflow-y-auto pr-1">
                                <li
                                    v-for="(task, tIndex) in roles[activeRoleIndex].achievements"
                                    :key="tIndex"
                                    class="flex items-start gap-2.5 text-xs sm:text-sm text-brand-x/90 font-body leading-relaxed"
                                >
                                    <span class="text-brand-y font-mono font-bold shrink-0 mt-0.5">&gt;</span>
                                    <span>{{ task }}</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
