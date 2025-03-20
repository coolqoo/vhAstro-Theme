export default {
  Title: '崔晃晃',
  // 访问的域名
  Site: 'https://cuihuanghuang.com',
  Subtitle: '让赚钱变得更简单',
  Description: '崔晃晃博客 专注国外网赚',
  Author: '崔晃晃',
  Motto: '选择大于努力',
  Avatar: 'https://cdn.usd.fan/user_files/88/avatar/48882808_1654931162.jpeg',
  // 导航栏 (新窗口打开 newWindow: true)
  Navs: [
    { text: '朋友', link: '/links', icon: '/assets/images/svg/Navs/links.svg' },
    { text: '圈子', link: '/friends', icon: '/assets/images/svg/Navs/friends.svg' },
    { text: '动态', link: '/talking', icon: '/assets/images/svg/Navs/talking.svg' },
    // { text: '昔日', link: '/archives', icon: '/assets/images/svg/Navs/archives.svg' },
    { text: '留言', link: '/message', icon: '/assets/images/svg/Navs/message.svg' },
    { text: '关于', link: '/about', icon: '/assets/images/svg/Navs/about.svg' },
    { text: '讨论', link: 'https://usd.fan/', target: true, icon: '/assets/images/svg/Navs/link.svg' },
  ],
  // 侧边栏个人网站
  WebSites: [
    { text: 'usd.fan', link: 'https://usd.fan', icon: '/assets/images/svg/WebSites/hot.svg' },
  ],
  // Cover 使用绝对路径
  Cover: '/assets/images/banner/072c12ec85d2d3b5.webp',
  CreateTime: '2016-11-15',
  // DNS预解析地址
  DNSOptimization: [
    'https://i0.wp.com',
    'https://pagead2.googlesyndication.com',
    'https://registry.npmmirror.com',
    'https://npm.elemecdn.com'
  ],
  // 博客音乐组件解析接口
  vhMusicApi: 'https://meting-dd.2333332.xyz/api',
  // 评论组件 Twikoo
  Twikoo: { envId: '' },
  // Han Analytics 统计（https://github.com/uxiaohan/HanAnalytics）
  HanAnalytics: { enable: true, server: 'https://analytics.vvhan.com', siteId: 'Hello-HanHexoBlog' },
  // Google 广告
  GoogleAds: {
    ad_Client: 'ca-pub-xxxxxx',
    // 侧边栏广告(不填不开启)
    asideAD_Slot: ``,
    // 文章页广告(不填不开启)
    articleAD_Slot: ``
  }
}