const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/hh/mikhail-weiss.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/hh/mikhail-weiss.github.io/src/pages/404.js"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/hh/mikhail-weiss.github.io/src/pages/index.tsx"))),
  "component---src-pages-page-1-index-tsx": hot(preferDefault(require("/home/hh/mikhail-weiss.github.io/src/pages/page1/index.tsx"))),
  "component---src-pages-page-2-index-tsx": hot(preferDefault(require("/home/hh/mikhail-weiss.github.io/src/pages/page2/index.tsx"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/home/hh/mikhail-weiss.github.io/src/pages/using-typescript.tsx")))
}

