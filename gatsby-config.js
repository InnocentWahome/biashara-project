require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ofamis`,
    description: `Ofamis is a platform for the people to find and share their family history.`,
    siteUrl: "https://www.ofamis.co.ke",
    author: "Innocent Maina",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "d",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: 'gatsby-source-strapi',
    //   options: {
    //     apiURL: `http://localhost:1337/graphql`,
    //     contentTypes: [
    //       'car',
    //       'engine-details',
    //     ],
    //     queryLimit: 1000,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        loaderOptions: {
          appendData: `@env: ${process.env.NODE_ENV};`,
        },
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  ],
};
