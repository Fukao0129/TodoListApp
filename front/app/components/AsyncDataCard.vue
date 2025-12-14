<script setup lang="ts">
defineProps<{
  pending: boolean;
  dataLength: number;
  noDataText?: string;
}>();
</script>

<template>
  <BaseCard class="async-data-card">
    <BaseText v-if="pending" size="small" color="secondary" align="center">{{
      LOADING_TEXT
    }}</BaseText>
    <slot v-else />
    <BaseText
      v-if="dataLength === 0 && !pending"
      size="small"
      color="secondary"
      align="center"
    >
      {{ noDataText ?? NO_DATA_TEXT }}
    </BaseText>
  </BaseCard>
</template>

<style scoped>
.async-data-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
</style>
