<script setup>
const setup = defineProps(
    {
        "contained" : Boolean
    }
)
</script>
<template>
    <div class="border-dashed border-b border-brand-y/50">
        <section 
            :class="[
                {
                'mx-auto sm:py-10 md:py-16 py-6' : true,
                'max-w-6xl px-5 sm:px-8' : setup.contained,
                }, 
                $attrs.class,
            ]">
            <slot></slot>
        </section>
    </div>
</template>
