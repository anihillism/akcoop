module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'AK Coops Ireland', // Navigation and Site Title
  titleAlt: 'AK Coops', // Title for JSONLD
  description: 'Handcrafted homes for all of our feathered friends.',
  url: 'https://akcoops.netlify.app', // Domain of your site. No trailing slash!
  siteUrl: 'https://akcoops.netlify.app', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'GatsbyTut', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Adam Nihill', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
};
