const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Labcode", // <title>
  shortSiteTitle: "Personal blog of a developer", // <title> ending for posts and pages
  siteDescription: "Personal blog of a developer",
  siteUrl: "https://labcode.it",
  pathPrefix: "",
  siteImage: "",
  siteLanguage: "it",
  // author
  authorName: "Donky Fronky",
  authorTwitterAccount: "donkyfronky",
  // info
  infoTitle: "Labcode",
  infoTitleNote: "stories, tips & chronicles",
  // manifest.json
  manifestName: "Labcode - Personal blog of a developer",
  manifestShortName: "Labcode", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
   contactEmail: "john@doe.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/donkyfronky" },
    { name: "twitter", url: "https://twitter.com/donkyfronky" }
  ]
};
