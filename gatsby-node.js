// const { createRemoteFileNode } = require("gatsby-source-filesystem")

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   createTypes(`
//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       featuredImg: File @link(from: "fields.localFile")
//     }

//     type Frontmatter {
//       title: String!
//       featuredImgUrl: String
//       featuredImgAlt: String
//     }
//   `)
// }

// exports.onCreateNode = async ({
//   node,
//   actions: { createNode, createNodeField },
//   createNodeId,
//   getCache,
// }) => {
//   // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
//   if (
//     node.internal.type === "MarkdownRemark" &&
//     node.frontmatter.featuredImgUrl !== null
//   ) {
//     const fileNode = await createRemoteFileNode({
//       url: node.frontmatter.featuredImgUrl, // string that points to the URL of the image
//       parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//       createNode, // helper function in gatsby-node to generate the node
//       createNodeId, // helper function in gatsby-node to generate the node id
//       getCache,
//     })

//     // if the file was created, extend the node with "localFile"
//     if (fileNode) {
//       createNodeField({ node, name: "localFile", value: fileNode.id })
//     }
//   }
// }

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /wavesurfer-react/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}