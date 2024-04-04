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
      { text: 'Vue',
        items: [
          { text: 'Vue基础', link: '/vue/vue基础.md' },
          { text: 'Vue-router', link: '/vue/vue-router.md' },
          { text: 'axios', link: '/vue/axios.md' },
          { text: 'pinia', link: '/vue/pinia.md' },
          { text: 'vuex', link: '/vue/vuex.md' },
        ]
      },
      { text: 'JavaScript',
        items: [
          { text: 'JavaScript基础', link: '/JavaScript/JavaScript基础.md' },
        ]
      },

      { text: 'Python',
        items: [
          { text: 'Python3基础', link: '/python/Python3基础.md' },
        ]
      },
      { text: '数据库',
        items: [
          { text: 'MySQL', link: '/datebase/MySQL.md' },
        ]
      },
      { text: '持续集成',
        items: [
          { text: 'docker', link: '/ci/docker.md' },
          { text: 'Jenkins', link: '/ci/Jenkins.md' },
        ]
      },
      { text: 'AI', link: '/AI/ai.md' }
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
      { icon: 'github', link: 'https://github.com/yysfyu' },
      {
        icon: {
          svg: '<svg t="1711851870738" class="icon" viewBox="0 0 1212 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4311" width="200" height="200"><path d="M600.737684 204.341895L512.458105 134.736842l-92.213894 72.730947-4.796632 3.853474 97.010526 77.338948 97.333895-77.338948-9.054316-6.979368z m334.551579 269.958737l-423.073684 333.608421-422.804211-333.41979L26.947368 524.665263l485.268211 382.625684 485.537684-382.841263-62.464-50.149052z m-423.073684 27.055157l-230.238316-181.517473-62.437052 50.149052 292.648421 230.777264 292.944842-230.992843-62.437053-50.149052-230.480842 181.733052z" fill="#006CFF" p-id="4312"></path></svg>'
        },
        link: 'https://juejin.cn/user/493019579297533'
      }
    ],
    footer: {
      copyright: 'MIT Licensed | Copyright © 2024-present codeyu',
    }
  }
})
