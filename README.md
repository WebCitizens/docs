<h1 align="center">前端笔记</h1>
<p align="center"><b>简单记录学习的一点一滴</b></p>

<p align="center">

  <a href="https://github.com/JadeChamber/docs/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/misitebao/yakia"/>
  </a>
  <a href="https://github.com/JadeChamber/docs/blob/main/LICENSE">
    <img alt="#contributors-" src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square"/>
  </a>
  <img height="20" src="https://img.shields.io/badge/react-%2335495e.svg?style=for-the-badge&logo=react&logoColor=%234FC08D" alt="VueJs" />
  <img height="20" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img height="20" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img height="20" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img height="20" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  <br/>

</p>

<div align="center">
<strong>
<samp>

[English](README_en.md) · 简体中文

</samp>
</strong>
</div>

## 快速开始

### 本地开发

```bash
# 安装依赖
pnpm i 

# 启动服务
pnpm run dev

# 打包构建
pnpm run build
```

[→ see the demo](www.me.vercel.app)

### 项目结构:

```
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── default-og-image.png
│   ├── favicon.ico
│   └── make-scrollable-code-focusable.js
├── src
│   ├── components
│   │   ├── Footer
│   │   │   ├── AvatarList.astro
│   │   │   └── Footer.astro
│   │   ├── HeadCommon.astro
│   │   ├── HeadSEO.astro
│   │   ├── Header
│   │   │   ├── AstroLogo.astro
│   │   │   ├── Header.astro
│   │   │   ├── LanguageSelect.css
│   │   │   ├── LanguageSelect.tsx
│   │   │   ├── Search.css
│   │   │   ├── Search.tsx
│   │   │   ├── SidebarToggle.tsx
│   │   │   └── SkipToContent.astro
│   │   ├── LeftSidebar
│   │   │   └── LeftSidebar.astro
│   │   ├── PageContent
│   │   │   └── PageContent.astro
│   │   └── RightSidebar
│   │       ├── MoreMenu.astro
│   │       ├── RightSidebar.astro
│   │       ├── TableOfContents.tsx
│   │       ├── ThemeToggleButton.css
│   │       └── ThemeToggleButton.tsx
│   ├── config.ts
│   ├── env.d.ts
│   ├── languages.ts
│   ├── layouts
│   │   └── MainLayout.astro
│   ├── pages
│   │   ├── en
│   │   │   └── introduction.md
│   │   ├── index.astro
│   │   └── zh
│   │       └── introduction.md
│   └── styles
│       ├── index.css
│       └── theme.css
└── tsconfig.json
```



## 贡献者

<table>
    <tbody>
        <tr>
            <td>
                <a target="_blank" href="https://github.com/keqing77"><img width="60px" src="https://avatars.githubusercontent.com/u/48318812?v=4"></a>
            </td>
        </tr>
    </tbody>
</table>

## 协议

- [MIT](https://opensource.org/licenses/MIT)

## 代做清单

- [x] i18n
- [x] Dark Mode
- [ ] CI/CD with Netlify 
- [ ] Algolia Search 
- [ ] Github Actions Bot


