export const SITE = {
  title: "JadeChamber",
  // title:  `{$lang === 'en' ? "JadeChamber" : "前端群玉阁"}`,
  description:
    "Frontend JadeChamber is a powerful website for frontend developers to find and share useful resources.",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export const KNOWN_LANGUAGES = {
  English: "en",
  简体中文: "zh",
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/JadeChamber/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
export const COMMUNITY_INVITE_URL = `https://discord.gg/9uVvRHXDDs`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
  en: [
    { text: "", header: true },
    { text: "Basics", header: true },
    { text: "Introduction", link: "en/introduction" },
  ],
  zh: [
    { text: "", header: true },
    { text: "基础", header: true },
    { text: "介绍", link: "zh/introduction" },
  ],
};
