module.exports = {
  siteMetadata: {
    title: `I Am JKeung 2022`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [`gatsby-plugin-smoothscroll`,"gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/logo_thicker.png"
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
      "name": "tracks",
      "path": `${__dirname}/src/tracks/`
    },
    __key: "track"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};