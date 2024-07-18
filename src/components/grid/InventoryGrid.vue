<script setup lang="ts">
import InventoryItem from '@/components/grid/GridItem.vue';
import InventoryItemDescription from '@/components/grid/ItemDescription.vue';
import { itemsStore } from '@/pinia/inventoryItems';
import { ref } from 'vue';
import Draggable from 'vuedraggable';
import { Item } from '@/types/item';

const store = itemsStore();

const isDescriptionVisible = ref(false);
const clickedItem = ref();

const deleteItemFromStore = (item: Item, quantityForDelete: number) => {
    store.deleteItem(item, quantityForDelete);
};

const showDescription = (item: Item) => {
    isDescriptionVisible.value = true;
    clickedItem.value = item;
};

const closeDescription = () => {
    setTimeout(() => {
        isDescriptionVisible.value = false;
    }, 1);
};
</script>

<template>
    <div class="grid-wrapper">
        <Transition>
            <InventoryItemDescription
                :item="clickedItem"
                @deleted-item="deleteItemFromStore"
                @close="closeDescription"
                v-show="isDescriptionVisible"
            />
        </Transition>
        <Draggable
            v-model="store.items"
            group="store.items"
            item-key="id"
            class="draggable-grid"
        >
            <template #item="{ element }">
                <InventoryItem :item="element" @clicked="showDescription" />
            </template>
        </Draggable>
    </div>
</template>

<style lang="scss" scoped>
.grid-wrapper {
    overflow: hidden;
    position: relative;
    border-radius: 12px;
    border: 1px solid var(--c-section-border);
    background: var(--c-section-bg);
}

.draggable-grid {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    width: 100%;
    height: 100%;
}

.v-enter-active,
.v-leave-active {
    transition: right 0.5s ease-out;
    right: 0;
}

.v-enter-from,
.v-leave-to {
    right: -50%;
}
</style>
