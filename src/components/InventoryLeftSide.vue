<script setup lang="ts">
import SkeletonString from '@/components/skeletons/SkeletonString.vue';
</script>

<template>
    <div class="left-side-wrapper">
        <div class="content">
            <div class="main-photo-wrapper">
                <img src="../assets/main-photo.png" alt="" />
            </div>
            <div class="information-wrapper">
                <SkeletonString width="100%" height="30px" />
                <SkeletonString width="80%" height="10px" />
                <SkeletonString width="100%" height="10px" />
                <SkeletonString width="85%" height="10px" />
                <SkeletonString width="80%" height="10px" />
                <SkeletonString width="65%" height="10px" />
                <SkeletonString width="35%" height="10px" />
            </div>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.left-side-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;

    height: 100%;
    border-radius: 12px;
    background: var(--c-section-bg);
    border: 1px solid var(--c-section-border);
}

.content {
    padding: 0 15px 0 15px;
    height: 100%;
}

.main-photo-wrapper {
    margin: 15px 0 10px 0;

    img {
        border-radius: 20px;
        width: 100%;
        object-fit: contain;
    }
}

.information-wrapper {
    padding: 0 10px 0 10px;
    display: flex;
    flex-direction: column;
    margin: 20px 0 10px 0;
    gap: 16px;
}
</style>
