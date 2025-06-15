import { defineConfig } from 'vitepress';
import { pagefindPlugin } from 'vitepress-plugin-pagefind';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/logo.ico' }]],
  title: '手搓浪潮WIKI网',
  description: '浪潮WIKI网，内容不断更新中',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/README' },
      { text: 'update', link: '/UPDATE' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        text: '服务器介绍',
        items: [{ text: '服务器介绍', link: '/README.md' }],
      },
      {
        text: '插件介绍',
        items: [
          { text: '插件列表', link: '/plugins/README.md' },
          { text: '传送系统', link: '/plugins/1.md' },
          { text: '自动整理', link: '/plugins/2.md' },
          { text: '兑换码', link: '/plugins/3.md' },
          { text: '发射器破坏方块', link: '/plugins/4.md' },
          { text: '钱包', link: '/plugins/7.md' },
          { text: '突破下界高度', link: '/plugins/8.md' },
          { text: '侧边栏信息', link: '/plugins/10.md' },
          { text: '无敌时间', link: '/plugins/13.md' },
          { text: '签到系统', link: '/plugins/15.md' },
          { text: '假人系统', link: '/plugins/17.md' },
          { text: '通过精灵球捕捉生物', link: '/plugins/poke.md' },
          { text: '强化宝石', link: '/plugins/qhbs.md' },
          { text: '强化卷轴', link: '/plugins/qhjz.md' },
          { text: '可投掷的烈焰弹', link: '/plugins/lyd.md' },
          {
            text: '生电功能插件',
            link: 'https://coralfans-dev.github.io/CoralFans-doc/#/MainDoc',
          },
          { text: '灵魂出窍', link: '/plugins/fc.md' },
          { text: '奥里给系列', link: '/plugins/alg.md' },
          { text: '领地系统', link: '/plugins/pland.md' },
        ],
      },
    ],
    footer: {
      message: '此服务器与 Mojang Studio、网易、Microsoft 没有从属关系。',
      copyright: 'Copyright © 2023-2024 Inspur server All Rights Reserved.',
    },
    socialLinks: [
      {
        icon: {
          svg: '<img src="/tubiao.svg" alt="SVG Image" width="21" height="21">',
        },
        link: 'https://qm.qq.com/q/zTsUtxh876',
      },
    ],
  },
});
