<script setup>
import { computed } from 'vue';

const props = defineProps({
    size: {
        type: String,
        default: 'md' // 'sm' | 'md' | 'lg' | 'xl'
    },
    animate: {
        type: Boolean,
        default: true
    },
    glow: {
        type: Boolean,
        default: true
    }
});

const sizeClasses = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'w-8 h-7';
        case 'md':
            return 'w-12 h-10';
        case 'lg':
            return 'w-24 h-20';
        case 'xl':
            return 'w-48 h-40';
        default:
            return 'w-12 h-10';
    }
});
</script>

<template>
    <div class="relative inline-flex items-center justify-center group select-none">
        
        <!-- Ambient Glowing Aura -->
        <div
            v-if="glow"
            class="absolute inset-0 bg-brand-y/25 rounded-none blur-xl scale-125 pointer-events-none transition-all duration-500 group-hover:scale-150 group-hover:bg-brand-y/40"
        ></div>

        <!-- Animated SVG Logo -->
        <svg
            :class="[sizeClasses, 'relative z-10 transition-transform duration-500 group-hover:scale-105']"
            viewBox="0 0 45 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <!-- Neon gradient for dynamic lighting -->
                <linearGradient id="logoGradY" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="var(--color-brand-y)" />
                    <stop offset="100%" stop-color="#a855f7" />
                </linearGradient>

                <linearGradient id="logoGradX" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="var(--color-brand-x)" />
                    <stop offset="100%" stop-color="var(--color-brand-y)" />
                </linearGradient>

                <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            <!-- Path 1: Outer Chevron / Arm (Brand X with Brand Y hover) -->
            <path
                class="logo-arm transition-all duration-500"
                :class="{ 'animate-arm': animate }"
                d="M0 0H16.5483L45 18.912L28.2164 39.9999L15.7821 40L31.1011 21.1458L0 0Z"
                fill="url(#logoGradX)"
                fill-rule="evenodd"
                clip-rule="evenodd"
                filter="url(#logoGlow)"
            />

            <!-- Path 2: Diagonal Slash Band (Electric Violet Brand Y) -->
            <path
                class="logo-slash transition-all duration-500"
                :class="{ 'animate-slash': animate }"
                d="M22.9785 0H33.4647L10.7895 39.9998L0 39.9998L22.9785 0Z"
                fill="url(#logoGradY)"
                fill-rule="evenodd"
                clip-rule="evenodd"
                filter="url(#logoGlow)"
            />

            <!-- Decorative Laser Energy Stroke Contours -->
            <path
                class="logo-stroke stroke-brand-y/80"
                d="M0 0H16.5483L45 18.912L28.2164 39.9999L15.7821 40L31.1011 21.1458L0 0Z"
                stroke-width="0.8"
                fill="none"
                stroke-dasharray="14 10"
            />
            <path
                class="logo-stroke stroke-white/90"
                d="M22.9785 0H33.4647L10.7895 39.9998L0 39.9998L22.9785 0Z"
                stroke-width="0.8"
                fill="none"
                stroke-dasharray="10 8"
            />
        </svg>

        <!-- Subtle corner crosshairs on hover for cyber touch -->
        <span class="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-brand-y/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span class="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-brand-y/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </div>
</template>

<style scoped>
@keyframes armDrift {
    0%, 100% {
        transform: translate(0, 0);
        opacity: 0.95;
    }
    50% {
        transform: translate(-1.2px, -1px);
        opacity: 1;
    }
}

@keyframes slashPulse {
    0%, 100% {
        transform: translate(0, 0) scale(1);
        filter: drop-shadow(0 0 4px var(--color-brand-y));
    }
    50% {
        transform: translate(1.5px, 1.2px) scale(1.03);
        filter: drop-shadow(0 0 12px var(--color-brand-y));
    }
}

@keyframes dashTrace {
    0% {
        stroke-dashoffset: 0;
    }
    100% {
        stroke-dashoffset: 48;
    }
}

.animate-arm {
    animation: armDrift 3.5s ease-in-out infinite;
}

.animate-slash {
    animation: slashPulse 3.5s ease-in-out infinite;
}

.logo-stroke {
    animation: dashTrace 4s linear infinite;
}

.group:hover .logo-arm {
    transform: translate(-2px, -1.5px);
}

.group:hover .logo-slash {
    transform: translate(2px, 1.5px);
    filter: drop-shadow(0 0 16px var(--color-brand-y));
}
</style>
