# 模板网站仓库说明（Handlebars + 本地数据注入）

本仓库用于维护可托管到 GitHub 的静态模板网站。模板使用 Handlebars 占位符，并支持在本地通过 `test-data.json` 注入数据进行渲染与预览，最终产物输出到 `dist` 目录，供后端拉取后注入用户数据并部署。

## 技术栈与目录
- 技术栈：`Vite`、`Handlebars`、`Tailwind（CDN）`
- 关键文件：
  - 模板入口：`index.html`
  - 测试数据：`test-data.json`
  - 注入脚本：`inject-data.js`
  - 开发配置：`vite.config.ts`
  - 静态产物：`dist/`

## 快速开始
- 安装依赖：
  - `npm install`
- 开发预览（使用本地测试数据渲染模板、已启用热更新）：
  - `npm run dev`
  - 打开浏览器访问终端提示的地址（默认 `http://localhost:3000/` 或备选端口）
- 生成静态产物并本地预览：
  - `npm run inject`（渲染 `index.html` 并输出到 `dist/index.html`）
  - `npm run preview`（静态服务器预览 `dist`）

## 使用测试数据查看渲染效果
- 修改根目录 `test-data.json` 的内容（例如：`user.name`、`user.projects`、`user.skills`、`config.primaryColor` 等），保存后：
  - 开发模式会自动刷新并重新渲染页面（已监听 `test-data.json`）
  - 若未刷新，重启开发服务器：`Ctrl+C` 后再次 `npm run dev`
  - 静态模式需重新注入：`npm run inject` 然后刷新预览

## 数据结构约定（示例）
```json
{
  "user": {
    "name": "测试用户",
    "title": "全栈开发工程师",
    "bio": "专注于 AI 驱动的产品开发与前端工程化。",
    "avatarUrl": "https://picsum.photos/400/400",
    "socials": {
      "github": "https://github.com/test-user",
      "linkedin": "https://linkedin.com/in/test-user",
      "twitter": "https://twitter.com/test-user",
      "email": "test@example.com"
    },
    "projects": [
      {
        "title": "智能作品集生成器",
        "description": "支持模板注入与静态化输出的全栈项目。",
        "imageUrl": "https://picsum.photos/600/400?random=101",
        "tags": ["React", "Golang"],
        "role": "前端负责人",
        "timeline": "2024-01 至 2024-04",
        "client": "内部工具",
        "longDescription": "提供基于 Handlebars 的可配置个人作品集模板……",
        "features": ["占位符渲染", "JSON 注入", "主题变量化", "静态资源复制"],
        "gallery": ["https://picsum.photos/800/500?random=111"]
      }
    ],
    "skills": [
      { "name": "React", "proficiency": 90, "icon": "⚛" }
    ]
  },
  "config": {
    "primaryColor": "#165DFF",
    "fontFamily": "Inter"
  }
}
```

## 模板占位符与渲染说明
- 基础字段：`{{user.name}}`、`{{user.title}}`、`{{user.bio}}`
- 循环数据：
  - 项目列表：`{{#each user.projects}} ... {{/each}}`
  - 技能列表：`{{#each user.skills}} ... {{/each}}`
- 条件判断：
  - 头像：`{{#if user.avatarUrl}}<img src="{{user.avatarUrl}}">{{/if}}`
  - 社交信息：`{{#if user.socials.email}} ... {{/if}}`
- 主题注入：
  - `:root { --primary-color: {{config.primaryColor}}; --font-family: {{config.fontFamily}}; }`
  - `.text-primary/.bg-primary/.border-primary` 颜色与字体随配置变化

## 项目详情弹窗
- 模板为每个项目卡片内置一个隐藏的详情块，点击卡片后通过原生 JS 打开弹窗展示：
  - 字段包括：`role`、`client`、`timeline`、`longDescription`、`features[]`、`gallery[]`
  - 关闭方式：点击右上角关闭按钮、点击遮罩或按下 `Escape`

## 脚本命令
- `npm run dev`：开发模式（以 `test-data.json` 渲染模板，支持热更新）
- `npm run inject`：将模板与数据编译到 `dist/index.html`，并复制静态资源到 `dist/assets/`
- `npm run preview`：启动静态服务器本地预览 `dist`
- `npm run build`：Vite 构建（如需构建其他静态资源时可用）

## 最终产物
- 路径：`dist/`
  - `dist/index.html`：已注入数据的静态 HTML
  - `dist/assets/`：静态资源（如存在则复制）

## 后端集成建议
- 将此仓库作为模板仓库托管到 GitHub，后端拉取后：
  - 写入用户数据到 `test-data.json`
  - 执行 `npm run inject`
  - 将 `dist/` 目录作为部署产物上传到静态托管平台

## 常见问题
- 修改 `test-data.json` 没有更新？
  - 开发模式已监听此文件，正常会自动刷新；若未刷新，重启 `npm run dev`
- 静态预览没有变化？
  - 重新执行 `npm run inject`，然后刷新预览页面

## 环境要求
- `Node.js`（建议 `>= 18`）
