import {
    defineUserConfig
} from 'vuepress'

// npm i -D @vuepress/plugin-back-to-top@next
import {
    backToTopPlugin
} from '@vuepress/plugin-back-to-top'

// npm i -D @vuepress/plugin-medium-zoom@next
import {
    mediumZoomPlugin
} from '@vuepress/plugin-medium-zoom'

import {
    defaultTheme
} from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '计算机',
    description: '这是我的第一个 VuePress 站点',
    base: '/comp/',
    port: '8089',

    plugins: [
        backToTopPlugin(),
        mediumZoomPlugin({}),
    ],

    theme: defaultTheme({
        logo: '/images/favicon.png',
        // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
        navbar: navbar(),
        // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar
        sidebar: sidebar(),
    }),
})

function navbar() {
    return [
        // NavbarGroup
        {
            text: '产品', link: '/pd/',
        },
        {
            text: '智能技术',
            children: [
                {
                    text: 'AI', link: '/ai/',
                },
                {
                    text: '前沿技术资讯', link: '/tec_notes/',
                },
                {
                    text: '网络', link: '/netsafe/',
                },
            ],
        },
        {
            text: '数学与算法', link: '/math/',
        },
        {
            text: '选择语言',
            children: [
                {
                    text: 'Rust', children: [
                        {
                            text: 'The Rust Program Language', link: '/languages/rust/rust-lang/'
                        },
                    ],
                },
                {
                    text: 'React', children: [
                        {
                            text: 'The React Program Language', link: '/languages/react/react-lang/'
                        },
                    ],
                },
                // {
                //     text: 'Swift', link: '/languages/swift/',
                // },
                // {
                //     text: 'SwiftUI', link: '/languages/swift_ui/',
                // },
                // {
                //     text: 'Python', link: '/languages/python/',
                // },
                // {
                //     text: 'C', link: '/languages/c/',
                // },
                // {
                //     text: 'C++', link: '/languages/c++/',
                // },
                // {
                //     text: 'Go', link: '/languages/go/',
                // },
                // {
                //     text: 'Java', link: '/languages/java/',
                // },
                // {
                //     text: 'HTML', link: '/languages/html/',
                // },
                // {
                //     text: 'CSS', link: '/languages/css/',
                // },
                // {
                //     text: 'JavaScript', link: '/languages/js/',
                // },
                // {
                //     text: 'SQL', link: '/languages/sql/',
                // },
                // {
                //     text: 'Vue', link: '/languages/vue/',
                // },
            ],
        },
    ];
}

function sidebar() {
    return {
        '/languages/swift/': [
            {
                text: '语法',
                collapsible: true,
                children: [
                    '/languages/swift/swift-lang/README.md'
                ],
            },
        ],
        '/languages/rust/rust-lang/': [
            {
                text: 'Rust语法',
                collapsible: true,
                children: [
                    '/languages/rust/rust-lang/README.md'
                ],
            },
        ],
        '/languages/react/react-lang/': [
            {
                text: 'React语法',
                collapsible: true,
                children: [
                    '/languages/react/react-lang/README.md'
                ],
            },
        ],
        '/pd/': [
            {
                text: '产品',
                collapsible: true,
                children: [
                    '/pd/README.md',
                    '/pd/b_design.md',
                    '/pd/prd_c.md',
                    '/pd/prd_b.md',
                    '/pd/axure.md',
                    '/pd/mockitt.md',
                    '/pd/task.md',
                    '/pd/figma.md',
                ],
            },
        ],
        '/math/': [
            {
                text: '集合与函数',
                collapsible: true,
                children: [
                    '/math/sets_and_functions/README.md',
                ],
            }
        ],
        '/ai/': [
            {
                text: 'AI',
                collapsible: true,
                children: [
                    '/ai/README.md',
                ],
            }
        ],
        '/netsafe/': [
            {
                text: '网络',
                collapsible: true,
                children: [
                    '/netsafe/README.md',
                ],
            }
        ],
    };
}