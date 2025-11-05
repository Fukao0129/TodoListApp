<script setup lang="ts">
import type { Snackbar } from "@/types/snackbar";

const snackbar = useState<Snackbar>("snackbar");
</script>

<template>
  <Transition name="snackbar-slide">
    <div
      v-if="snackbar.isShow"
      class="snackbar"
      :class="[`snackbar--${snackbar.type}`]"
    >
      <BaseIcon
        :icon="
          snackbar.type === 'success' ? 'circle-check' : 'triangle-exclamation'
        "
        color="white"
      />
      {{ snackbar.message }}
    </div>
  </Transition>
</template>

<style scoped>
/* アニメーション設定 */
@keyframes slideInUp {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.snackbar {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  padding: 1rem;
  color: white;
}

.snackbar-slide-enter-active {
  animation: slideInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.snackbar-slide-leave-active {
  animation: slideInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) reverse forwards;
}

/** 種類によって背景色を変える */
.snackbar--success {
  background: var(--text-color);
}
.snackbar--error {
  background: var(--error-color);
}
</style>
