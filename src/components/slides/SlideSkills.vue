<script setup>
import { ref, computed } from 'vue';
import { useAnimeAudio } from '../../composables/useAnimeAudio';
import journey from '../../assets/journey.json';

// Tech SVG icons
import alpinejsIcon from '../../assets/icons/alpinejs.svg';
import vueIcon from '../../assets/icons/vue.svg';
import tailwindIcon from '../../assets/icons/tailwind.svg';
import cssIcon from '../../assets/icons/css.svg';
import jsIcon from '../../assets/icons/js.svg';
import laravelIcon from '../../assets/icons/laravel.svg';
import wordpressIcon from '../../assets/icons/wordpress.svg';
import htmlIcon from '../../assets/icons/html.svg';
import phpIcon from '../../assets/icons/php.svg';

const { playHover, playClick } = useAnimeAudio();

const iconMap = {
    alpinejs: alpinejsIcon,
    vue: vueIcon,
    tailwind: tailwindIcon,
    css: cssIcon,
    js: jsIcon,
    laravel: laravelIcon,
    wordpress: wordpressIcon,
    html: htmlIcon,
    php: phpIcon
};

const categoryMap = {
    vue: 'frontend',
    alpinejs: 'frontend',
    tailwind: 'frontend',
    js: 'frontend',
    css: 'frontend',
    html: 'frontend',
    php: 'backend',
    laravel: 'backend',
    wordpress: 'backend'
};

const levelMap = {
    vue: 'LVL 94',
    alpinejs: 'LVL 92',
    tailwind: 'LVL 96',
    js: 'LVL 93',
    css: 'LVL 95',
    html: 'LVL 98',
    php: 'LVL 88',
    laravel: 'LVL 85',
    wordpress: 'LVL 95'
};

const activeCategory = ref('all'); // 'all' | 'frontend' | 'backend'
const selectedCard = ref(null);

const skillList = computed(() => {
    const list = Object.keys(journey).map(key => ({
        key,
        ...journey[key],
        icon: iconMap[key],
        category: categoryMap[key] || 'frontend',
        level: levelMap[key] || 'LVL 90'
    }));

    if (activeCategory.value === 'all') return list;
    return list.filter(item => item.category === activeCategory.value);
});

const setCategory = (cat) => {
    playClick();
    activeCategory.value = cat;
};

const selectSkill = (skill) => {
    playClick();
    selectedCard.value = selectedCard.value?.key === skill.key ? null : skill;
};
</script>

<template>
    <div class="w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden">
        
        <!-- Ambient ASCII Watermark -->
        <div class="absolute -top-6 -right-6 font-mono text-[9px] text-brand-y/[0.05] select-none pointer-events-none hidden md:block leading-none">
            <pre>
