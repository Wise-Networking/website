module.exports = {
  pathPrefix: `/website`,
  siteMetadata: {
    title: `Dandelions: Your Partner In Custom Smart Grids`,
    description: `Dandelions provides standardized IT, power and communications enabling customers to build custom IOT grids.`,
    author: `https://www.linkedin.com/company/wise-networking/`,
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
        name: `dandelions.cloud`,
        short_name: `dandelions.cloud`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
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
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gmail.us7.list-manage.com/subscribe/post?u=e015e55c8d55076e9d6892fca&amp;id=b67c77420b',
        timeout: 3500,
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
