import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  '/Study/': [
    {
      text: "博客相关",
      icon: "note",
      link: "Blog/博客相关"
    },
    {
      text: "Git相关",
      icon: "note",
      collapsable: true,
      prefix: "Git/",
      link: "Git/",
      children: ["Git常用命令"],
    },
    {
      text: "Linux相关",
      icon: "note",
      collapsable: true,
      prefix: "Linux/",
      link: "Linux/",
      children: ["Linux常用命令"],
    },
    {
      text: "C++相关",
      icon: "note",
      collapsable: true,
      prefix: "CPP/",
      link: "CPP/",
      children: ["栈帧", "C++多线程", "cmake"],
    },
    {
      text: "随笔",
      icon: "note",
      collapsable: true,
      prefix: "Note/",
      link: "Note/",
      children: ['进程和线程', "Linux调试", "windbg相关"],
    }
  ],
  '/Life/': [
    {
      text: "每日一词",
      link: "每日一词",
      icon: "note"
    },
    {
      text: "新电脑",
      link: "新电脑",
      icon: "note"
    }
  ],
  '/Game/': [
    {
      text: "我的世界",
      link: "我的世界",
      icon: "note"
    },
  ],
  '/Work/': [
    {
      text: "工作",
      icon: "storage",
      prefix: "/Work/",
      collapsable: true,
      children: [
        
      ]
    }
  ],
  '/Boy/': [
    {
      text: "买炫迈的小男孩",
      icon: "storage",
      prefix: "/Boy/",
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
