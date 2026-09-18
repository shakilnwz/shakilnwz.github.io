<script setup>
import AnimatedLogo from './AnimatedLogo.vue';

defineProps({
    active: {
        type: Boolean,
        default: false
    },
    direction: {
        type: String,
        default: 'next'
    }
});
</script>

<template>
    <div
        v-if="active"
        class="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none flex items-center justify-center animate-slash-in"
    >
        <!-- High-speed anime slash flash -->
        <div class="absolute inset-0 bg-brand-y/20 dark:bg-brand-y/25 backdrop-blur-[2px] animate-flash"></div>

        <!-- Diagonal katana / energy slash beam -->
        <div
            class="absolute w-[220vw] h-1.5 sm:h-2.5 bg-white transform origin-center transition-all duration-300"
            :class="direction === 'next' ? 'rotate-[-28deg] animate-slash-next' : 'rotate-[28deg] animate-slash-prev'"
        ></div>

        <!-- Manga Speedlines lines -->
        <svg class="absolute inset-0 w-full h-full opacity-60 dark:opacity-80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <line x1="0" y1="10%" x2="100%" y2="40%" stroke="var(--color-brand-y)" stroke-width="2" stroke-dasharray="80 40" opacity="0.7" />
            <line x1="0" y1="30%" x2="100%" y2="60%" stroke="#fff" stroke-width="1.5" stroke-dasharray="140 60" opacity="0.9" />
            <line x1="0" y1="50%" x2="100%" y2="80%" stroke="var(--color-brand-y)" stroke-width="3" stroke-dasharray="100 50" opacity="0.8" />
            <line x1="0" y1="70%" x2="100%" y2="100%" stroke="#fff" stroke-width="2" stroke-dasharray="90 70" opacity="0.6" />
        </svg>

        <!-- Animated Logo Center Flash with ASCII Sector Track -->
        <div class="relative z-10 flex flex-col items-center gap-2 scale-125 animate-pulse">
            <AnimatedLogo size="lg" :glow="true" />
            <span class="font-mono text-xs font-bold text-white tracking-widest bg-brand-y/80 px-3 py-0.5 rounded-none">
                // SECTOR_WARP &gt;&gt;
            </span>
        </div>
    </div>
</template>

<style scoped>
@keyframes flash {
    0% { opacity: 0; }
    30% { opacity: 1; }
    100% { opacity: 0; }
}

@keyframes slashNext {
    0% {
        transform: rotate(-28deg) translateY(-100vh) scaleX(0.2);
        opacity: 0.2;
    }
    50% {
        transform: rotate(-28deg) translateY(0) scaleX(1.1);
        opacity: 1;
    }
    100% {
        transform: rotate(-28deg) translateY(100vh) scaleX(0.4);
        opacity: 0;
    }
}

@keyframes slashPrev {
    0% {
        transform: rotate(28deg) translateY(100vh) scaleX(0.2);
        opacity: 0.2;
    }
    50% {
        transform: rotate(28deg) translateY(0) scaleX(1.1);
        opacity: 1;
    }
    100% {
        transform: rotate(28deg) translateY(-100vh) scaleX(0.4);
        opacity: 0;
    }
}

.animate-flash {
    animation: flash 0.38s ease-out forwards;
}

.animate-slash-next {
    animation: slashNext 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-slash-prev {
    animation: slashPrev 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
