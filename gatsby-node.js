const path = require("path")
const slugify = require("slugify")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const ProductPageTemplate = path.resolve("./src/templates/product.js")
  const PageTemplate = path.resolve("./src/templates/page.js")
  const NewsPostTemplate = path.resolve("./src/templates/news-post.js")
  const TagTemplate = path.resolve("./src/templates/tags.js")
  const CategoryTemplate = path.resolve("./src/templates/categories.js")
  const NewsTemplate = path.resolve("./src/templates/news.js")

  // Products
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

  const allProducts = allProductsQuery.data.allDatoCmsProduct.edges.map(node => node.node)

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


  // Pages
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

  const allPages = allPagesQuery.data.allDatoCmsPage.edges.map(node => node.node)

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

  // News

  const allNewsPostsQuery = await graphql(`
    query AllNewsPosts {
      allDatoCmsBlogPost {
        edges {
          node {
            id
            slug
            publishedDate
          }
        }
      }
    }
  `)

  const allNewsPosts = allNewsPostsQuery.data.allDatoCmsBlogPost.edges.map(
    node => node.node
  )


  //News Page

  paginate({
    createPage,
    items: allNewsPosts,
    itemsPerPage: 6,
    pathPrefix: `news`,
    component: NewsTemplate,
  })

  allNewsPosts.forEach(product => {
    const { slug, id } = product
    createPage({
      component: NewsPostTemplate,
      path: `news/${slug}`,
      context: {
        id,
      },
    })
  })

  // Tags

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

  const allTags = allTagsQuery.data.allDatoCmsTag.edges.map(node => node.node)

  allTags.forEach(async tag => {
    const { title, id } = tag
    const slug = slugify(title.toLowerCase())

    const allPostsByTag = await graphql(`
      query  {
        allPosts: allDatoCmsBlogPost(
          filter: { tags: { elemMatch: { id: { eq: "${id}"} } } } 
        ) {
          edges {
            node {
              title
            }
          }
        }
      }
    `)


    paginate({
      createPage,
      items: allPostsByTag.data.allPosts.edges,
      itemsPerPage: 3,
      pathPrefix: `tags/${slug}`,
      component: TagTemplate,
      context: {
        id
      }
    })
  })

  const allCategoryQuery = await graphql(`
    query allCategory {
      allDatoCmsCategory {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  const allCategory = allCategoryQuery.data.allDatoCmsCategory.edges.map(
    node => node.node
  )

  allCategory.forEach(async category => {
    const { title, id } = category
    const slug = slugify(title.toLowerCase())

    const allPostsByCategory = await graphql(`
    query  {
      allPosts: allDatoCmsBlogPost(
        filter: { category: { id: { eq: "${id}" } } }
      ) {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

    paginate({
      createPage,
      items: allPostsByCategory.data.allPosts.edges,
      itemsPerPage: 3,
      pathPrefix: `categories/${slug}`,
      component: CategoryTemplate,
      context: {
        id
      }
    })
  })
}
