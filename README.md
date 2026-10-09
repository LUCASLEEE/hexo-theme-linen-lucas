# hexo-theme-linen

一个干净、克制的 Hexo 主题，专注阅读体验与极简配置。

> 本仓库是 [LynanBreeze/hexo-theme-linen](https://github.com/LynanBreeze/hexo-theme-linen) 的整理版，
> 保留原作者的 MIT 许可与署名（见 [LICENSE](LICENSE)），并补充了仓库元信息与文档。
> 上游作者的文档站： [中文](https://lynanbreeze.github.io/hexo-theme-linen-doc-zh-CN/) ｜ [EN](https://lynanbreeze.github.io/hexo-theme-linen-doc/)

## 特性

- 极简排版，重点在正文阅读体验
- 响应式布局，移动端友好
- 支持归档、分类、标签、系列
- 内置目录、图片懒加载、图片点击放大（PhotoSwipe）
- 不依赖额外插件，构建快、体积小

## 安装

### 方式一：npm（推荐）

```bash
pnpm add hexo-theme-linen
# 或
npm install hexo-theme-linen
```

### 方式二：克隆到主题目录

```bash
git clone https://github.com/LUCASLEEE/hexo-theme-linen.git themes/linen
```

## 使用

1. 在站点 `_config.yml` 里指定主题：

```yaml
theme: linen
```

2. 主题自己的配置写在站点根目录的 `_config.linen.yml`（没有就新建），常用项：

```yaml
# 顶栏站点名（用文字，替代主题自带的品牌图）
logo:
  text: 我的博客

# 站点信息
info:
  site_desc: 记录想法、技术与生活
  github: https://github.com/你的用户名

# 顶部导航
navItems:
  - name: 归档
    path: /archives/
  - name: 关于
    path: /about/

# 订阅
feed:
  path: /feed.xml

# 首页顶部大图文章（按顺序取前 4 篇）
topArticles:
  - _posts/hello-world.md

# 图片点击放大
photoswipe: true
```

3. 本地预览：

```bash
hexo clean && hexo serve
```

## 文章可用的字段

| 字段 | 作用 |
| --- | --- |
| `cover` | 封面图，首页卡片与文章顶部横幅共用 |
| `excerpt` | 摘要，列表页显示 |
| `subTitle` | 标题后的小字，如年份或期数 |
| `series` | 系列名，同名的文章自动串成系列 |
| `tocType: flat` / `toc: false` | 展开二级目录 / 隐藏目录 |
| `photoswipe: false` | 关闭该篇的图片点击放大 |
| `hide: { recent: true, archive: true }` | 从首页或归档页隐藏 |

## 目录结构

```
.
├── layout/           # EJS 模板
├── scripts/          # Hexo 扩展（生成器、过滤器等）
├── source/linen-theme/  # 静态资源（CSS / JS / 字体 / 图标）
├── languages/        # 多语言文案
├── _config.yml       # 主题默认配置
└── index.js          # 主题入口
```

## 开发说明

主题依赖 Hexo 8 与 Node.js 18+。本地调试可直接把本仓库克隆到 Hexo 站点的 `themes/linen` 目录，然后：

```bash
hexo clean && hexo serve
```

## 许可

[MIT](LICENSE)。原始版权归 Lynan 所有。
