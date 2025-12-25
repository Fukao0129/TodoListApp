<script setup lang="ts">
withDefaults(
  defineProps<{
    hasSidebar?: boolean;
  }>(),
  {
    hasSidebar: true,
  }
);
</script>

<template>
  <TheHeader />

  <div class="flex min-h-screen">
    <TheSidebar v-if="hasSidebar" class="hidden md:block" />
    <main
      class="w-full mt-header-height bg-slate-100 p-8 flex flex-col gap-4"
      :class="{ 'md:ml-sidebar-width': hasSidebar }"
    >
      <slot />
    </main>
  </div>
</template>
