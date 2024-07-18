<script setup lang="ts">
import { Item } from '@/types/item';
import { ref, PropType } from 'vue';
import SkeletonString from '@/components/skeletons/SkeletonString.vue';

const emits = defineEmits(['deleted-item', 'close']);

const quantityForDelete = ref();

const closeDescription = () => {
    emits('close');
};

const deleteItem = () => {
    emits('deleted-item', props.item, quantityForDelete.value);
};

const props = defineProps({
    item: {
        type: Object as PropType<Item>,
        required: true,
    },
});

const isDeleteFormVisible = ref(false);
</script>

<template>
    <div class="item-description-bg" v-if="item">
        <div class="description-wrapper">
            <div class="close-btn-wrapper">
                <button class="close-btn" @click="closeDescription">
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
                <div class="photo-wrapper" v-html="item.svg"></div>
                <hr />
                <div class="text-wrapper">
                    <SkeletonString width="100%" height="30px" />
                    <SkeletonString width="100%" height="10px" />
                    <SkeletonString width="100%" height="10px" />
                    <SkeletonString width="100%" height="10px" />
                    <SkeletonString width="80%" height="10px" />
                    <SkeletonString width="30%" height="10px" />
                </div>
                <div class="button-wrapper">
                    <button
                        class="btn btn--delete"
                        @click="isDeleteFormVisible = true"
                    >
                        Удалить предмет
                    </button>
                </div>
            </div>
            <form
                class="delete-form"
                v-if="isDeleteFormVisible"
                @submit.prevent="deleteItem"
            >
                <div class="content content--form">
                    <input
                        type="number"
                        class="form-input"
                        placeholder="Введите количество..."
                        v-model="quantityForDelete"
                    />
                    <div class="form-buttons">
                        <button
                            type="button"
                            class="btn btn--cancel"
                            @click="isDeleteFormVisible = false"
                        >
                            Отмена
                        </button>
                        <button type="submit" class="btn btn--confirm">
                            Подтвердить
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item-description-bg {
    position: absolute;
    right: 0;
    height: 100%;
    width: 50%;
    z-index: 2;
    background: transparent;
    border-left: 1px solid var(--c-section-border);
    background: var(--c-section-bg-transperent);
    backdrop-filter: blur(10px);
}

.description-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
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

.content {
    position: relative;
    height: calc(100% - 30px);
    margin-bottom: 0;
    padding: 15px;
}

hr {
    border: 1px solid var(--c-section-border);
}

.photo-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    max-height: 200px;
}

.text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 10px 0 10px;
}

.delete-form {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: var(--c-section-bg);
    border-top: 1px solid var(--c-section-border);

    .content--form {
        display: flex;
        height: 133px;
        flex-direction: column;
        justify-content: space-around;
    }

    .form-input {
        background: var(--c-section-bg);
        border: 1px solid var(--c-section-border);
        border-radius: 4px;
        color: inherit;
        padding: 12px 12px 12px 12px;
        max-height: 40px;
    }

    .form-buttons {
        display: grid;
        grid-template-columns: 3fr 4fr;
        gap: 5%;

        .btn--confirm {
            background: var(--c-btn-red);
            color: white;
            padding: 10px 8px 10px 8px;
        }

        .btn--cancel {
            background: var(--c-btn-white);
            color: black;
            padding: 10px 8px 10px 8px;
        }
    }
}

.button-wrapper {
    border-top: 1px solid var(--c-section-border);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 75px;
    width: calc(100% - 30px);
    bottom: 0;
}

.btn {
    cursor: pointer;
    border-radius: 8px;
    padding: 8px 28px 8px 28px;
    border: none;
    font-size: 14px;
}

.btn--delete {
    background: var(--c-btn-red);
    color: white;
}
</style>
