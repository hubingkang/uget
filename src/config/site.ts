export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: '',
  // name: 'Next.js',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
  mainNav: [
    // {
    //   title: 'Home',
    //   href: '/',
    // },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
  footerLinks: [
    {
      title: 'Product',
      links: [
        {
          title: 'Overview',
          href: 'https://ui.shadcn.com',
        },
        {
          title: 'Features',
          href: 'https://ui.shadcn.com',
        },
        {
          title: 'Pricing',
          href: 'https://ui.shadcn.com',
        },
      ]
    },
    {
      title: 'Company',
      links: [
        {
          title: 'About Us',
          href: 'https://ui.shadcn.com',
        },
        {
          title: 'Blog',
          href: 'https://ui.shadcn.com',
        },
        {
          title: 'Contact',
          href: 'https://ui.shadcn.com',
        },
      ]
    },
    {
      title: 'Legal',
      links: [
        {
          title: 'Privacy',
          href: 'https://ui.shadcn.com',
        },
        {
          title: 'Terms',
          href: 'https://ui.shadcn.com',
        },
        {
          title: 'License',
          href: 'https://ui.shadcn.com',
        },
      ]
    }
  ],
}
