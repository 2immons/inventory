<script setup lang="ts">
import { Item } from '@/types/item';
import { PropType } from 'vue';

const emits = defineEmits(['clicked']);

const showDescription = () => {
    emits('clicked', props.item);
};

const props = defineProps({
    item: {
        type: Object as PropType<Item>,
        required: true,
    },
});
</script>

<template>
    <div class="grid-item-wrapper">
        <button
            v-if="item.svg"
            class="grid-item"
            @click="showDescription"
            v-html="item.svg"
        ></button>
        <div v-if="item.quantity" class="quantity-wrapper">
            <p>{{ item.quantity }}</p>
        </div>
    </div>
</template>

<style lang="scss">
.grid-item-wrapper {
    aspect-ratio: 1.1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--c-section-bg);
    border: 1px solid var(--c-section-border);
}

.grid-item {
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

svg {
    height: 60%;
    width: 60%;
}

.quantity-wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15%;
    border-top-left-radius: 12px;
    border: 1px solid var(--c-section-border);

    p {
        width: 100%;
        margin: 0;
        font-size: 12px;
    }
}
</style>
