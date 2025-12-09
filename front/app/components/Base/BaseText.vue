<script setup lang="ts">
import type { ColorVariant } from "@/constants/colors";

const props = withDefaults(
  defineProps<{
    tag?: "p" | "span" | "label";
    size?: "small" | "default" | "large";
    color?: ColorVariant;
    align?: "left" | "center" | "right" | "justify";
    bold?: boolean;
  }>(),
  {
    tag: "p",
    size: "default",
    color: "default",
    align: "left",
    bold: false,
  }
);

const classes = computed(() => [
  `text--${props.color}`,
  `text--align-${props.align}`,
  `text--size-${props.size}`,
  { "text--bold": props.bold },
]);
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<style scoped>
/* 色 */
.text--primary {
  color: var(--primary-color);
}
.text--default {
  color: var(--text-color);
}
.text--secondary {
  color: var(--text-secondary-color);
}
.text--success {
  color: var(--success-color);
}
.text--warning {
  color: var(--warning-color);
}
.text--error {
  color: var(--error-color);
}
.text--white {
  color: #ffffff;
}

/* 配置 */
.text--align-left {
  text-align: left;
}
.text--align-center {
  text-align: center;
}
.text--align-right {
  text-align: right;
}
.text--align-justify {
  text-align: justify;
}

/* 太さ */
.text--bold {
  font-weight: 700;
}

/* サイズ */
.text--size-small {
  font-size: 0.8rem;
}
.text--size-default {
  font-size: 1rem;
}
.text--size-large {
  font-size: 1.2rem;
}
</style>
