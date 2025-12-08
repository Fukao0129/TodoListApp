<script setup lang="ts" />

<template>
  <div class="login-page__wrapper">
    <BaseCard class="login-page__content">
      <img
        src="/assets/img/logo-color.svg"
        alt="TODO"
        class="login-page__logo"
      />
      <slot />
    </BaseCard>
  </div>
</template>

<style scoped>
.login-page__wrapper {
  height: 100vh;
  background: var(--background-color);
  display: flex;
  justify-content: center;
  .login-page__content {
    max-width: 30rem;
    margin: auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    text-align: center;
    .login-page__logo {
      max-width: 10rem;
      width: 100%;
      height: auto;
    }
  }
}
</style>
