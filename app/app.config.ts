const siteName = 'XMPlus'
export default defineAppConfig({
  socials: {
    github: 'https://github.com/XMPlusDev',
  },
  github: {
    rootDir: 'docs',
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc',
    },
    pageHero: {
      slots: {
        container: 'flex flex-col lg:grid pt-10 pb-2 sm:pt-14 sm:pb-3 lg:pt-16 lg:pb-4 gap-2 sm:gap-y-3',
        title: 'text-4xl sm:text-5xl text-pretty tracking-tight font-bold text-highlighted',
      },
    },
    pageCard: {
      variants: {
        variant: {
          soft: {
            root: 'shadow-md',
          },
        },
      },
    },
    main: {
      base: 'min-h-0',
    },
    pageSection: {
      slots: {
        container: 'flex flex-col lg:grid pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12 gap-6 sm:gap-8',
      },
    },
    commandPalette: {
      slots: {
        item: 'items-center',
        input: '[&_.iconify]:size-4 [&_.iconify]:mx-0.5',
        itemLeadingIcon: 'size-4 mx-0.5',
      },
    },
    contentNavigation: {
      slots: {
        linkLeadingIcon: 'size-4 mr-1',
        linkTrailing: 'hidden',
      },
      defaultVariants: {
        variant: 'link',
      },
    },
    pageLinks: {
      slots: {
        linkLeadingIcon: 'size-4',
        linkLabelExternalIcon: 'size-2.5',
      },
    },
  },
  seo: {
    siteName: siteName
  },
  header: {
    title: siteName,
    to: '/en',
    logo: {
      alt: 'XMPlus',
      light: '/logo.png',
      dark: '/logo.png'
    },
    search: true,
    colorMode: true,
    links: [
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/XMPlusDev',
        'target': '_blank',
        'aria-label': 'GitHub'
      }
    ]
  },
})