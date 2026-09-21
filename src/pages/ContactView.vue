<script setup>
import Section from '../components/atoms/Section.vue'
import SocialLink from '../components/atoms/SocialLink.vue';
import { inject, ref } from 'vue'
const iconList = inject('icons')

const name = ref('');
const email = ref('');
const message = ref('');
const isLoading = ref(false);

const toast = ref({
    show: false,
    type: 'success',
    message: ''
});

let toastTimeout = null;

const showToast = (type, msg) => {
    if (toastTimeout) clearTimeout(toastTimeout);
    toast.value = { show: true, type, message: msg };
    toastTimeout = setTimeout(() => {
        toast.value.show = false;
    }, 5000);
};

const closeToast = () => {
    if (toastTimeout) clearTimeout(toastTimeout);
    toast.value.show = false;
};

const submitForm = async () => {
    if (isLoading.value) return;

    isLoading.value = true;

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                message: message.value,
            }),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(data.error || 'Failed to send message. Please try again.');
        }

        showToast('success', data.message || 'Message sent successfully!');
        name.value = '';
        email.value = '';
        message.value = '';
    } catch (error) {
        showToast('error', error.message || 'There was an error sending your message. Please try again.');
    } finally {
        isLoading.value = false;
    }
};

</script>
<template>
        <Section contained class="min-h-[76vh]">
            <h2>Connect</h2>
            <div class="w-full justify-between flex flex-col gap-2 sm:flex-row">
                <div class="sm:py-10 py-5 max-w-6xl grow space-y-2.5 sm:space-y-4">
                    <p>Let's get connected and plan on building your next dream WebSite.</p>
                    <!-- social links with text -->
                    <ul class="space-y-2.5 sm:space-y-4 ">
                        <li>
                            <SocialLink text="Email me at" textHighlight="shakilnwz@gmail.com" href="mailto:shakilnwz@gmail.com"
                                :svgd="iconList.email" ariaLebel="Email me at shakilnwz@gmail.com" />
                        </li>
                        <li>
                            <SocialLink text="Let's connect on" textHighlight="WhatsApp" href="https://wa.me/8801791907711"
                                :svgd="iconList.whatsapp" ariaLebel="Let's connect on whatsapp" />
                        </li>
                        <li>
                            <SocialLink text="Find me on" textHighlight="Discord"
                                href="https://discord.com/channels/@me/shakilnwz" :svgd="iconList.discord"
                                ariaLebel="find me on discord" />
                        </li>
                        <li>
                            <SocialLink text="Let's connect on" textHighlight="LinkedIn"
                                href="https://www.linkedin.com/in/shakilnwz/" :svgd="iconList.linkedin"
                                ariaLebel="connect on linkedin" />
                        </li>
                        <li>
                            <SocialLink text="View My Timeline on" textHighlight="GitHub" href="https://github.com/shakilnwz"
                                :svgd="iconList.github" ariaLebel="view github" />
                        </li>
                        <li>
                            <SocialLink text="Find Me On" textHighlight="X" href="https://x.com/shakilnwz"
                                :svgd="iconList.twitter" ariaLebel="find me on x" />
                        </li>
                    </ul>

                </div>
                <div class="bg-brand-y/20 grow p-8 shadow hover:bg-brand-y/15 transition-all">
                    <h3 class="text-2xl text-brand-y font-bold pb-4">Or Send a Message</h3>
                    <form @submit.prevent="submitForm">
                        <label>
                            Your Name
                            <input type='text' v-model="name" name="name" required>
                        </label>
                        <label>
                            Your Email
                            <input type='email' v-model="email" name="email" required>
                        </label>
                        <label>
                            Message
                            <textarea type='email' v-model="message" name="message" required></textarea>
                        </label>
                        <button
                            type="submit"
                            :disabled="isLoading"
                            class="cursor-pointer bg-brand-y hover:bg-surface text-surface hover:text-brand-y text-lg/4.5 uppercase justify-center font-bold border-brand-y border-1 w-fit flex flex-row flex-wrap items-center gap-x-2  px-6 py-3 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed" 
                        >
                            <svg v-if="isLoading" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <svg v-else class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                <path
                                    fill-rule="evenodd"
                                    :d="iconList.email"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span>{{ isLoading ? 'Sending...' : 'Send Message' }}</span>
                        </button>
                    </form>
                </div>
            </div>

            <!-- Toast notification -->
            <Teleport to="body">
                <Transition
                    enter-active-class="transition-all duration-300 ease-out"
                    enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:translate-x-4"
                    enter-to-class="opacity-100 translate-y-0 sm:translate-x-0"
                    leave-active-class="transition-all duration-200 ease-in"
                    leave-from-class="opacity-100 translate-y-0 sm:translate-x-0"
                    leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:translate-x-4"
                >
                    <div
                        v-if="toast.show"
                        class="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 border shadow-2xl backdrop-blur-md max-w-sm w-[calc(100vw-3rem)] sm:w-auto"
                        :class="toast.type === 'success' 
                            ? 'bg-surface/95 border-brand-y text-brand-x' 
                            : 'bg-surface/95 border-red-500 text-brand-x'"
                        role="alert"
                    >
                        <svg v-if="toast.type === 'success'" class="h-5 w-5 shrink-0 text-brand-y" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg v-else class="h-5 w-5 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        <p class="text-sm font-medium leading-snug">{{ toast.message }}</p>
                        <button
                            type="button"
                            @click="closeToast"
                            class="ml-auto text-brand-x/60 hover:text-brand-x cursor-pointer p-1 text-lg leading-none"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                    </div>
                </Transition>
            </Teleport>


            <!-- TODO: add contact detail -->
            <!-- TODO: add skype detail -->
            <!-- TODO: add linkedin detail -->
            <!-- TODO: add github detail -->
            <!-- TODO: add twitter detail -->
            <!-- TODO: add gmail detail -->
            <!-- TODO: add gmail detail -->
            <!-- TODO: add qr for easier access -->
        </Section>

</template>
<style scoped>
    @import 'tailwindcss/theme' theme(reference);
    @import '../assets/styles/theme.css' theme(reference);
    form{
        @apply space-y-5 w-full;
        & label{
            @apply block w-full;
            & input, textarea{
              @apply block w-full mt-1 border-b-2 border-brand-y/30 focus:outline-none focus:border-brand-y py-1 px-2 bg-surface/40 transition-all;  
            }
        }
    }
    #logo{
        height: 160px;
        width: 180px;
        & img{
            height: 100%;
        }
        & span{
            position: absolute;
            width: 42px;
        }
        & #logoA{
            height: 160px;
            background-color: red;
            top: 0;
            transform: skew(-30deg);
            transform-origin: bottom right;
    
        }
        & #logoB{
            height: 85px;
            width: 60px;
            background-color: blue;
            top: 0;
            left:0;
            transform: skew(56deg);
            transform-origin: top left;
        }
        & #logoC{
            height: 75px;
            width: 60px;
            background-color: green;
            bottom: 0;
            right:0;
            transform: skew(-40deg);
            transform-origin: top left;
        }
    }
    
    
    
</style>
