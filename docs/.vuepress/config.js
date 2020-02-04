module.exports = {
  title: 'Git',
  description: 'I primi passi verso il versioning',
  themeConfig: {
    logo: '/assets/img/logo.png',
    repo: 'handgull/Git-cookbook/',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Git', link: '/git/' }
    ],
    sidebar: {
      '/git/': getGitSidebar('Git')
    },
    smoothScroll: true
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    ['@vuepress/pwa', {
      serviceWorker: true,
      popupComponent: 'MySWUpdatePopup',
      updatePopup: true
    }]
  ]
}

function getGitSidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ''
      ]
    }
  ]
}
