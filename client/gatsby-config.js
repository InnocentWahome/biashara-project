module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `InnocentWahome Portfolio Project`,
    author: `@InnocentWahome`,
    siteUrl: `https://wahome.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: process.env.API_URL || `http://localhost:1337`,
    //     queryLimit: 10000, // Defaults to 100
    //     collectionTypes: [
    //       // `about`,
    //       // `article`,
    //       // `blog`,
    //       // `client`,
    //       // `project`,
    //       // `testimonial`,
    //       // `work`,
    //       `brand`,
    //       `color`,
    //       `product`,
    //       `vendor`
    //     ],
    //   },
    // },
  ],
}
