import { defineStore } from "pinia";
import type { User } from "@/types/user";

export const useUserStore = defineStore("user", () => {
  const user = ref<User>({} as User);

  return { user };
});
