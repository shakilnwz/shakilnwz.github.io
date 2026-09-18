<script setup>
import { inject } from 'vue';
import Button from '../../components/atoms/Button.vue';
import Section from '../../components/atoms/Section.vue';
import resumeContent from '../../assets/resumeContent.json';
import bioContent from '../../assets/biodataContent.json';

const iconList = inject('icons');
</script>
<template>
    <Section contained class="min-h-[46vh]">
        <div class="space-y-6">
            <div class="flex items-center gap-2 text-xs font-mono text-brand-y border-b border-brand-y/30 pb-2">
                <span>// SECTOR_02 :: SYSTEM_PROFILE</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-brand-y uppercase tracking-tight">
                About
            </h2>

            <div class="max-w-2xl space-y-4">
                <p class="text-brand-x/90 leading-relaxed">
                    {{ bioContent.bio }}
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                        <p class="font-mono text-xs text-brand-y font-bold mb-1">Background</p>
                        <p class="text-brand-x/80">
                            BSc in Physics from Satkhira Govt. College (2022), followed by 5 years in QA &amp; inspection at KM International GmbH before moving into web development full-time in 2023.
                        </p>
                    </div>
                    <div>
                        <p class="font-mono text-xs text-brand-y font-bold mb-1">What I build</p>
                        <p class="text-brand-x/80">
                            Responsive websites, e-commerce themes, WordPress sites with custom PHP, and Vue-based frontends. I care about performance, clean code, and users actually being able to use what I ship.
                        </p>
                    </div>
                </div>

                <div class="flex flex-wrap gap-1.5">
                    <span
                        v-for="(skill, i) in resumeContent.skills"
                        :key="i"
                        class="px-2.5 py-0.5 bg-brand-y/10 border border-brand-y/30 font-mono text-xs text-brand-x/90"
                    >
                        {{ skill }}
                    </span>
                </div>
            </div>

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
