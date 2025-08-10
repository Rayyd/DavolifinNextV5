/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: { locales: ['fr','nl','en'], defaultLocale: 'fr' },
  images: { domains: ['images.unsplash.com'] }
};
module.exports = nextConfig;
