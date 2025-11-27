import { defineStore } from "pinia";
import type { User } from "@/types/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {} as User,
  }),
});
