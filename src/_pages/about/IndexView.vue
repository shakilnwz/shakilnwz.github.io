<script setup>
import { inject } from 'vue';
import Button from '../../components/atoms/Button.vue';
import Section from '../../components/atoms/Section.vue';

const iconList = inject('icons');
</script>
<template>
    <Section contained class="min-h-[46vh]">
        <div class="space-y-6">
            <h2>About page</h2>
            <p class="max-w-2xl">Thank you for visiting. While my About page is still under construction, feel free to check out my resume for an overview of my experience — or send me your thoughts.</p>

            <div class="flex flex-col sm:flex-row gap-4">
                <Button
                    
                    text="My Résumé"
                    href="/resume"
                    :svgd="iconList.pdf"
                />
                <Button
                    secondary
                    text="Send Me a Message"
                    href="/contact"
                    :svgd="iconList.email"
                />
            </div>
        </div>
    </Section>
</template>
