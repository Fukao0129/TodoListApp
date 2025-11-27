import type { User } from "@/types/user";
export default defineNuxtRouteMiddleware(() => {
  const { user, isAuthenticated } = useSanctumAuth();
  const userStore = useUserStore();
  console.log("ログイン状態は" + isAuthenticated.value);
  userStore.user = user.value as User;
});
