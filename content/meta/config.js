const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Labcode", // <title>
  shortSiteTitle: "Personal blog of a developer", // <title> ending for posts and pages
  siteDescription: "Personal blog of a developer",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "",
  siteLanguage: "it",
  // author
  authorName: "DonkyFronky",
  authorTwitterAccount: "donkyfronky",
  // info
  infoTitle: "Labcode",
  infoTitleNote: "stories, tips & chronicles",
  // manifest.json
  manifestName: "Labcode - Personal blog of a developer",
  manifestShortName: "PersonalBlogOfADeveloper", // max 12 characters
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
