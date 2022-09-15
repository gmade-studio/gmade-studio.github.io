# gmadestudio-vuepress

gmadestudio-vuepress base on vuepress-theme-hope

### install

1. 安装 node.js（win包或linux命令行），其次按以下方法安装 Pnpm：
   
   ```
   corepack enable
   corepack prepare pnpm@7.11.0 --activate
   ```

2.  安装vuepress-theme-hope主题并初始化项目模板到docs文件夹
   
   ```
   npm create vuepress-theme-hope@next docs
   
   ```

3. - `pnpm docs:dev` 启动开发服务器
   - `pnpm docs:build` 构建项目并输出到/docs/.vuepress/dist; 该目录可用于gitee pages的直接部署
   - `pnpm docs:clean-dev` 清除缓存并启动开发服务器
