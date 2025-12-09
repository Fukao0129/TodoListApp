export const COLOR_VARIANTS = [
  "primary", // メインカラー
  "default", // テキストカラー
  "secondary", // 補助テキストカラー
  "success", // 成功
  "warning", // 警告
  "error", // エラー
  "white", // 白
] as const;

export type ColorVariant = (typeof COLOR_VARIANTS)[number];
