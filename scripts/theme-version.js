"use strict";

const fs = require("fs");
const path = require("path");

/**
 * 主题的静态资源会带上 ?v=<version> 做缓存刷新。
 * 若站点配置里没有显式写 version，就自动使用 package.json 里的版本号，
 * 这样升级主题后资源会自动失效，不需要手动维护版本号。
 */
hexo.extend.filter.register("before_generate", function () {
  const themeConfig = hexo.theme && hexo.theme.config;
  if (!themeConfig || themeConfig.version) return;

  try {
    const pkgPath = path.join(hexo.theme_dir, "package.json");
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
    if (pkg && pkg.version) themeConfig.version = pkg.version;
  } catch (error) {
    // 读不到就保持原样，模板里会退化成不带版本号
  }
});
