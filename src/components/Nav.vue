<script setup>
defineProps({
    msg: String,
})
</script>

<template>
    <div>
        <img src="../assets/logo_dark.svg" alt="logo">
        {{ msg }}
    </div>
</template>
