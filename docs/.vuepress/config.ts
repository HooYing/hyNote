import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "灰灰烟影",
  description: "船到桥头自然沉",

  base: "/",

  theme,
  plugins: [
    searchPlugin({
      // 你的选项
    }),
  ],
});
