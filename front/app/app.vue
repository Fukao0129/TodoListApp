<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const APP_NAME = runtimeConfig.public.appName;
useHead({
  titleTemplate: (titleChunk?: string): string => {
    const title = titleChunk ? `${titleChunk} | ${APP_NAME}` : APP_NAME;
    return title;
  },
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
