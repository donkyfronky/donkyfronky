// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/donky/labcode_gatsby/.cache/layouts/index.js"))
}

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/home/donky/labcode_gatsby/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-post-template-js": preferDefault(require("/home/donky/labcode_gatsby/src/templates/PostTemplate.js")),
  "component---src-templates-page-template-js": preferDefault(require("/home/donky/labcode_gatsby/src/templates/PageTemplate.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/donky/labcode_gatsby/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/home/donky/labcode_gatsby/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/home/donky/labcode_gatsby/.cache/json/layout-index.json"),
  "offline-plugin-app-shell-fallback.json": require("/home/donky/labcode_gatsby/.cache/json/offline-plugin-app-shell-fallback.json"),
  "new-age-new-face.json": require("/home/donky/labcode_gatsby/.cache/json/new-age-new-face.json"),
  "about.json": require("/home/donky/labcode_gatsby/.cache/json/about.json"),
  "contact.json": require("/home/donky/labcode_gatsby/.cache/json/contact.json"),
  "index.json": require("/home/donky/labcode_gatsby/.cache/json/index.json")
}