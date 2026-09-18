// useAnimeAudio.js - Pure Web Audio API Sound Synthesizer for Anime/Cyber UI
import { ref } from 'vue';

const isSoundEnabled = ref(false);

// Check localStorage for saved sound preference
if (typeof globalThis.localStorage !== 'undefined') {
    const saved = globalThis.localStorage.getItem('snz_sound_enabled');
    if (saved === 'true') {
        isSoundEnabled.value = true;
    }
}

let audioCtx = null;

function getAudioContext() {
    if (typeof globalThis.window === 'undefined') return null;
    if (!audioCtx) {
        const AudioContextClass = globalThis.AudioContext || globalThis.webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

export function useAnimeAudio() {
    const toggleSound = () => {
        isSoundEnabled.value = !isSoundEnabled.value;
        if (typeof globalThis.localStorage !== 'undefined') {
            globalThis.localStorage.setItem('snz_sound_enabled', isSoundEnabled.value ? 'true' : 'false');
        }
        if (isSoundEnabled.value) {
            getAudioContext();
            playConfirm();
        }
    };

    const playHover = () => {
        if (!isSoundEnabled.value) return;
        try {
            const ctx = getAudioContext();
            if (!ctx) return;
            const now = ctx.currentTime;

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(820, now);
            osc.frequency.exponentialRampToValueAtTime(1200, now + 0.035);

            gain.gain.setValueAtTime(0.025, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.04);
        } catch {
            // Audio context policy safe fail
        }
    };

    const playClick = () => {
        if (!isSoundEnabled.value) return;
        try {
            const ctx = getAudioContext();
            if (!ctx) return;
            const now = ctx.currentTime;

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(540, now);
            osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);

            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.07);
        } catch {
            // Audio context policy safe fail
        }
    };

    const playSlide = (direction = 'next') => {
        if (!isSoundEnabled.value) return;
        try {
            const ctx = getAudioContext();
            if (!ctx) return;
            const now = ctx.currentTime;

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            if (direction === 'next') {
                osc.frequency.setValueAtTime(320, now);
                osc.frequency.exponentialRampToValueAtTime(740, now + 0.12);
            } else {
                osc.frequency.setValueAtTime(640, now);
                osc.frequency.exponentialRampToValueAtTime(280, now + 0.12);
            }

            gain.gain.setValueAtTime(0.04, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.13);
        } catch {
            // Audio context policy safe fail
        }
    };

    const playConfirm = () => {
        if (!isSoundEnabled.value) return;
        try {
            const ctx = getAudioContext();
            if (!ctx) return;
            const now = ctx.currentTime;

            [523.25, 783.99].forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                const startTime = now + (i * 0.07);

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, startTime);

                gain.gain.setValueAtTime(0.04, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.14);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start(startTime);
                osc.stop(startTime + 0.15);
            });
        } catch {
            // Audio context policy safe fail
        }
    };

    const playGlitch = () => {
        if (!isSoundEnabled.value) return;
        try {
            const ctx = getAudioContext();
            if (!ctx) return;
            const now = ctx.currentTime;

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.setValueAtTime(440, now + 0.02);
            osc.frequency.setValueAtTime(180, now + 0.04);

            gain.gain.setValueAtTime(0.03, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.07);
        } catch {
            // Audio context policy safe fail
        }
    };

    return {
        isSoundEnabled,
        toggleSound,
        playHover,
        playClick,
        playSlide,
        playConfirm,
        playGlitch
    };
}
