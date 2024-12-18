<script setup>
import Button from "./Button.vue"
</script>

<template>
    <main class='max-w-5xl mx-auto px-5  sm:px-8'>
        <section class="grid sm:grid-cols-3  gap-2 sm:gap-0">

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
                <div class="bg-radial from-brand-x/90 to-brand-y/30 to-45% max-w-60 aspect-ratio-1 rounded-full drop-shadow-[0_0_9px_black/50]">
                    <img class="w-full aspect-ratio-1" src="../assets/avatar.png" alt="avatar" />
                </div>
            </div> 

            <div class="py-5 space-y-4 sm:col-span-2">
                <p>
                    I love to explore newer technologies and build things upon that. Also love to build user centric websites that actually helps.
                </p>
                <p>
                    I have skills with WordPress, Elementor, Breakdance Builder, TailwindCSS, Semantic HTML and CSS. Currently exploring Laravel.
                </p>
                <Button text="More About Me" href="/about" svgd="M12 3.514c0 1.94-1.79 3.514-4 3.514S4 5.454 4 3.514C4 1.574 5.79 0 8 0s4 1.573 4 3.514ZM0 13.122c0-2.912 2.85-5.271 6.368-5.271h3.264C13.15 7.85 16 10.21 16 13.122c0 .485-.475.878-1.06.878H1.06C.476 14 0 13.607 0 13.122Z"/>
            </div>


        </section>
    </main>
</template>




