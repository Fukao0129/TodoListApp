<script setup lang="ts">
const { logout } = useSanctumAuth();
// const userStore = useUserStore();
// const userData = computed(() => userStore.user);
const { user } = useUserStore();
</script>

<template>
  <div class="header-user__wrapper">
    <BaseIcon icon="circle-user" color="success" />
    <BaseText>{{ user?.name }}</BaseText>
    <BaseText size="small" color="secondary">{{ user?.email }}</BaseText>
  </div>
  <div
    class="dropdown__item header__menu"
    tabindex="0"
    @click="logout()"
    @keydown.enter="logout()"
  >
    <BaseIcon icon="arrow-right-from-bracket" color="lightgray" />
    <BaseText>設定</BaseText>
  </div>
  <div
    class="dropdown__item header__menu"
    tabindex="0"
    @click="logout()"
    @keydown.enter="logout()"
  >
    <BaseIcon icon="arrow-right-from-bracket" color="lightgray" />
    <BaseText>ログアウト</BaseText>
  </div>
</template>

<style scoped>
.header-user__wrapper {
  padding: 1rem;
}
.header__menu {
  border-top: 1px solid var(--border-color);
}
</style>
