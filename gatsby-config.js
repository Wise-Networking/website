module.exports = {
  siteMetadata: {
    title: `Gloxy - Gatsby/React multipurpose responsive landing page template`,
    description: `Gloxy - Gatsby/React multipurpose responsive landing page template`,
    author: `@envy_theme`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-datocms`,
            options: {
              apiToken: "eb67bceab631dc1ec53d6df0a32af9",
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "zxx",
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `eb67bceab631dc1ec53d6df0a32af9`,
        previewMode: false,
        disableLiveReload: false,
        localeFallbacks: {
          it: ["en"],
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
