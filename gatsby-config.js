require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Purcell Communications`,
    siteUrl: `https://www.yourdomain.tld`,
    author: `mostlyClicks, LLC`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "What We Do",
        link: "/what-we-do",
      },
      {
        name: "Why Use Us",
        link: "/why-use-us",
      },
      {
        name: "Who We Are",
        link: "/who-we-are",
      },
      {
        name: "What People Say",
        link: "/what-people-say",
      },
      {
        name: "Contact Us",
        link: "/contact-us",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "styled-components",
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto slab\:300,400,700,900`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
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
