// next-sitemap.config.js
module.exports = {
  siteUrl: "https://www.uphoria-platform.ng",
  generateRobotsTxt: true, // Generates a `robots.txt` file
  exclude: ["/secret-page", "/admin/*"], // Exclude specific pages
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/secret-page", "/admin"],
      },
    ],
  },
};
