module.exports = {
  siteMetadata: {
    title: `Dandelions: Your Partner In Custom Smart Grids`,
    description: `Dandelions provides standardized IT, power and communications enabling customers to build custom IOT grids.`,
    author: `https://www.linkedin.com/company/wise-networking/`,
    siteUrl: `https://www.dandelions.cloud`
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
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow",
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
        // icons: [
        //   {
        //     src: `src/images/favicons/android-chrome-192x192.png`,
        //     sizes: `192x192`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `src/images/android-chrome-512x512.png`,
        //     sizes: `512x512`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `src/images/favicons/apple-touch-icon.png`,
        //     sizes: `180x180`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `src/images/favicons/favicon.ico`,
        //     sizes: `48x48`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `src/images/favicons/favicon-16x16.png`,
        //     sizes: `16x16`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `src/images/favicons/favicon-32x32.png`,
        //     sizes: `32x32`,
        //     type: `image/png`,
        //   },
        // ], // Add or remove icon sizes as desired
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
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
        "https://work.us4.list-manage.com/subscribe/post?u=12f5efa71026881a906be432f&amp;id=1568b98859",
        timeout: 3500,
      },
    },
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: "G-7JNL3L758K",
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: false,
          // Defers execution of google analytics script after page load
          defer: true,
        },
    },
    `gatsby-plugin-sitemap`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,


  ],
}
