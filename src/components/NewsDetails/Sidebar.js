import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import slugify from "slugify"

const Sidebar = props => {
  const data = useStaticQuery(
    graphql`
      {
        posts: allDatoCmsBlogPost(sort: {fields: publishedDate,order:DESC}){
          edges{
            node{
              title
              slug
              publishedDate(formatString:"MMMM DD, YYYY")
              featuredImage{
                url
              }
              tags{
                title
                link
              }
              category{
                title
                link
              } 
            }
          }
        }
        tags: allDatoCmsTag {
          edges {
            node {
              title
              description
            }
          }
        }
        categories: allDatoCmsCategory {
          edges {
            node {
              title
              description
            }
          }
        }
      }
    `
  )

  const tags = data.tags.edges.map(node => node.node)
  const categories = data.categories.edges.map(node => node.node)
  const posts = data.posts.edges.map(node => node.node)

  console.log("SIDEBAR POSTS =>", posts);

  const sidebardata = posts.map((post, index) => (
    <div className="single-post" key={index}>
      <Link to={`/news/${post.slug}`}>
        <img src={post.featuredImage.url} alt="post" />
      </Link>
      <h4>
        <Link to={`/news/${post.slug}`}>{post.title}</Link>
      </h4>
      <div className="post-meta">
        <ul>
          <li>
            <i className="fa fa-calendar"></i> Date: {post.publishedDate}
          </li>

          {/* <li>
            <i class="fa fa-tags"></i>
            {post.tags.map((tag, i) => (
              <Link to={`/tags/${slugify(tag.link)}`}>
                { tag.title = i !== post.tags.length - 1 ? tag.title + "," : tag.title}
              </Link>
            ))}
          </li>

          <li>
            <i class="fa fa-bars"></i>
            <Link to={`/categories/${slugify(post.category.link)}`}>
              {post.category.title}
            </Link>
          </li> */}

        </ul>
      </div>

    </div>
  ))

  const categoryData = categories.map((category, index) => {
    const slug = slugify(category.title.toLowerCase())
    return (
      <li className="list-group-item" key={index}>
        <Link to={`/categories/${slug}`}>{category.title}</Link>
      </li>
    )
  })

  const tagdata = tags.map((tag, index) => {
    const slug = slugify(tag.title.toLowerCase())
    return (
      <li key={index}>
        <Link to={`/tags/${slug}`}>{tag.title}</Link>
      </li>
    )
  })
  return (
    <div className="col-lg-4">
      <div className="side-widget">
        <h3>Recent posts</h3>
        {sidebardata}
      </div>

      <div className="side-widget">
        <h3>Categories</h3>
        <ul className="list-group">{categoryData}</ul>
      </div>

      <div className="side-widget">
        <h3>Tags</h3>
        <ul className="list-tags">{tagdata}</ul>
      </div>
    </div>
  )
}

export default Sidebar
