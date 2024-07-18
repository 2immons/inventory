<script setup lang="ts">
import SkeletonString from '@/components/skeletons/SkeletonString.vue';
</script>

<template>
    <div class="bottom-wrapper">
        <div class="close-btn-wrapper">
            <button class="close-btn">
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
        <div class="content">
            <SkeletonString width="100%" height="30px" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bottom-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--c-section-bg);
    width: 100%;
    height: 72px;
    border-radius: 12px;
    border: 1px solid var(--c-section-border);
}

.content {
    height: 100%;
    width: 100%;
    padding: 18px 10% 18px 3%;
}

.close-btn-wrapper {
    z-index: 5;
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
}

.close-btn {
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 0;
    background: transparent;
    border: none;
}
</style>
