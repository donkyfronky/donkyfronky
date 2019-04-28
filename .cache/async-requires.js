// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": require("gatsby-module-loader?name=component---node-modules-gatsby-plugin-offline-app-shell-js!/home/donky/labcode_gatsby/node_modules/gatsby-plugin-offline/app-shell.js"),
  "component---src-templates-post-template-js": require("gatsby-module-loader?name=component---src-templates-post-template-js!/home/donky/labcode_gatsby/src/templates/PostTemplate.js"),
  "component---src-templates-page-template-js": require("gatsby-module-loader?name=component---src-templates-page-template-js!/home/donky/labcode_gatsby/src/templates/PageTemplate.js"),
  "component---src-pages-contact-js": require("gatsby-module-loader?name=component---src-pages-contact-js!/home/donky/labcode_gatsby/src/pages/contact.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/donky/labcode_gatsby/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/donky/labcode_gatsby/.cache/json/layout-index.json"),
  "offline-plugin-app-shell-fallback.json": require("gatsby-module-loader?name=path---offline-plugin-app-shell-fallback!/home/donky/labcode_gatsby/.cache/json/offline-plugin-app-shell-fallback.json"),
  "new-age-new-face.json": require("gatsby-module-loader?name=path---new-age-new-face!/home/donky/labcode_gatsby/.cache/json/new-age-new-face.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/home/donky/labcode_gatsby/.cache/json/about.json"),
  "contact.json": require("gatsby-module-loader?name=path---contact!/home/donky/labcode_gatsby/.cache/json/contact.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/donky/labcode_gatsby/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/donky/labcode_gatsby/.cache/layouts/index.js")
}