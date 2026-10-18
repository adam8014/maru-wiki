// 마루 서버 공식 위키
const config = {
  title: '마루 서버 공식 위키',
  tagline: '너의 이야기가 피어나는 세계',
  url: 'https://maru-wiki.pages.dev',
  baseUrl: '/',
  favicon: 'img/favicon.svg',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'ko', locales: ['ko'] },
  presets: [['classic', {
    docs: { routeBasePath: 'guide', sidebarPath: './sidebars.js', editUrl: 'https://github.com/adam8014/maru-wiki/edit/main/' },
    blog: false,
    theme: { customCss: './src/css/custom.css' }
  }]],
  themeConfig: {
    navbar: {
      title: '🌸 MARU WIKI',
      items: [
        { to: '/guide/intro', label: '시작하기', position: 'left' },
        { to: '/guide/content/fishing', label: '낚시', position: 'left' },
        { to: '/guide/content/minigames', label: '미니게임', position: 'left' },
        { to: '/guide/help/commands', label: '명령어', position: 'left' },
        { href: 'https://github.com/adam8014/maru-wiki', label: 'GitHub', position: 'right' }
      ]
    },
    footer: {
      style: 'dark',
      copyright: '© ' + new Date().getFullYear() + ' MARU SERVER · 비공식 Minecraft 관련 팬 프로젝트'
    },
    colorMode: { defaultMode: 'dark', disableSwitch: false, respectPrefersColorScheme: false }
  }
};
module.exports = config;