<script setup lang="ts">
import type { Snackbar } from "@/types/snackbar";

useHead({
  titleTemplate: (titleChunk?: string) =>
    titleChunk ? `${titleChunk} | ${APP_NAME}` : APP_NAME,
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
    <NuxtPage />
    <Snackbar />
  </div>
</template>
