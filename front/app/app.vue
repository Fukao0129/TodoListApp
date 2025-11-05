<script setup lang="ts">
import type { Snackbar } from "@/types/snackbar";

useHead({
  titleTemplate: (titleChunk?: string) => {
    const title = titleChunk ? `${titleChunk} | ${APP_NAME}` : APP_NAME;
    return title;
  },
});

useState<Snackbar>("snackbar", () => ({
  isShow: false,
  message: "",
  type: "success",
}));
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Snackbar />
  </div>
</template>
