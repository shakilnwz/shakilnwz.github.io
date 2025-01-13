<script setup>
import Section from '../components/atoms/Section.vue'
import SocialLink from '../components/atoms/SocialLink.vue';
import { inject, ref } from 'vue'
const iconList = inject('icons')

const name = ref('');
const email = ref('');
const message = ref('');

const submitToGoogleForm = async ()=>{
    const formId = "1FAIpQLSdOIQQL_gZwrQX9eIrKn22ynVThxyhxQU73g_aKYpd-gcZoPg"; // Replace with your Google Form ID
    const url = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
    //entry.252721265
    //entry.1305900489
    //entry.509312173
    const formData = new FormData();
    formData.append("entry.252721265", name.value); // Replace with your Name field's entry ID
    formData.append("entry.1305900489", email.value); // Replace with your Email field's entry ID
    formData.append("entry.509312173", message.value); // Replace with your Message field's entry ID

    try {
        await fetch(url, {
            method: "POST",
            body: formData,
            mode: "no-cors", // Required for Google Forms
        });
        alert("Message sent successfully!");
        name.value = ""
        email.value = "" 
        message.value = "" // Reset form
    } catch (error) {
        alert("There was an error sending your message. Please try again.");
    }
}

</script>
<template>
    <Section contained>
        <h2>Connect</h2>
        <div :class="{
            'sm:py-10 py-5 max-w-5xl space-y-2.5 sm:space-y-4': true,
        }">
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
        <div>
            <form @submit.prevent="submitToGoogleForm">
                <label>
                    Your Name
                    <input type='text' v-model="name" name="name">
                </label>
                <label>
                    Your Email
                    <input type='email' v-model="email" name="email">
                </label>
                <label>
                    Message
                    <textarea type='email' v-model="message" name="message"></textarea>
                </label>
                <button
                    class="bg-brand-y hover:bg-surface text-surface hover:text-brand-y justify-center font-bold rounded-xl border-brand-y border-2 w-fit flex flex-row flex-wrap items-center gap-x-2  px-5 py-1 transition-all duration-300" 
                    >
                    <svg  class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                        <path
                            fill-rule="evenodd"
                            :d="iconList.email"
                            clip-rule="evenodd"
                        />
                    </svg>
                    Send Message
                </button>
            </form>
            
        </div>
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
        @apply space-y-4;
        & label{
            @apply block;
            & input, textarea{
              @apply block  mt-1 border-b-2 border-brand-y/30 focus:outline-none focus:border-brand-y py-1 px-2 bg-surface/40;  
            }
        }
    }
</style>
