<script setup>
import { inject } from 'vue'
import SocialLink from '../../components/atoms/SocialLink.vue'
const currentYear = new Date().getFullYear()

const iconList = inject('icons')
const route = inject('route')
</script>
<template>
    <footer :class="{'print:hidden': route.path === '/resume'}">
        <div class="mx-auto px-5 sm:px-8 sm:py-10 py-5 max-w-5xl space-y-2.5 sm:space-y-4">
            <h2 class="py-2">Connect</h2>
            <p>Let's get connected and plan on building your next dream WebSite.</p>
            <!-- social links with text -->
            <ul class="space-y-2.5 sm:space-y-4 ">
                <li>
                    <SocialLink
                        text="Email me at"
                        textHighlight="shakilnwz@gmail.com"
                        href="mailto:shakilnwz@gmail.com"
                        :svgd="iconList.email"
                        ariaLebel="Email me at shakilnwz@gmail.com"
                    />
                </li>
                <li>
                    <SocialLink
                        text="Let's connect on"
                        textHighlight="WhatsApp"
                        href="https://wa.me/8801791907711"
                        :svgd="iconList.whatsapp"
                        ariaLebel="Let's connect on whatsapp"
                    />
                </li>
                <li>
                    <SocialLink
                        text="Find me on"
                        textHighlight="Discord"
                        href="https://discord.com/channels/@me/shakilnwz"
                        :svgd="iconList.discord"
                        ariaLebel="find me on discord"
                    />
                </li>
            </ul>

            <!-- social icons -->
            <div class="flex flex-row gap-2.5 py-2.5">
                <SocialLink
                    icon
                    href="https://www.linkedin.com/in/shakilnwz/"
                    :svgd="iconList.linkedin"
                    ariaLebel="connect on linkedin"
                />
                <SocialLink
                    icon
                    href="https://github.com/shakilnwz"
                    :svgd="iconList.github"
                    ariaLebel="view my github"
                />
                <SocialLink
                    icon
                    href="https://x.com/shakilnwz"
                    :svgd="iconList.twitter"
                    ariaLebel="find me on x"
                />
            </div>
        </div>
        <div class="relative">
            <p class="text-base relative z-1 mx-auto px-5 sm:px-8 sm:py-10 py-5 max-w-5xl">&copy; {{ currentYear }} snz</p>
            <div class="z-0 w-full flex flex-row absolute left-0 top-0 h-full" aria-hidden="true">
                <span class="w-3/5 bg-base-x" aria-hidden="true"></span>
                <span class="w-[30%] bg-brand-y" aria-hidden="true"></span>
                <span class="w-[10%] bg-brand-x" aria-hidden="true"></span>
            </div>
        </div>
    </footer>
</template>
