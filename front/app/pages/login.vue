<script setup lang="ts">
useHead({ title: "ログイン" });

const { login } = useSanctumAuth();
const { showSnackbar } = useSnackbar();

// ログインフォーム
const loginForm = ref({
  email: "test@example.com",
  password: "password",
});

/** ログイン */
const onLogin = () => {
  login({
    email: loginForm.value.email,
    password: loginForm.value.password,
  }).catch(() => {
    showSnackbar(
      "ログインに失敗しました。メールアドレスとパスワードを確認してください。",
      "error"
    );
  });
};
</script>

<template>
  <NuxtLayout name="login">
    <form @submit.prevent="onLogin">
      <FormItem :has-border="false">
        <BaseInput
          v-model:text="loginForm.email"
          label="メールアドレス"
          placeholder="メールアドレス"
        />
      </FormItem>
      <FormItem :has-border="false">
        <BaseInput
          v-model:text="loginForm.password"
          label="パスワード"
          placeholder="パスワード"
        />
      </FormItem>

      <NuxtLink to="/forgot-password" class="password-reset__link"
        >パスワードを忘れた方はこちら</NuxtLink
      >

      <BaseButton text="ログイン" />
    </form>
  </NuxtLayout>
</template>

<style scoped>
.password-reset__link {
  font-size: 0.8rem;
  color: var(--primary-color);
  margin: 1rem 0 1.5rem;
  display: block;
}
</style>
