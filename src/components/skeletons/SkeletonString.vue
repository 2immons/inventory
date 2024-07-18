<script setup lang="ts">
const props = defineProps({
    width: String,
    height: String,
});
</script>

<template>
    <div class="skeleton-container">
        <div
            class="skeleton"
            :style="{ width: props.width, height: props.height }"
        ></div>
    </div>
</template>

<style lang="scss" scoped>
.skeleton-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.skeleton {
    height: 100%;
    background: linear-gradient(90deg, #3c3c3c 25%, #444444 50%, #333333 75%);
    background-size: 400% 100%;
    animation: loading 3s infinite;
    border-radius: 8px;
}

@keyframes loading {
    0% {
        background-position: 100% 0;
    }
    100% {
        background-position: -100% 0;
    }
}
</style>