+------------------------------------+
| TECH_MATRIX_V4 // STACK_INVENTORY  |
| FRONTEND: VUE3 &bull; ALPINE &bull; TAILWIND |
| BACKEND:  PHP &bull; LARAVEL &bull; WP BUILD |
| RUNTIME:  DENO2 &bull; VITE8 &bull; GSAP     |
+------------------------------------+
            </pre>
        </div>

        <div class="max-w-6xl w-full mx-auto space-y-5 sm:space-y-6 relative z-10 py-6">
            
            <!-- Section Header -->
            <div class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-brand-y/30 pb-3 gap-3">
                <div>
                    <div class="flex items-center gap-2 text-xs font-mono text-brand-y uppercase tracking-widest">
                        <span>// SECTOR_03 :: TECH_ARSENAL</span>
                        <span class="text-[10px] font-mono px-1.5 py-0.2 bg-brand-y/20 text-brand-y rounded-none font-bold">
                            TECH.TREE
                        </span>
                    </div>
                    <h2 class="text-3xl sm:text-5xl font-black font-sans text-brand-y tracking-tight uppercase">
                        TECH ARSENAL &amp; JOURNEY
                    </h2>
                </div>

                <!-- Category Filter Pills with clean rounded-none borders -->
                <div class="flex items-center gap-1.5 p-1 bg-surface/85 border border-brand-y/40 rounded-none font-mono text-xs shadow-sm">
                    <button
                        @click="setCategory('all')"
                        @mouseenter="playHover"
                        class="px-3 py-1 rounded-none transition-all cursor-pointer"
                        :class="activeCategory === 'all' ? 'bg-brand-y text-surface font-bold glow-brand-y-sm' : 'text-brand-x hover:text-brand-y'"
                    >
                        ALL ({{ Object.keys(journey).length }})
                    </button>
                    <button
                        @click="setCategory('frontend')"
                        @mouseenter="playHover"
                        class="px-3 py-1 rounded-none transition-all cursor-pointer"
                        :class="activeCategory === 'frontend' ? 'bg-brand-y text-surface font-bold glow-brand-y-sm' : 'text-brand-x hover:text-brand-y'"
                    >
                        FRONTEND
                    </button>
                    <button
                        @click="setCategory('backend')"
                        @mouseenter="playHover"
                        class="px-3 py-1 rounded-none transition-all cursor-pointer"
                        :class="activeCategory === 'backend' ? 'bg-brand-y text-surface font-bold glow-brand-y-sm' : 'text-brand-x hover:text-brand-y'"
                    >
                        BACKEND &amp; CMS
                    </button>
                </div>
            </div>

            <!-- Skills Cards Grid with clean rounded-none borders -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-h-[62vh] overflow-y-auto pr-1">
                <div
                    v-for="skill in skillList"
                    :key="skill.key"
                    @click="selectSkill(skill)"
                    @mouseenter="playHover"
                    class="group relative p-4 bg-surface/80 border transition-all duration-300 rounded-none cursor-pointer text-left shadow-sm"
                    :class="selectedCard?.key === skill.key
                        ? 'border-brand-y bg-brand-y/15 glow-brand-y-sm'
                        : 'border-brand-y/30 hover:border-brand-y/80 hover:bg-brand-y/10'"
                >
                    <!-- Top Bar: Icon + Level + Date -->
                    <div class="flex items-center justify-between gap-3 mb-2.5">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 p-2 bg-brand-y/10 border border-brand-y/40 rounded-none flex items-center justify-center group-hover:scale-110 transition-transform">
                                <img :src="skill.icon" :alt="skill.title" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-sans font-bold text-base text-brand-x group-hover:text-brand-y transition-colors">
                                    {{ skill.title }}
                                </h3>
                                <span class="font-mono text-[10px] text-brand-x/60">
                                    {{ skill.date }}
                                </span>
                            </div>
                        </div>

                        <span class="font-mono text-[11px] font-bold px-2 py-0.5 bg-brand-y/20 text-brand-y border border-brand-y/30 rounded-none">
                            {{ skill.level }}
                        </span>
                    </div>

                    <!-- Summary -->
                    <p class="text-xs text-brand-x/80 font-body leading-relaxed">
                        {{ skill.summary }}
                    </p>

                    <!-- Tactical Bottom Status Marker -->
                    <div class="mt-3 pt-2 border-t border-brand-y/15 flex items-center justify-between text-[10px] font-mono text-brand-x/60">
                        <span class="text-brand-y uppercase font-semibold">{{ skill.category }}</span>
                        <span>[READY :: ACTIVE]</span>
                    </div>
                </div>
            </div>

            <!-- Additional Tactical Skills Banner with clean rounded-none corners -->
            <div class="p-3.5 bg-surface/70 border border-brand-y/30 rounded-none flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                <span class="text-brand-y font-bold">// EXPANDED CAPABILITIES:</span>
                <span class="text-brand-x/80">Quality Assurance &bull; HACCP Analysis &bull; Data Modeling &bull; Agentic AI Workflows &bull; Deno 2 Runtime</span>
            </div>

        </div>
    </div>
</template>
