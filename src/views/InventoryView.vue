<script setup lang="ts">
import InventoryLeftSide from '@/components/InventoryLeftSide.vue';
import InventoryGrid from '@/components/grid/InventoryGrid.vue';
import InventoryBottom from '@/components/InventoryBottom.vue';
</script>

<template>
    <div class="container">
        <div class="inventory-main-block">
            <InventoryLeftSide />
            <InventoryGrid />
        </div>
        <div class="inventory-bottom-block">
            <InventoryBottom />
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1100px;
    min-width: 800px;
    width: 80%;
    aspect-ratio: 1.5;
}

.inventory-main-block {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 24px;
}

.inventory-bottom-block {
    margin-top: 24px;
    width: 100%;
}
</style>
