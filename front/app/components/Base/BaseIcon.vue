<script setup lang="ts">
import type { ColorVariant } from "@/constants/colors";

withDefaults(
  defineProps<{
    icon: string;
    color?: ColorVariant;
    isClickable?: boolean;
  }>(),
  {
    color: "default",
    isClickable: false,
  }
);
</script>

<template>
  <font-awesome-icon
    :icon
    :color
    class="font-awesome-icon"
    :class="[`icon--${color}`, isClickable ? 'icon--clickable' : '']"
    :tabindex="isClickable ? 0 : -1"
  />
</template>

<style scoped>
.icon--clickable {
  cursor: pointer;
  transition: all 200ms 0s ease;
  &:hover {
    opacity: 0.5;
  }
  &:focus {
    outline: 2px solid var(--focus-color);
  }
}

/** 種類によって色を変える */
.icon--primary {
  color: var(--primary-color);
}
.icon--default {
  color: var(--text-color);
}
.icon--secondary {
  color: var(--text-secondary-color);
}
.icon--success {
  color: var(--success-color);
}
.icon--warning {
  color: var(--warning-color);
}
.icon--error {
  color: var(--error-color);
}
.icon--white {
  color: white;
}
</style>
