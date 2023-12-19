import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import { render } from "datocms-structured-text-to-plain-text"
import slugify from "slugify"

import trimString from "../../utils/trim-string"

const Sidebar = props => {
  const data = useStaticQuery(
    graphql`
      {
        posts: allDatoCmsBlogPost(sort: { fields: id, order: DESC }, limit: 3) {
          edges {
            node {
              title
              slug
              publishedDate(fromNow: true)
              featuredImage {
                url
              }
              richText {
                value
              }
              category {
                title
              }
            }
          }
        }
      }
    `
  )

  const posts = data.posts.edges.map(node => node.node)

  const sidebardata = posts.map((post, index) => (
    <div className="col-12 col-lg-4 mb-4" key={`sidebar-${index}`}>
      <div className="single-post">
        <Link to={`/news/${post.slug}`}>
          <img src={post.featuredImage.url} alt="post" />
        </Link>
        <div className="single-post-caption">
          <div className="meta-tag">
            {post.publishedDate} /{" "}
            <Link
              to={`/categories/${slugify(post.category.title.toLowerCase())}`}
              className="text-brand"
            >
              {post.category.title}
            </Link>
          </div>
          <Link to={`/news/${post.slug}`}>
            <h2 className="news-title mt-0">{post.title}</h2>
          </Link>
          <Link to={`/news/${post.slug}`}>
            <p>{trimString(render(post.richText))}</p>
          </Link>
        </div>
      </div>
    </div>
  ))
  return (
    <div className="side-widget mt-5 py-5">
      <h3>Recent posts</h3>
      <div className="row">{sidebardata}</div>
    </div>
  )
}

export default Sidebar
