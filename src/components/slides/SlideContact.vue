<script setup>
import { ref, inject } from 'vue';
import { useAnimeAudio } from '../../composables/useAnimeAudio';
import bioContent from '../../assets/biodataContent.json';

const { playHover, playClick, playConfirm } = useAnimeAudio();
const iconList = inject('icons') || {};

// Form state
const name = ref('');
const email = ref('');
const message = ref('');
const isSubmitting = ref(false);
const submitStatus = ref(null); // 'success' | 'error' | null
const copyStatus = ref('');

const copyToClipboard = async (text, label) => {
    try {
        await navigator.clipboard.writeText(text);
        playConfirm();
        copyStatus.value = `COPIED ${label.toUpperCase()}!`;
        setTimeout(() => {
            copyStatus.value = '';
        }, 2200);
    } catch (e) {
        copyStatus.value = 'COPY FAILED';
    }
};

const submitForm = async () => {
    isSubmitting.value = true;
    submitStatus.value = null;
    playClick();

    const formId = "1FAIpQLSdOIQQL_gZwrQX9eIrKn22ynVThxyhxQU73g_aKYpd-gcZoPg";
    const url = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

    const formData = new FormData();
    formData.append("entry.252721265", name.value);
    formData.append("entry.1305900489", email.value);
    formData.append("entry.509312173", message.value);

    try {
        await fetch(url, {
            method: "POST",
            body: formData,
            mode: "no-cors"
        });
        playConfirm();
        submitStatus.value = 'success';
        name.value = '';
        email.value = '';
        message.value = '';
    } catch (err) {
        submitStatus.value = 'error';
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<template>
    <div class="w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden">
        
        <!-- Ambient ASCII Watermark -->
        <div class="absolute -top-6 -right-6 font-mono text-[9px] text-brand-y/[0.05] select-none pointer-events-none hidden md:block leading-none">
            <pre>
+------------------------------------+
| OPEN_DISPATCH_PORT // READY        |
| FREQ: shakilnwz@gmail.com          |
| TEL:  +880 179 190 7711 (WHATSAPP) |
| LOC:  DHAKA, BANGLADESH            |
+------------------------------------+
            </pre>
        </div>

        <div class="max-w-6xl w-full mx-auto space-y-4 sm:space-y-6 relative z-10 py-4 sm:py-6">
            
            <!-- Section Header -->
            <div class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-brand-y/30 pb-3 gap-2">
                <div>
                    <div class="flex items-center gap-2 text-xs font-mono text-brand-y uppercase tracking-widest">
                        <span>// SECTOR_07 :: DISPATCH_COMMS</span>
                        <span class="text-[10px] font-mono px-1.5 py-0.2 bg-brand-y/20 text-brand-y rounded-none font-bold">
                            COMM.FREQ
                        </span>
                    </div>
                    <h2 class="text-3xl sm:text-5xl font-black font-sans text-brand-y tracking-tight uppercase">
                        DISPATCH &amp; CONNECT
                    </h2>
                </div>

                <div v-if="copyStatus" class="font-mono text-xs font-bold text-emerald-400 animate-pulse">
                    &gt;&gt; {{ copyStatus }}
                </div>
            </div>

            <!-- Content Grid: Working Form + Direct Channels -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
                
                <!-- Left: Interactive Transmission Form (6 Cols) with clean rounded-none borders -->
                <div class="lg:col-span-6 text-left">
                    <div class="p-5 sm:p-6 bg-surface/85 border-2 border-brand-y/50 rounded-none glow-brand-y-sm backdrop-blur-md space-y-4 shadow-sm">
                        
                        <div class="flex items-center justify-between border-b border-brand-y/25 pb-2 font-mono text-xs text-brand-y">
                            <span>[SEND_TRANSMISSION_PACKET]</span>
                            <span>ENDPOINT: GOOGLE_FORM</span>
                        </div>

                        <form @submit.prevent="submitForm" class="space-y-3 font-mono text-xs">
                            <div>
                                <label class="block text-brand-x/80 font-bold mb-1">
                                    // OPERATOR NAME
                                </label>
                                <input
                                    v-model="name"
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    @focus="playHover"
                                    class="w-full px-3.5 py-2.5 bg-surface border border-brand-y/40 focus:border-brand-y focus:glow-brand-y-sm focus:outline-none rounded-none text-brand-x font-mono text-xs transition-all"
                                />
                            </div>

                            <div>
                                <label class="block text-brand-x/80 font-bold mb-1">
                                    // RETURN FREQUENCY (EMAIL)
                                </label>
                                <input
                                    v-model="email"
                                    type="email"
                                    required
                                    placeholder="operator@domain.com"
                                    @focus="playHover"
                                    class="w-full px-3.5 py-2.5 bg-surface border border-brand-y/40 focus:border-brand-y focus:glow-brand-y-sm focus:outline-none rounded-none text-brand-x font-mono text-xs transition-all"
                                />
                            </div>

                            <div>
                                <label class="block text-brand-x/80 font-bold mb-1">
                                    // TRANSMISSION CONTENT
                                </label>
                                <textarea
                                    v-model="message"
                                    rows="3"
                                    required
                                    placeholder="Describe your vision, project, or mission briefing..."
                                    @focus="playHover"
                                    class="w-full px-3.5 py-2.5 bg-surface border border-brand-y/40 focus:border-brand-y focus:glow-brand-y-sm focus:outline-none rounded-none text-brand-x font-mono text-xs transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                :disabled="isSubmitting"
                                @mouseenter="playHover"
                                class="w-full py-3 bg-brand-y hover:bg-surface text-surface hover:text-brand-y border-2 border-brand-y font-mono font-bold text-xs uppercase tracking-wider rounded-none transition-all duration-300 shadow-sm cursor-pointer flex items-center justify-center gap-2"
                            >
                                <span v-if="isSubmitting">TRANSMITTING PACKET...</span>
                                <span v-else>TRANSMIT DISPATCH PACKET</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </form>

                        <!-- Transmission Status Feedback -->
                        <div v-if="submitStatus === 'success'" class="p-3 bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-xs rounded-none">
                            &gt; ACK 200: Transmission received successfully! I will respond promptly.
                        </div>
                        <div v-else-if="submitStatus === 'error'" class="p-3 bg-red-500/15 border border-red-500/40 text-red-400 font-mono text-xs rounded-none">
                            &gt; TRANSMISSION ERROR: Please send directly to shakilnwz@gmail.com
                        </div>

                    </div>
                </div>

                <!-- Right: Direct Channels Matrix (6 Cols) with clean rounded-none borders -->
                <div class="lg:col-span-6 space-y-3 text-left">
                    <div class="p-5 sm:p-6 bg-surface/80 border border-brand-y/40 rounded-none backdrop-blur-md space-y-3 shadow-sm">
                        <span class="block font-mono text-xs text-brand-y font-bold border-b border-brand-y/20 pb-2">
                            [DIRECT_FREQUENCY_CHANNELS]
                        </span>

                        <div class="space-y-2 font-mono text-xs">
                            
                            <!-- Email -->
                            <div class="p-3 bg-surface/80 border border-brand-y/30 rounded-none flex items-center justify-between gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-brand-y font-bold">EMAIL:</span>
                                    <span class="text-brand-x font-semibold">shakilnwz@gmail.com</span>
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <button
                                        @click="copyToClipboard('shakilnwz@gmail.com', 'email')"
                                        class="px-2.5 py-1 bg-brand-y/15 hover:bg-brand-y text-brand-y hover:text-surface border border-brand-y/40 text-[10px] rounded-none cursor-pointer"
                                    >
                                        COPY
                                    </button>
                                    <a
                                        href="mailto:shakilnwz@gmail.com"
                                        class="px-2.5 py-1 bg-brand-y text-surface font-bold text-[10px] rounded-none"
                                    >
                                        SEND
                                    </a>
                                </div>
                            </div>

                            <!-- WhatsApp -->
                            <div class="p-3 bg-surface/80 border border-brand-y/30 rounded-none flex items-center justify-between gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-brand-y font-bold">WHATSAPP:</span>
                                    <span class="text-brand-x font-semibold">+880 179 190 7711</span>
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <button
                                        @click="copyToClipboard('+8801791907711', 'phone')"
                                        class="px-2.5 py-1 bg-brand-y/15 hover:bg-brand-y text-brand-y hover:text-surface border border-brand-y/40 text-[10px] rounded-none cursor-pointer"
                                    >
                                        COPY
                                    </button>
                                    <a
                                        :href="bioContent.contact.whatsappUrl"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="px-2.5 py-1 bg-brand-y text-surface font-bold text-[10px] rounded-none"
                                    >
                                        CHAT
                                    </a>
                                </div>
                            </div>

                            <!-- Social Matrix Grid with clean rounded-none cards -->
                            <div class="grid grid-cols-2 gap-2 pt-1">
                                <a
                                    :href="bioContent.contact.linkedinUrl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    @mouseenter="playHover"
                                    @click="playClick"
                                    class="p-2.5 bg-surface/80 hover:bg-brand-y/15 border border-brand-y/30 hover:border-brand-y text-brand-x hover:text-brand-y rounded-none transition-all flex items-center gap-2"
                                >
                                    <span class="text-brand-y font-bold">&bull;</span>
                                    <span>LINKEDIN</span>
                                </a>

                                <a
                                    :href="bioContent.contact.githubUrl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    @mouseenter="playHover"
                                    @click="playClick"
                                    class="p-2.5 bg-surface/80 hover:bg-brand-y/15 border border-brand-y/30 hover:border-brand-y text-brand-x hover:text-brand-y rounded-none transition-all flex items-center gap-2"
                                >
                                    <span class="text-brand-y font-bold">&bull;</span>
                                    <span>GITHUB</span>
                                </a>

                                <a
                                    :href="bioContent.contact.discordUrl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    @mouseenter="playHover"
                                    @click="playClick"
                                    class="p-2.5 bg-surface/80 hover:bg-brand-y/15 border border-brand-y/30 hover:border-brand-y text-brand-x hover:text-brand-y rounded-none transition-all flex items-center gap-2"
                                >
                                    <span class="text-brand-y font-bold">&bull;</span>
                                    <span>DISCORD</span>
                                </a>

                                <a
                                    href="https://x.com/shakilnwz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    @mouseenter="playHover"
                                    @click="playClick"
                                    class="p-2.5 bg-surface/80 hover:bg-brand-y/15 border border-brand-y/30 hover:border-brand-y text-brand-x hover:text-brand-y rounded-none transition-all flex items-center gap-2"
                                >
                                    <span class="text-brand-y font-bold">&bull;</span>
                                    <span>X (TWITTER)</span>
                                </a>
                            </div>

                        </div>
                    </div>

                    <!-- Footer Signoff Stamp with clean rounded-none corners -->
                    <div class="p-3 bg-surface/60 border border-brand-y/20 rounded-none text-center font-mono text-[11px] text-brand-x/60">
                        SYSTEM TERMINAL &copy; {{ new Date().getFullYear() }} SHAKIL NAWAZ &bull; ALL GREEN &bull; DHAKA, BD
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
