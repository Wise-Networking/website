const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const ProductPageTemplate = path.resolve("./src/templates/product.js")

  const allProductsQuery = await graphql(`
    query AllProducts {
      allDatoCmsProduct {
        edges {
          node {
            id
            title
            description
            link
          }
        }
      }
    }
  `)

  const allProducts = allProductsQuery.data.allDatoCmsProduct.edges.map(
    node => node.node
  )
  allProducts.forEach(product => {
    const { link, id } = product
    createPage({
      component: ProductPageTemplate,
      path: `/products/${link}`,
      context: {
        id,
      },
    })
  })
}
