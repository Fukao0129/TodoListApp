<script setup lang="ts">
defineProps<{
  label?: string;
}>();

/** ON/OFF切り替え */
const isOn = defineModel<boolean>("isOn");
const onToggle = () => {
  isOn.value = !isOn.value;
};
</script>

<template>
  <div class="toggle__wrapper">
    <BaseText v-if="label" size="small" color="secondary" tag="label">{{
      label
    }}</BaseText>
    <div
      class="toggle__button"
      :class="{ 'is-on': isOn }"
      tabindex="0"
      @click="onToggle"
      @keydown.enter="onToggle"
    >
      <div class="toggle__button--circle"></div>
    </div>
  </div>
</template>

<style scoped>
.toggle__wrapper {
  display: flex;
  align-items: center;
  gap: 0.3rem;

  .toggle__button {
    width: 2.2rem;
    height: 1.2rem;
    background-color: var(--border-color);
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.2s;
    .toggle__button--circle {
      width: 1rem;
      height: 1rem;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      left: 2px;
      transition: left 0.2s;
    }
  }

  .toggle__button.is-on {
    background-color: var(--primary-color);
  }
  .toggle__button.is-on .toggle__button--circle {
    left: calc(100% - 1rem - 2px);
  }
}
</style>
