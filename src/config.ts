import { PORTFOLIO } from './portfolio';

// Core metadata used for SEO tags and generated site feeds.
export const SITE_TITLE = 'Ocedition';
export const SITE_DESCRIPTION = `${PORTFOLIO.name}'s blog, notes, projects, and developer writing.`;
export const SITE_URL = 'https://ocedition.com';
export const REPOSITORY_URL = 'https://github.com/rpdudley';

// Brand identity values reused by the navigation and footer.
export const BRAND_NAME = 'Ocedition';
export const BRAND_LOGO_TEXT = 'O';
export const BRAND_LOGO_IMAGE = '/channel.png';

// Social account URLs used in footer/profile links.
export const SOCIAL_LINKS = {
  twitter: 'https://www.youtube.com/@Ocedition',
  github: 'https://github.com/rpdudley',
  linkedin: 'https://www.linkedin.com/in/ryan-dudley-08753b24b/',
};

// Header navigation links for desktop and mobile menus.
export const NAV_LINKS = [
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/notes/', label: 'Notes' },
  { href: '/blog/', label: 'Blog' },
];

// Footer column groups and their destination links.
export const FOOTER_LINKS = [
  {
    title: 'Portfolio',
    links: [
      { label: 'Experience', href: '/#experience' },
      { label: 'Projects', href: '/#projects' },
      { label: 'About', href: '/#about' },
      { label: 'Notes', href: '/notes/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog/' },
      { label: 'Changelog', href: '/changelog/' },
      { label: 'GitHub', href: 'https://github.com/rpdudley' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ryan-dudley-08753b24b/' },
    ],
  },
  {
    title: 'Site',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: `mailto:${PORTFOLIO.email}` },
      { label: 'Privacy Policy', href: '/privacy/' },
      { label: 'Terms of Service', href: '/terms/' },
    ],
  },
];
