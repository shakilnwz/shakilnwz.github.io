<script setup>
import Section from '../components/atoms/Section.vue'
import SocialLink from '../components/atoms/SocialLink.vue';
import { inject } from 'vue'
const iconList = inject('icons')
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
