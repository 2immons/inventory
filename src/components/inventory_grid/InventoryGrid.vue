<script setup lang="ts">
import InventoryItem from '@/components/inventory_grid/GridItem.vue'
import InventoryItemDescription from '@/components/inventory_grid/ItemDescription.vue'

</script>

<template>
<div class="grid-wrapper">
  <div v-for="n in 25" :key="n">
    <InventoryItem />
  </div>
</div>
</template>

<style scoped>
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background: var(--c-section-bg);
  border: 1px solid var(--c-section-border);
  width: 100%;
  border-radius: 12px;
  margin-left: 24px;
}

</style>