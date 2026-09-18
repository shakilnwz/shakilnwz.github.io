<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref(null);
let animationFrameId = null;

onMounted(() => {
    const canvas = canvasRef.value;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particles: glowing anime cyber motes / digital dust
    const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 0.8,
            speedY: -0.3 - Math.random() * 0.45,
            speedX: (Math.random() - 0.5) * 0.35,
            opacity: Math.random() * 0.6 + 0.2,
            pulseSpeed: 0.015 + Math.random() * 0.02,
            pulseVal: Math.random() * Math.PI
        });
    }

    const render = () => {
        ctx.clearRect(0, 0, width, height);

        const isDark = document.body.classList.contains('dark');
        const color = isDark ? '168, 85, 247' : '102, 60, 240'; // Brand violet

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.y += p.speedY;
            p.x += p.speedX;
            p.pulseVal += p.pulseSpeed;

            // Reset bounds
            if (p.y < -10) {
                p.y = height + 10;
                p.x = Math.random() * width;
            }
            if (p.x < -10) p.x = width + 10;
            if (p.x > width + 10) p.x = -10;

            const dynamicAlpha = Math.max(0.1, p.opacity + Math.sin(p.pulseVal) * 0.25);

            ctx.fillStyle = `rgba(${color}, ${dynamicAlpha * (isDark ? 0.85 : 0.45)})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = `rgba(${color}, 0.7)`;
            ctx.fillRect(p.x - p.radius, p.y - p.radius, p.radius * 2, p.radius * 2);
        }

        animationFrameId = requestAnimationFrame(render);
    };

    render();

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    });
});
</script>

<template>
    <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
        <!-- Canvas particle field -->
        <canvas ref="canvasRef" class="absolute inset-0 h-full w-full opacity-70 transition-opacity duration-700"></canvas>

        <!-- Subtle anime background cyber grid -->
        <div class="cyber-grid absolute inset-0 opacity-40 dark:opacity-30"></div>

        <!-- Anime corner tactical brackets -->
        <div class="absolute top-3 left-3 text-brand-y/40 font-mono text-xs hidden sm:block">
            ┌── [SYS:SNZ-OS] ──┐
        </div>
        <div class="absolute top-3 right-3 text-brand-y/40 font-mono text-xs hidden sm:block">
            ┌── [LAT: 23.7°N] ──┐
        </div>
        <div class="absolute bottom-3 left-3 text-brand-y/40 font-mono text-xs hidden sm:block">
            └── [STATUS: ONLINE] ──┘
        </div>
        <div class="absolute bottom-3 right-3 text-brand-y/40 font-mono text-xs hidden sm:block">
            └── [UNIT: SHAKIL] ──┘
        </div>

        <!-- Giant Ambient Animated Logo Wireframe Watermark -->
        <div class="absolute -right-20 top-1/4 w-[42vw] max-w-[500px] aspect-[45/40] opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
            <svg class="w-full h-full animate-pulse" viewBox="0 0 45 40" fill="none">
                <path d="M0 0H16.5483L45 18.912L28.2164 39.9999L15.7821 40L31.1011 21.1458L0 0Z" stroke="var(--color-brand-y)" stroke-width="1" />
                <path d="M22.9785 0H33.4647L10.7895 39.9998L0 39.9998L22.9785 0Z" stroke="var(--color-brand-x)" stroke-width="1" />
            </svg>
        </div>

        <!-- Ambient ASCII Art Stream Watermark -->
        <div class="absolute -left-6 bottom-16 font-mono text-[9px] sm:text-[11px] text-brand-y/[0.04] dark:text-brand-y/[0.07] leading-tight select-none pointer-events-none hidden md:block">
            <pre>
+-----------------------------------------------------------+
| 01010011 01001000 01000001 01001011 01001001 01001100      |
| [UNIT: SHAKIL NAWAZ]  [SYS: ONLINE]  [KERNEL: VUE3+TAILWIND]|
| 01001110 01000001 01010111 01000001 01011010 00100000      |
+-----------------------------------------------------------+
            </pre>
        </div>
    </div>
</template>
