<script setup lang="ts">
withDefaults(
  defineProps<{
    dataLength?: number;
    hasDataLength?: boolean;
    title: string;
    breadcrumb?: { label: string; href?: string }[];
  }>(),
  {
    dataLength: 0,
    hasDataLength: true,
  }
);
</script>

<template>
  <BreadCrumb v-if="breadcrumb" :breadcrumb />

  <div class="page-header">
    <h1 class="page-header__h1">
      {{ title }}
      <BaseText v-if="hasDataLength" size="small" color="secondary" tag="span">
        ({{ dataLength }}件)
      </BaseText>
    </h1>
    <slot name="tools" />
  </div>
</template>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .page-header__h1 {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }
}
</style>
