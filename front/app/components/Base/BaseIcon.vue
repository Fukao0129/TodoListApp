<script setup lang="ts">
export type Props = {
  icon: string;
  color?:
    | "error"
    | "warning"
    | "info"
    | "success"
    | "default"
    | "white"
    | "lightgray";
  isClickable?: boolean;
};

withDefaults(defineProps<Props>(), {
  color: "default",
  isClickable: false,
});
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
.icon--error {
  color: var(--error-color);
}
.icon--warning {
  color: var(--warning-color);
}
.icon--info {
  color: var(--info-color);
}
.icon--success {
  color: var(--success-color);
}
.icon--default {
  color: var(--text-color);
}
.icon--white {
  color: white;
}
.icon--lightgray {
  color: var(--text-secondary);
}
</style>
