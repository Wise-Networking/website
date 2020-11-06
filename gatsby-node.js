const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const ProductPageTemplate = path.resolve("./src/templates/product.js")
  const PageTemplate = path.resolve("./src/templates/page.js")
  const BlogPostTemplate = path.resolve("./src/templates/blog-post.js")
  const TagTemplate = path.resolve("./src/templates/tag.js")

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

  const allPagesQuery = await graphql(`
    query AllPages {
      allDatoCmsPage {
        edges {
          node {
            id
            title
            link
          }
        }
      }
    }
  `)

  const allPages = allPagesQuery.data.allDatoCmsPage.edges.map(
    node => node.node
  )

  allPages.forEach(product => {
    const { link, id } = product
    createPage({
      component: PageTemplate,
      path: `/${link}`,
      context: {
        id,
      },
    })
  })

  const allBlogPostsQuery = await graphql(`
    query AllBlogPosts {
      allDatoCmsBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const allBlogPosts = allBlogPostsQuery.data.allDatoCmsBlogPost.edges.map(
    node => node.node
  )

  allBlogPosts.forEach(product => {
    const { slug, id } = product
    createPage({
      component: BlogPostTemplate,
      path: `blog/${slug}`,
      context: {
        id,
      },
    })
  })

  const allTagsQuery = await graphql(`
    query AllTags {
      allDatoCmsTag {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  const allTags = allTagsQuery.data.allDatoCmsTag.edges.map(
    node => node.node
  )

  allTags.forEach(tag => {
    const { title, id } = tag
    const slug = slugify(title.toLowerCase())
    createPage({
      component: TagTemplate,
      path: `tag/${slug}`,
      context: {
        id,
      },
    })
  })
}
