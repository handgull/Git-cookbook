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
      { text: 'Introduzione', link: '/intro/' },
      { text: 'Git', link: '/git/' }
    ],
    sidebar: {
      '/git/': getGitSidebar('Git'),
      '/intro/': getIntroSidebar('Introduzione')
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
        '../intro/',
        '',
        './backtracking/',
        './branching/',
        './teamwork/',
        './git-server/',
        './jam-stack/'
      ]
    }
  ]
}

function getIntroSidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        '',
        '../git/',
        '../git/backtracking/',
        '../git/branching/',
        '../git/teamwork/',
        '../git/git-server/',
        '../git/jam-stack/'
      ]
    }
  ]
}
