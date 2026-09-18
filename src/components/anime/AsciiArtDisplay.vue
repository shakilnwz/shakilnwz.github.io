<script setup>
import { ref } from 'vue';
import rawAscii from '../../assets/images/ascii_avater.txt?raw';

const props = defineProps({
    compact: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: 'violet' // 'violet' | 'green' | 'cyan'
    }
});

// Clean up ASCII text
const asciiLines = rawAscii
    .split('\n')
    .filter((line, i) => i > 1 && i < 60)
    .join('\n');
</script>

<template>
    <div class="relative w-full rounded-none bg-black/90 border border-brand-y/50 p-4 sm:p-6 overflow-hidden select-none font-mono text-left shadow-sm">
        
        <!-- Terminal Header Bar -->
        <div class="flex items-center justify-between border-b border-brand-y/30 pb-2 mb-3">
            <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-none bg-red-500/80"></span>
                <span class="w-2.5 h-2.5 rounded-none bg-yellow-500/80"></span>
                <span class="w-2.5 h-2.5 rounded-none bg-emerald-500/80"></span>
                <span class="ml-2 text-[10px] text-brand-x/60 tracking-wider">ASCII_BIO_SCAN.TXT</span>
            </div>
            <span class="text-[10px] font-mono text-brand-y font-bold animate-pulse">
                [LIVE RENDER :: MATRIX]
            </span>
        </div>

        <!-- Monospace ASCII Art Container -->
        <div class="relative overflow-x-auto overflow-y-hidden max-h-[380px] flex items-center justify-center">
            <pre
                class="font-mono text-[5.5px] sm:text-[6.5px] md:text-[7.5px] leading-[1.05] tracking-tighter transition-all duration-300 select-all"
                :class="color === 'violet' ? 'text-brand-y drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]' : 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.7)]'"
            >{{ asciiLines }}</pre>

            <!-- Holographic CRT Scanlines -->
            <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] opacity-40"></div>
        </div>

        <!-- Terminal Bottom Status -->
        <div class="mt-3 pt-2 border-t border-brand-y/20 flex items-center justify-between text-[10px] text-brand-x/60 font-mono">
            <span>OBJECT: SHAKIL NAWAZ</span>
            <span>RESOLUTION: 60x80 CHARS</span>
            <span class="text-brand-y">SYS_OK</span>
        </div>

    </div>
</template>
