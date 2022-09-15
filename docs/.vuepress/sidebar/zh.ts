import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/zh/": [
    "",
    "members",
    {
      text: "相关工作",
      icon: "edit",
      prefix: "/zh/posts/",
      children: [
        {
          text: "研究成果",
          icon: "edit",
          prefix: "article/",
          children: [
            { text: "Automated Classification of Papillary Renal", icon: "edit", link: "Automated Classification of Papillary Renal Cell Carcinoma and Chromophobe Renal Cell Carcinoma Based on a Small Computed Tomography Imaging Dataset Using Deep Learning" },
          ],
        },
      ],
    },
  ],
});
  
