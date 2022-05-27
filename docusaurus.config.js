// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bruno Ricard & Guylaine Frin',
  tagline: 'Élections Législatives 2022',
  url: 'https://maiwann.github.io',
  // https://www.nupes2202.bzh/
  baseUrl: '/nupes-2202/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'maiwann',
  projectName: 'nupes2202',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr-FR',
    locales: ['fr-FR'],
  },
  plugins: ['docusaurus-plugin-matomo', 'docusaurus-plugin-sass'],
  scripts: [{
    src: '/js/matomo.js',
    async: false,
  }],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'programme',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'NUPES',
        logo: {
          alt: 'NUPES Logo',
          src: 'img/nupes-logo.svg',
        },
        items: [{
          to: '/',
          position: 'left',
          label: 'Accueil',
        },
        {
          to: 'agenda',
          position: 'left',
          label: 'Nous rencontrer',
        },
        {
          to: 'notre-programme',
          position: 'left',
          label: 'Notre programme',
        },
        /*{
          to: 'procuration',
          position: 'left',
          label: 'Procuration',
        },*/
        {
          to: 'notre-candidate',
          position: 'left',
          label: 'Nos candidats',
        },
          /*{
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Programme',
          },
          {
            to: 'agenda',
            position: 'left',
            label: 'Nous Rencontrer',
          },
          {
            to: 'notre-candidate',
            position: 'left',
            label: 'Nos candidats',
          },*/
          {
            href: 'https://twitter.com/NUPES_2202',
            label: 'Twitter',
            position: 'right',
            id: 'twitter'
          },
          {
            href: 'https://www.facebook.com/NUPES-Circonscription-2202-Bruno-Ricard-et-Guylaine-Frin-112655671442144/',
            label: 'Facebook',
            position: 'right',
            id: 'facebook'
          },
        ],
      },
      colorMode: {
        disableSwitch: true
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      matomo: {
        matomoUrl: 'https://matomo.noussommes.org/',
        siteId: '3',
        phpLoader: 'matomo.php',
        jsLoader: 'matomo.js',
      },
    }),
};

module.exports = config;
