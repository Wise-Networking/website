import React from "react"
import PropTypes from "prop-types"
import slugify from "slugify"
import { Link, useStaticQuery, graphql } from "gatsby"

const Sidebar = props => {
  const data = useStaticQuery(
    graphql`
      {
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
  const sidebardata = props.sideData.map((sidebar, index) => (
    <div className="single-post" key={index}>
      <Link to={sidebar.postsLink}>
        <img src={sidebar.Image} alt="post" />
      </Link>

      <div className="post-meta">
        <ul>
          <li>
            <i className="fa fa-calendar"></i> Date: {sidebar.postDate}
          </li>
        </ul>
      </div>

      <h4>
        <Link to={sidebar.postsLink}>{sidebar.PostTitle}</Link>
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

//Props Types
Sidebar.propTypes = {
  widgetTitle2: PropTypes.string,
  widgetTitle3: PropTypes.string,
  widgetTitle4: PropTypes.string,
  sideData: PropTypes.array,
  categoriesData: PropTypes.array,
  tagsData: PropTypes.array,
}

//Default Props
Sidebar.defaultProps = {
  widgetTitle2: "Recent posts",
  widgetTitle3: "Categories",
  widgetTitle4: "Tags",
  sideData: [
    {
      postsLink: "#",
      Image: require("../../images/post_1.jpg"),
      PostTitle: "Risus commodo viverra mae.",
      postDate: "10 Mar",
    },
    {
      postsLink: "#",
      Image: require("../../images/post_2.jpg"),
      PostTitle: "Best way to learn java.",
      postDate: "10 Mar",
    },
    {
      postsLink: "#",
      Image: require("../../images/post_3.jpg"),
      PostTitle: "14 ridiculously cool websites.",
      postDate: "10 Mar",
    },
  ],
  categoriesData: [
    {
      categorieLink: "#",
      categorieName: "Business",
    },
    {
      categorieLink: "#",
      categorieName: "Technology",
    },
    {
      categorieLink: "#",
      categorieName: "Food",
    },
    {
      categorieLink: "#",
      categorieName: "Family",
    },
  ],
  tagsData: [
    {
      tagLink: "#",
      tagName: "Business",
    },
    {
      tagLink: "#",
      tagName: "Family",
    },
    {
      tagLink: "#",
      tagName: "Technology",
    },
    {
      tagLink: "#",
      tagName: "Food",
    },
    {
      tagLink: "#",
      tagName: "IT Startup",
    },
    {
      tagLink: "#",
      tagName: "Marketing",
    },
    {
      tagLink: "#",
      tagName: "Lifestyle",
    },
    {
      tagLink: "#",
      tagName: "Creative",
    },
    {
      tagLink: "#",
      tagName: "Startup",
    },
  ],
}

export default Sidebar
