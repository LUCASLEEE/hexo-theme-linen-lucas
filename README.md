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
- **内置明暗主题**，默认跟随系统，顶栏可一键切换
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

## 明暗主题

主题默认**跟随系统的浅色/深色设置**，顶栏最右侧有一个切换按钮，点一下在
「跟随系统 → 浅色 → 深色」之间循环，读者的选择会记在浏览器本地。

在 `_config.linen.yml` 里可以调整：

```yaml
themeMode:
  enable: true      # 设为 false 可完全关闭该功能
  default: auto     # auto 跟随系统 / light 始终浅色 / dark 始终深色
```

实现说明：

| 文件 | 作用 |
| --- | --- |
| `source/linen-theme/css/theme-dark.css` | 深色配色（顶栏、页脚、卡片、归档页、目录、代码块、表格、引用、相关文章、图片全屏查看） |
| `source/linen-theme/css/theme-toggle.css` | 切换按钮样式（浅色/深色都要显示，所以单独一个文件） |
| `source/linen-theme/js/theme-boot.js` | 页面渲染前就定好主题，避免刷新时闪白 |
| `source/linen-theme/js/theme-toggle.js` | 按钮交互与系统主题变化的响应 |

深色样式是**独立文件、不改动原有样式**，升级主题时不会互相覆盖。
要改深色下的配色，直接改 `theme-dark.css` 里的色值即可。

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
├── source/linen-theme/  # 静态资源（CSS / JS / 字体 / 图标，含明暗主题）
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
