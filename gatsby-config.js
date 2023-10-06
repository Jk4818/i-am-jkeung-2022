module.exports = {
  siteMetadata: {
    title: `I Am JKeung 2024`,
    siteUrl: `https://jkeung.studio`
  },
  plugins: [`gatsby-plugin-smoothscroll`,"gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", `gatsby-plugin-preload-fonts`, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/favicon.png"
    }
  }, "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/assets/images/`
    },
    __key: "images"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "audio",
      "path": `${__dirname}/src/assets/audio/`
    },
    __key: "audio"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "tracks",
      "path": `${__dirname}/src/tracks/`
    },
    __key: "track"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pricing",
      "path": `${__dirname}/src/pricing/`
    },
    __key: "pricing"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};