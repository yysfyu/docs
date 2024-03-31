import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "一介散修",
  head: [["link", { rel: "icon", href: "/logo.svg" }]], //浏览器地址栏的左边图标
  description: "一介散修的文档库",
  base: "/docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg', // logo
    outlineTitle: '文章目录', // 侧边栏标题
    outline: [2,6], // 侧边栏目录层级

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    nav: [
      { text: '主页', link: '/' },
      { text: 'Vue', link: '/markdown-examples' },
      { text: 'Python', link: '/markdown-examples' },
      { text: 'AI', link: '/markdown-examples' }
    ],
    //自定义侧边栏
    // sidebar: {
    //   "/docs/vue": set_sidebar("/docs/vue") ,
    //   "/docs/python": set_sidebar("/docs/python"),
    //   "/docs/AI": set_sidebar("/docs/AI")
    // },
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yysfyu' }
    ],
    footer: {
      copyright: 'MIT Licensed | Copyright © 2024-present codeyu',
    }
  }
})
