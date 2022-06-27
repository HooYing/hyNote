import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  '/CPP/': [
    {
      text: "C++学习笔记",
      icon: "storage",
      prefix: "/CPP/",
      collapsable: true,
      children: [
        '',
        '栈帧',
        'C++多线程'
      ]
    }
  ],
  '/Note/': [
    {
      text: "买炫迈的小男孩",
      icon: "storage",
      prefix: "/Note/",
      collapsable: true,
      children: [
        'Spring、SpringMVC、Mybatis心得与笔记'
      ]
    }
  ],
  // '/posts/': [
  //   {
  //     text: "文章",
  //     icon: "note",
  //     //prefix: "/posts/",
  //     children: [
  //       {
  //         text: "文章 1-4",
  //         icon: "note",
  //         collapsable: true,
  //         prefix: "article/",
  //         children: ["article1", "article2", "article3", "article4"],
  //       },
  //       {
  //         text: "文章 5-12",
  //         icon: "note",
  //         children: [
  //           {
  //             text: "文章 5-8",
  //             icon: "note",
  //             collapsable: true,
  //             prefix: "article/",
  //             children: ["article5", "article6", "article7", "article8"],
  //           },
  //           {
  //             text: "文章 9-12",
  //             icon: "note",
  //             children: ["article9", "article10", "article11", "article12"],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ]
});
