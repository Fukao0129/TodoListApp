<script setup lang="ts">
import type { BaseIconProps } from "@/components/Base/BaseIcon.vue";

export type DropdownMenuItemProps = {
  icon?: string;
  iconColor?: BaseIconProps["color"];
  label: string;
  event: (e?: Event) => void;
};
defineProps<DropdownMenuItemProps>();
</script>

<template>
  <div
    class="dropdown-menu__item"
    tabindex="0"
    @click="event"
    @keydown.enter="event"
  >
    <BaseIcon v-if="icon" :icon="icon" :color="iconColor || 'secondary'" />
    <BaseText>{{ label }}</BaseText>
  </div>
</template>

<style scoped>
.dropdown-menu__item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 200ms 0s ease;
  &:hover {
    background: var(--hover-color);
  }
}
</style>
