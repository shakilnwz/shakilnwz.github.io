<script setup>
import { inject } from 'vue';
import Button from '../../components/atoms/Button.vue';
import Section from '../../components/atoms/Section.vue';

const iconList = inject('icons');
</script>
<template>
    <Section contained>
        <h2>About page</h2>
        <Button
            secondary
            text="My Résumé"
            href="/resume"
            :svgd="iconList.pdf"
        />
    </Section>
</template>
