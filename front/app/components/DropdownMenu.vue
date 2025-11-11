<script setup lang="ts">
const isShow = defineModel<boolean>("isShow");

const emit = defineEmits<{
  closeDropdown: [];
}>();

const wrapper = ref<HTMLElement | null>(null);

/* ドロップダウンメニューの外側がクリックされたら非表示にする */
const onClickOutside = (event: MouseEvent) => {
  if (!wrapper.value?.contains(event.target as Node)) emit("closeDropdown");
};

onMounted(() => {
  document.addEventListener("click", onClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", onClickOutside);
});
</script>

<template>
  <div class="dropdown__wrapper" ref="wrapper">
    <slot name="trigger" />
    <div v-if="isShow" class="dropdown">
      <slot name="contents" />
    </div>
  </div>
</template>

<style scoped>
.dropdown__wrapper {
  position: relative;
}
.dropdown {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: calc(100% + 0.1rem);
  right: calc(100% + 0.1rem);
  background: white;
  width: max-content;
  z-index: 1;
}
</style>

<style>
.dropdown__item {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 200ms 0s ease;
  &:hover {
    background: var(--hover-color);
  }
}
</style>
