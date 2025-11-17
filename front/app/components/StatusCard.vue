<script setup lang="ts">
import type { Status, UpdateStatusRequest } from "@/types/status";

export type StatusCardProps = {
  status: Status;
};
defineProps<StatusCardProps>();

const emit = defineEmits<{
  onCheck: [boolean, number];
  onDelete: [number];
  onUpdate: [number, UpdateStatusRequest];
}>();

const isShowDropdownMenu = ref(false);
const isEditMode = ref(false);

/** テキストエリアにフォーカスする */
const focusOnInput = () => {
  const inputElement = document.querySelector(
    ".status-edit__input"
  ) as HTMLInputElement | null;
  if (inputElement) {
    inputElement.focus();
  }
};

/** 編集モードにしたらドロップダウンメニューを閉じる */
watch(isEditMode, (newVal) => {
  if (newVal) {
    nextTick(() => {
      focusOnInput();
    });
    isShowDropdownMenu.value = false;
  }
});
</script>

<template>
  <BaseCard class="status-card">
    <p v-if="!isEditMode">{{ status.name }}</p>
    <div v-else class="status-edit__wrapper">
      <input v-model="status.name" type="text" class="status-edit__input" />
      <BaseButton
        :text="CANCEL_BUTTON_TEXT"
        type="secondary"
        @click="isEditMode = false"
      />
      <BaseButton
        :text="UPDATE_BUTTON_TEXT"
        @click="
          emit('onUpdate', status.id, {
            name: status.name,
            order: status.order,
          })
        "
      />
    </div>
    <DropdownMenu
      v-model:is-show="isShowDropdownMenu"
      @closeDropdown="isShowDropdownMenu = false"
    >
      <template #trigger>
        <BaseIcon
          v-if="status.is_updatable"
          icon="ellipsis"
          is-clickable
          @click="isShowDropdownMenu = !isShowDropdownMenu"
          @keydown.enter="isShowDropdownMenu = !isShowDropdownMenu"
        />
      </template>

      <template #contents>
        <div
          class="dropdown__item"
          tabindex="0"
          @click="isEditMode = !isEditMode"
          @keydown.enter="isEditMode = !isEditMode"
        >
          <BaseIcon icon="pen" />
          <span>{{ EDIT_BUTTON_TEXT }}</span>
        </div>
        <div
          class="dropdown__item"
          tabindex="0"
          @click="emit('onDelete', status.id)"
          @keydown.enter="emit('onDelete', status.id)"
        >
          <BaseIcon icon="trash" color="error" />
          <span>{{ DELETE_BUTTON_TEXT }}</span>
        </div>
      </template>
    </DropdownMenu>
  </BaseCard>
</template>

<style scoped>
.status-card {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.status-edit__wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
