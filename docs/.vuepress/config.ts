import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "灰灰烟影",
  description: "船到桥头自然沉",

  base: "/",

  theme,
  
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
