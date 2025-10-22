// https://zenn.dev/one_dock/articles/16f1ddb1e49b2c
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
// 完成してきたら使用するアイコンを洗い出して個別インポートするようにする
// import {
//   faCirclePlus,
//   faBars,
//   faPenToSquare,
// } from "@fortawesome/free-solid-svg-icons";

export default defineNuxtPlugin((nuxtApp) => {
  config.autoAddCss = false;
  library.add(fas);
  // library.add(faCirclePlus, faBars, faPenToSquare);
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
