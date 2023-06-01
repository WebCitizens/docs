<h1 align="center">Frontend Notes</h1>
<p align="center"><b>Just recording...</b></p>

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

English · [简体中文](RAEDME.md)

</samp>
</strong>
</div>

## Quick Start
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/docs)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/docs)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/docs/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![docs](https://user-images.githubusercontent.com/4677417/186189283-0831b9ab-d6b9-485d-8955-3057e532ab31.png)


### Local Dev
All commands are run from the root of the project, from a terminal:
| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm i`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:3000`      |
| `pnpm run start`           | Build your production site to `./dist/`          |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

To deploy your site to production, check out our [Deploy an Astro Website](https://docs.astro.build/guides/deploy) guide.

[→ see the demo](www.me.vercel.app)

### Project Structure  :

```diff
┣ ── package.json
┣ ── pnpm-lock.yaml
┣ ── public
┃   ┣ ── default-og-image.png
┃   ┣ ── favicon.svg
┃   └── make-scrollable-code-focusable.js
┣ ── src
┃   ┣ ── components
┃   ┃   ┣ ── Footer
┃   ┃   ┃   ┣ ── AvatarList.astro
┃   ┃   ┃   └── Footer.astro
┃   ┃   ┣ ── HeadCommon.astro
┃   ┃   ┣ ── HeadSEO.astro
┃   ┃   ┣ ── Header
┃   ┃   ┃   ┣ ── AstroLogo.astro
┃   ┃   ┃   ┣ ── Header.astro
┃   ┃   ┃   ┣ ── LanguageSelect.css
┃   ┃   ┃   ┣ ── LanguageSelect.tsx
┃   ┃   ┃   ┣ ── Search.css
┃   ┃   ┃   ┣ ── Search.tsx
┃   ┃   ┃   ┣ ── SidebarToggle.tsx
┃   ┃   ┃   └── SkipToContent.astro
┃   ┃   ┣ ── LeftSidebar
┃   ┃   ┃   └── LeftSidebar.astro
┃   ┃   ┣ ── PageContent
┃   ┃   ┃   └── PageContent.astro
┃   ┃   └── RightSidebar
┃   ┃       ┣ ── MoreMenu.astro
┃   ┃       ┣ ── RightSidebar.astro
┃   ┃       ┣ ── TableOfContents.tsx
┃   ┃       ┣ ── ThemeToggleButton.css
┃   ┃       └── ThemeToggleButton.tsx
┃   ┣ ── consts.ts
┃   ┣ ── 📂 content
┃   ┃   ┣ ── 📜 config.ts
┃   ┃   └── 📂 docs
┃   ┃       ┣ ── 📂 en
┃   ┃       ┃   ┣ 📜 introduction.md
┃   ┃       ┃   ┣ 📜 page-2.md
┃   ┃       ┃   ┣ 📜 page-3.md
┃   ┃       ┃   └ 📜 page-4.md
+ ┃  ┃          ┣📂 zh
+ ┃  ┃           ┣ 📜 introduction.md
+ ┃  ┃           ┣ 📜 page-2.md
+ ┃  ┃           ┣ 📜 page-3.md
+ ┃  ┃           └ 📜 page-4.md
┃   ┣ ── env.d.ts
┃   ┣ ── languages.ts
┃   ┣ ── layouts
┃   ┃   └── MainLayout.astro
┃   ┣ ── pages
┃   ┃   ┣ ── [...slug].astro
┃   ┃   └── index.astro
┃   └── styles
┃       ┣ ── index.css
┃       └── theme.css
└── tsconfig.json
```

## Contributors

<table>
    <tbody>
        <tr>
            <td>
                <a target="_blank" href="https://github.com/keqing77"><img width="60px" src="https://avatars.githubusercontent.com/u/48318812?v=4"></a>
            </td>
        </tr>
    </tbody>
</table>

## TodoList

- ✅ **CI/CD with Netlify**
- ✅ **Full Markdown support**
- ✅ **Responsive mobile-friendly design**
- ✅ **Sidebar navigation**
- ✅ **Search (powered by Algolia)**
- ✅ **Multi-language i18n**
- ✅ **Automatic table of contents**
- ✅ **Automatic list of contributors**
- ✅ (and, best of all) **dark mode**

## Lisence

- [MIT](https://opensource.org/licenses/MIT)
