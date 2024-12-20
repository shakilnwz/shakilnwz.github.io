<script setup>
import Section from './Section.vue'
import Button from "./Button.vue"
</script>

<template>
    <Section class="grid sm:grid-cols-3 gap-2 sm:gap-0">
        <div class="sm:col-span-2">
            <h1 class="text-brand-y text-xl">
                Hello World! I'm
                <span class="text-transparent w-fit bg-gradient-to-r from-brand-y to-brand-x bg-clip-text text-5xl sm:text-6xl font-bold block">
                    Shakil Nawaz
                </span>
            </h1>
            <p class="text-xl font-bold">A web developer, Specialized in JavaScript and PHP</p>
        </div>

        <div class="sm:row-span-2 sm:justify-self-end justify-self-center self-center">
            <div class="bg-radial from-brand-x/90 to-brand-y/30 to-45% max-w-60 aspect-ratio-1 rounded-full shadow-[0_0_9px_rgba(0,0,0,0.5)]">
                <img class="w-full aspect-ratio-1" src="../assets/avatar.png" alt="avatar" loading='lazy' />
            </div>
        </div> 

        <div class="py-5 space-y-4 sm:col-span-2">
            <p>
                I love to explore newer technologies and build things upon that. Also love to build user centric websites that actually helps.
            </p>
            <p>
                I have skills with WordPress, Elementor, Breakdance Builder, TailwindCSS, Semantic HTML and CSS. Currently exploring Laravel.
            </p>

            <div class="flex flex-row gap-2 flex-wrap">
                <Button 
                    text="More About Me" 
                    href="/about" 
                    svgd="M12 3.514c0 1.94-1.79 3.514-4 3.514S4 5.454 4 3.514C4 1.574 5.79 0 8 0s4 1.573 4 3.514ZM0 13.122c0-2.912 2.85-5.271 6.368-5.271h3.264C13.15 7.85 16 10.21 16 13.122c0 .485-.475.878-1.06.878H1.06C.476 14 0 13.607 0 13.122Z"
                />
                <Button
                    secondary
                    text="Résumé" 
                    href="/resume" 
                    svgd="M0 1.75C0 .785.926 0 2.065 0h5.16v3.5c0 .484.462.875 1.033.875h4.13v3.938h-6.71c-1.14 0-2.065.784-2.065 1.75V14H2.065C.925 14 0 13.215 0 12.25V1.75ZM12.387 3.5H8.258V0l4.13 3.5ZM6.71 9.625H5.677c-.283 0-.516.197-.516.438v3.5c0 .24.233.437.516.437.284 0 .517-.197.517-.438v-.874h.516c.996 0 1.806-.687 1.806-1.532s-.81-1.531-1.806-1.531Zm0 2.188c.429 0 .774-.293.774-.657 0-.363-.345-.656-.774-.656h-.516v1.313h.516Zm4.129-2.188H9.806c-.284 0-.516.197-.516.438v3.5c0 .24.232.437.516.437h1.033c.854 0 1.548-.588 1.548-1.313v-1.75c0-.724-.694-1.312-1.548-1.312Zm0 3.5c.284 0 .516-.197.516-.438v-1.75c0-.24-.232-.437-.516-.437h-.516v2.625h.516Zm3.096-3.5c-.283 0-.516.197-.516.438v3.5c0 .24.233.437.516.437.284 0 .517-.197.517-.438V12.25h1.032c.284 0 .516-.197.516-.438 0-.24-.232-.437-.516-.437h-1.032V10.5h1.032c.284 0 .516-.197.516-.438 0-.24-.232-.437-.516-.437h-1.549Z"
                />
            </div>
        </div>
    </Section>

</template>
