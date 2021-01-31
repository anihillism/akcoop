const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/adamnihill/Documents/websites/akcoop/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/adamnihill/Documents/websites/akcoop/src/pages/404.jsx"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/Users/adamnihill/Documents/websites/akcoop/src/pages/about.jsx"))),
  "component---src-pages-coop-jsx": hot(preferDefault(require("/Users/adamnihill/Documents/websites/akcoop/src/pages/coop.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/adamnihill/Documents/websites/akcoop/src/pages/index.jsx"))),
  "component---src-pages-tags-jsx": hot(preferDefault(require("/Users/adamnihill/Documents/websites/akcoop/src/pages/tags.jsx"))),
  "component---src-templates-post-jsx": hot(preferDefault(require("/Users/adamnihill/Documents/websites/akcoop/src/templates/post.jsx"))),
  "component---src-templates-tag-jsx": hot(preferDefault(require("/Users/adamnihill/Documents/websites/akcoop/src/templates/tag.jsx")))
}

