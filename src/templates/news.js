import React from "react"
import { graphql, Link, navigate } from "gatsby"
import ReactPaginate from "react-paginate"
import PropTypes from "prop-types"
import Layout from "../components/App/Layout"
import Image from "gatsby-image"

const News = props => {
  const { data } = props
  const { pathContext } = props
  const posts = data.allDatoCmsBlogPost.edges.map(node => node.node);

  const backgroundImage = data.backgroundImage.edges[0].node.backgroundImage.url;

  const newsPosts = posts.map((post, index) => (
    <div className="col-md-6 col-lg-4" key={index}>
      <div className="news-card">
        <Link to={`/news/${post.slug}`} className="news-img">
          <Image fluid={post.featuredImage.fluid} />
        </Link>

        <div className="news-caption">
          <ul className="meta-tag">
            <li>
              <Link to={`/our-people`} className="news-link-cls">
                <i className="fa fa-user"></i>
                {post.author}
              </Link>
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
    <Layout location="news">
      <div className="bread-cumbs-area" style={{ background: `url(${backgroundImage})`}}>
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

      <section id="news" className="our-news main-news bg-none">
        <div className="container">
          <div className="row">
            {newsPosts}
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
query getAllNews($skip: Int!, $limit: Int!) {
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
News.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
  newsonesData: PropTypes.array,
}

//Default Props
News.defaultProps = {
  Title: "Our News",
  Content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
  newsonesData: [
    {
      postImage: require("../images/blog-one.jpg"),
      postLink: "/news-details",
      posttitle: "14 ridiculously cool websites you never know.",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorName: "Jone",
      Date: "August 12, 2020",
    },
    {
      postImage: require("../images/blog-two.jpg"),
      postLink: "/news-details",
      posttitle: "Top 10 hot marketing trends you need.",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorName: "Jone",
      Date: "August 13, 2020",
    },
    {
      postImage: require("../images/blog-three.jpg"),
      postLink: "/news-details",
      posttitle: "10 reasons you need a digital marketing strategy",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorName: "Jone",
      Date: "August 14, 2020",
    },
    {
      postImage: require("../images/blog-four.jpg"),
      postLink: "/news-details",
      posttitle: "How to build a programming career.",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorName: "Jone",
      Date: "August 15, 2020",
    },
    {
      postImage: require("../images/blog-five.jpg"),
      postLink: "/news-details",
      posttitle: "10 hot marketing trends you need.",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorName: "Jone",
      Date: "August 16, 2020",
    },
    {
      postImage: require("../images/blog-six.jpg"),
      postLink: "/news-details",
      posttitle: "Best programming language to learn.",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorName: "Jone",
      Date: "August 17, 2020",
    },
  ],
}

export default News
