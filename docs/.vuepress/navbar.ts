import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "主页", icon: "home", link: "/" },
  {
    text: "学习",
    icon: "storage",
    prefix: "/Study/",
    children: [
      {
        text: "Git相关",
        link: "Git",
        icon: "note"
      },
      {
        text: "Linux相关",
        link: "Linux",
        icon: "note"
      },
      {
        text: "C++相关",
        link: "CPP",
        icon: "note"
      },
      {
        text: "随笔",
        link: "Note",
        icon: "note"
      }
    ]
  },
  {
    text: "生活", icon: "storage", link: "/Life/每日一词"
  },
  {
    text: "游戏", icon: "storage", link: "/Game/我的世界"
  },
  {
    text: "工作", icon: "storage", link: "/Work/"
  },
  {
    text: "买炫迈的小男孩", icon: "creative", link: "/Boy/"
  },
  // {
  //   text: "随笔",
  //   icon: "note",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "文章 1-4",
  //       icon: "edit",
  //       prefix: "article/",
  //       children: [
  //         { text: "文章 1", icon: "edit", link: "article1" },
  //         { text: "文章 2", icon: "edit", link: "article2" },
  //         "article3",
  //         "article4",
  //       ],
  //     },
  //     {
  //       text: "文章 5-12",
  //       icon: "edit",
  //       children: [
  //         {
  //           text: "文章 5",
  //           icon: "edit",
  //           link: "article/article5",
  //         },
  //         {
  //           text: "文章 6",
  //           icon: "edit",
  //           link: "article/article6",
  //         },
  //         "article/article7",
  //         "article/article8",
  //       ],
  //     },
  //     { text: "文章 9", icon: "edit", link: "article9" },
  //     { text: "文章 10", icon: "edit", link: "article10" },
  //     "article11",
  //     "article12",
  //   ],
  // },
]);
