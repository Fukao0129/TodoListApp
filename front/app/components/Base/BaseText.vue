<script setup lang="ts">
const PRESET_SIZES = ["small", "default", "large"] as const;

export type BaseTextProps = {
  tag?: "p" | "span" | "label";
  size?: (typeof PRESET_SIZES)[number] | string;
  color?:
    | "primary"
    | "default"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "white";
  align?: "left" | "center" | "right" | "justify";
  bold?: boolean;
};

const props = withDefaults(defineProps<BaseTextProps>(), {
  tag: "p",
  size: "default",
  color: "default",
  align: "left",
  bold: false,
});

const classes = computed(() => {
  // sizeが自由指定の場合はclassを付与しない
  const isPresetSize = PRESET_SIZES.includes(
    props.size as (typeof PRESET_SIZES)[number]
  );

  return {
    [`text--${props.color}`]: true,
    [`text--align-${props.align}`]: true,
    [`text--size-${props.size}`]: isPresetSize,
    "text--bold": props.bold,
  };
});

/**
 * フォントサイズはインラインスタイルでも細かく自由指定できるようにする
 * (例外的なケースでのみ使う)
 * 単位付きで指定すればそのまま、数字のみの場合はremとして扱う
 */
const styles = computed(() => {
  if (
    !props.size ||
    PRESET_SIZES.includes(props.size as (typeof PRESET_SIZES)[number])
  ) {
    return {};
  }
  const fontSize = !isNaN(Number(props.size)) ? `${props.size}rem` : props.size;

  return {
    fontSize,
  };
});
</script>

<template>
  <component :is="tag" :class="classes" :style="styles">
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
