import { defineUserConfig } from 'vuepress'

// npm i -D @vuepress/plugin-back-to-top@next
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

// npm i -D @vuepress/plugin-medium-zoom@next
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

// npm i -D @vuepress/plugin-theme-default@next
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '计算机',
  description: '这是我的第一个 VuePress 站点',
  base: '/comp/',

  plugins: [
    backToTopPlugin(),
    mediumZoomPlugin({}),
  ],

  theme: defaultTheme({
    logo: '/images/favicon.png',
    // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
    navbar: [
      // NavbarGroup
      {
        text: '产品',link: '/pd/',
      },
      {
        text: '数学与算法',link: '/math/',
      },
      {
        text: '选择语言',
        children: [
          { text: 'Swift', link: '/languages/swift/', },
          { text: 'SwiftUI', link: '/languages/swift_ui/', },
          { text: 'Rust', link: '/languages/rust/', },
          { text: 'Python', link: '/languages/python/', },
          { text: 'C', link: '/languages/c/', },
          { text: 'C++', link: '/languages/c++/', },
          { text: 'Go', link: '/languages/go/', },
          { text: 'Java', link: '/languages/java/', },
          { text: 'HTML', link: '/languages/html/', },
          { text: 'CSS', link: '/languages/css/', },
          { text: 'JavaScript', link: '/languages/js/', },
          { text: 'SQL', link: '/languages/sql/', },
        ],
      },
    ],

    // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar
    sidebar: {
      '/languages/swift/': [
        {
          text: '语法',
          collapsible: true,
          children: [
            '/languages/swift/swift-lang/README.md'
          ],
        },
      ],
      '/pd/': [
        {
          text: '产品',
          collapsible: true,
          children: [
            //'/pd/README.md',
            '/pd/axure.md',
          ],
        },
      ],
    },
  }),
})
