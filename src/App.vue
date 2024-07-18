<script setup lang="ts">
import InventoryView from '@/views/InventoryView.vue';
</script>

<template>
    <InventoryView />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    margin-top: 60px;
}

body {
    background: black;
}

:root {
    --c-background: black;
    --c-section-bg: #262626;
    --c-section-bg-transperent: rgba(38, 38, 38, 0.6);
    --c-section-border: #4d4d4d;

    --c-btn-red: #fa7272;
    --c-btn-white: #ffffff;
}
</style>
