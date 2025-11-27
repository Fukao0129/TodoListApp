<script setup lang="ts">
const { logout } = useSanctumAuth();
const userStore = useUserStore();
const userData = computed(() => userStore.user);

const isShowDropdownMenu = ref(false); // ドロップダウンメニュー表示フラグ
</script>

<template>
  <header>
    <NuxtLink to="/" class="logo-link">
      <img src="/assets/img/logo.svg" alt="TODO"
    /></NuxtLink>

    <DropdownMenu
      v-model:is-show="isShowDropdownMenu"
      @closeDropdown="isShowDropdownMenu = false"
    >
      <template #trigger>
        <BaseIcon
          icon="circle-user"
          color="white"
          is-clickable
          class="header-user__icon"
          @click="isShowDropdownMenu = !isShowDropdownMenu"
          @keydown.enter="isShowDropdownMenu = !isShowDropdownMenu"
        />
      </template>

      <template #contents>
        <div class="header-user__wrapper">
          <BaseIcon icon="circle-user" color="success" />
          <BaseText>{{ userData?.name }}</BaseText>
          <BaseText size="small" color="secondary">{{
            userData?.email
          }}</BaseText>
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
    </DropdownMenu>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--primary-color);
  color: white;
  padding: 1rem;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  z-index: 1;
  .logo-link {
    display: block;
    width: 7rem;
    height: auto;
    transition: all 200ms 0s ease;
    &:hover {
      opacity: 0.5;
    }
  }
  .header-user__icon {
    font-size: 1.5rem;
  }
  .header-user__wrapper {
    padding: 1rem;
  }
  .header__menu {
    border-top: 1px solid var(--border-color);
  }
}
</style>
