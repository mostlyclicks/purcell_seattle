require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Purcell Communications`,
    siteUrl: `https://www.yourdomain.tld`,
    author: `mostlyClicks, LLC`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: require("./utils/linkResolver").linkResolver,
        schemas: {
          homepage: require("./custom_types/homepage.json"),
          page: require("./custom_types/page.json"),
          service: require("./custom_types/service.json"),
          testimonial: require("./custom_types/testimonial.json"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "fff",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
