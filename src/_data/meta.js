module.exports = {
  url: process.env.URL || 'http://ehqo.net',
  siteName: 'Ehqo’s Echoes',
  siteDescription:
    'A website by Ehqo.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: {
    name: 'Ehqo', 
    avatar: '/favicon.png',
    email: 'ehqo@omg.lol', 
    website: 'https://ehqo.net' 
  },
  creator: {
    name: 'Ehqo',
    email: 'ehqo@omg.lol',
    website: 'https://ehqo.net',
    social: 'https://social.lol/@ehqo'
  },
  themeColor: '#6290C8', //  Manifest: defines the default theme color for the application
  themeBgColor: '#30323D', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  opengraph_default: '/src/assets/images/template/og-default.png', // fallback/default meta image
  opengraph_default_alt:
    'A blog written by Ehqo.', // alt text for default meta image
  blog: {
    // RSS feed
    name: 'Ehqo’s Echoes',
    description:
      'A blog written by Ehqo.',
    // feed links are looped over in the head. You may add more to the array.
    feedLinks: [
      {
        title: 'Atom Feed',
        url: '/feed.xml',
        type: 'application/atom+xml'
      }
    ],
    // Tags
    tagSingle: 'Tag',
    tagPlural: 'Tags',
    tagMore: 'More tags:',
    // pagination
    paginationLabel: 'Blog',
    paginationPage: 'Page',
    paginationPrevious: 'Previous',
    paginationNext: 'Next',
    paginationNumbers: true
  },
  details: {
    aria: 'section controls',
    expand: 'expand all',
    collapse: 'collapse all'
  },
  navigation: {
    ariaTop: 'Main',
    ariaBottom: 'Complementary',
    ariaPlatforms: 'Platforms',
    // activate alternative mobile menu with drawer
    drawerNav: false,
    navLabel: 'Menu'
  },
  themeSwitch: {
    title: 'Theme',
    light: 'light',
    dark: 'dark',
    initial: 'select'
  },
  /* TURNED THIS STUFF OFF
  greenweb: {
    // this goes into src/common/greenweb.njk
    providers: {
      // if you want to add more than one, edit the array directly.
      domain: 'netlify.com',
      service: 'cdn'
    },
    credentials: {
      // optional, eg: 	{ domain='my-org.com', doctype = 'webpage', url = 'https://my-org.com/our-climate-record'}
      domain: '',
      doctype: '',
      url: ''
    }
  },
  viewRepo: {
    // this is for the view/edit on github link. The value in the package.json will be pulled in.a
    allow: false,
    infoText: 'View this page on GitHub'
  },
  easteregg: false
  */
};
