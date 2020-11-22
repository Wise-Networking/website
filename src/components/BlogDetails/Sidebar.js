import React from "react"
import PropTypes from "prop-types"
import slugify from "slugify"
import { Link, useStaticQuery, graphql } from "gatsby"

const Sidebar = props => {
  const data = useStaticQuery(
    graphql`
      {
        posts: allDatoCmsBlogPost(sort: {fields: publishedDate}){
          edges{
            node{
              title
              slug
              publishedDate(formatString:"MMMM DD, YYYY")
              featuredImage{
                url
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
  const posts = data.posts.edges.map( node => node.node)
  const sidebardata = posts.map((post, index) => (
    <div className="single-post" key={index}>
      <Link to={`/news/${post.slug}`}>
        <img src={post.featuredImage.url} alt="post" />
      </Link>

      <div className="post-meta">
        <ul>
          <li>
            <i className="fa fa-calendar"></i> Date: {post.publishedDate}
          </li>
        </ul>
      </div>

      <h4>
        <Link to={`/news/${post.slug}`}>{post.title}</Link>
      </h4>
    </div>
  ))

  const categoriedata = categories.map((category, index) => {
    const slug = slugify(category.title.toLowerCase())
    return (
      <li className="list-group-item" key={index}>
        <Link to={`/category/${slug}`}>{category.title}</Link>
      </li>
    )
  })

  const tagdata = tags.map((tag, index) => {
    const slug = slugify(tag.title.toLowerCase())
    return (
      <li key={index}>
        <Link to={`/tag/${slug}`}>{tag.title}</Link>
      </li>
    )
  })
  return (
    <div className="col-lg-4">
      <div className="side-widget">
        <div className="search-form">
          <form>
            <input type="text" className="form-control" placeholder="Search" />
            <button type="submit" className="btn btn-default">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="side-widget">
        <h3>{props.widgetTitle2}</h3>

        {sidebardata}
      </div>

      <div className="side-widget">
        <h3>{props.widgetTitle3}</h3>
        <ul className="list-group">{categoriedata}</ul>
      </div>

      <div className="side-widget">
        <h3>{props.widgetTitle4}</h3>
        <ul className="list-tags">{tagdata}</ul>
      </div>
    </div>
  )
}

export default Sidebar
