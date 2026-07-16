# 环境设计个人网站 - 陈萌

一个具有暗色系科技感的环境设计学生个人作品集网站。

## 技术栈

- **React 18** + **TypeScript**
- **Vite** 构建工具
- **Tailwind CSS** 暗色主题
- **Framer Motion** 动画库
- **React Icons** 图标库

## 功能模块

1. **Hero 首页** - 全屏视频背景、大标题、导航栏、联系按钮
2. **个人经历** - 头像区域、个人信息、项目数据、教育背景
3. **精选项目** - 大卡片展示作品、悬停效果、分类标签
4. **个人优势** - 设计工具进度条、能力卡片、实践经历
5. **底部联系** - 整屏收尾、联系方式、求职意向

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

开发服务器运行在 http://localhost:3000

## 部署

### GitHub Pages 部署

1. 创建 GitHub 仓库并推送代码
2. 运行 `npm run build` 构建项目
3. 将 `dist` 目录部署到 GitHub Pages

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动构建和部署

## 项目结构

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   └── skills.ts
├── styles/
│   └── globals.css
├── App.tsx
└── main.tsx
```

## 设计规范

- **版心宽度**: 1700px
- **配色**: 深色背景 (#0a0a0a)、强调色 (#3b82f6)
- **字体**: 系统字体
- **响应式**: PC 端优化

---

© 2026 陈萌. All rights reserved.