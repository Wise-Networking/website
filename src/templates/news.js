import React from "react"
import { graphql, Link, navigate } from "gatsby"
import ReactPaginate from "react-paginate"
import PropTypes from "prop-types"
import Layout from "../components/App/Layout"
import Image from "gatsby-image"

const Blog = props => {
  const { data } = props
  const { pathContext } = props
  const posts = data.allDatoCmsBlogPost.edges.map(node => node.node);

  console.log("POSTS => ", posts);

  const backgroundImage = data.backgroundImage.edges[0].node.backgroundImage.url;
  const blogPosts = posts.map((post, index) => (
    <div className="col-md-6 col-lg-4" key={index}>
      <div className="blog-card">
        <Link to={`/news/${post.slug}`} className="blog-img">
          <Image fluid={post.featuredImage.fluid} />
        </Link>

        <div className="blog-caption">
          <ul className="meta-tag">
            <li>
              <i className="fa fa-user"></i>
              {post.author}
            </li>
            <li>
              <i className="fa fa-calendar"></i>
              {post.publishedDate}
            </li>
          </ul>

          <h3>
            {/* <Link to={blogone.postLink}>{blogone.posttitle}</Link> */}
          </h3>

          <p>{post.contentNode.childMarkdownRemark.excerpt}</p>

          <Link className="read-more" to={`/news/${post.slug}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  ))

  return (
    <Layout location="blog">
      <div className="bread-cumbs-area " style={{
        background: `url(${backgroundImage})`
      }}>
        <div className="diplay-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1>{props.Title}</h1>
                  <p>{props.Content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="blog" className="our-blog main-blog bg-none">
        <div className="container">
          <div className="row">
            {blogPosts}
            <div className="col-lg-12 pagination-area text-center">
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                initialPage={pathContext.pageNumber}
                breakClassName={"break-me"}
                pageCount={pathContext.numberOfPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={value => {
                  const selectedPage = value.selected + 1
                  let navigateTo = `/news`

                  if (selectedPage !== 1) {
                    navigateTo += `/${selectedPage}`
                  }
                  navigate(navigateTo)
                }}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query getAllBlogs($skip: Int!, $limit: Int!) {
  allDatoCmsBlogPost(skip: $skip, limit: $limit) {
      edges {
        node {
          title
          slug
          author
          publishedDate(formatString:"MMMM DD, YYYY")
          description
          contentNode {
            childMarkdownRemark {
              excerpt
            }
          }
          featuredImage {
            fluid(maxWidth: 600) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
    backgroundImage: allDatoCmsNewsBlogBackgroundImage {
      edges {
        node {
          backgroundImage {
            url
          }
        }
      }
    }
  }
`

//Props Types
Blog.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
  blogonesData: PropTypes.array,
}

//Default Props
Blog.defaultProps = {
  Title: "Our Blog",
  Content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
  blogonesData: [
    {
      postImage: require("../images/blog-one.jpg"),
      postLink: "/blog-details",
      posttitle: "14 ridiculously cool websites you never know.",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorName: "Jone",
      Date: "August 12, 2020",
    },
    {
      postImage: require("../images/blog-two.jpg"),
      postLink: "/blog-details",
      posttitle: "Top 10 hot marketing trends you need.",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorName: "Jone",
      Date: "August 13, 2020",
    },
    {
      postImage: require("../images/blog-three.jpg"),
      postLink: "/blog-details",
      posttitle: "10 reasons you need a digital marketing strategy",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorName: "Jone",
      Date: "August 14, 2020",
    },
    {
      postImage: require("../images/blog-four.jpg"),
      postLink: "/blog-details",
      posttitle: "How to build a programming career.",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorName: "Jone",
      Date: "August 15, 2020",
    },
    {
      postImage: require("../images/blog-five.jpg"),
      postLink: "/blog-details",
      posttitle: "10 hot marketing trends you need.",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorName: "Jone",
      Date: "August 16, 2020",
    },
    {
      postImage: require("../images/blog-six.jpg"),
      postLink: "/blog-details",
      posttitle: "Best programming language to learn.",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorName: "Jone",
      Date: "August 17, 2020",
    },
  ],
}

export default Blog
