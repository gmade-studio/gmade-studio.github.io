import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
  "/": [
    "",
    "members",
    {
      text: "Research",
      icon: "edit",
      prefix: "/posts/",
      children: [
        {
          text: "papers",
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
  
