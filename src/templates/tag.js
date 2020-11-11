import React from 'react'
import {Link,graphql} from 'gatsby'
import PropTypes from "prop-types"
import Layout from '../components/App/Layout'
import Image from 'gatsby-image'

const blog = (props) => {
    const {data} = props;
    const tag = data.tag;

    const posts = data.allPosts.edges.map( node => node.node)
    console.log({posts})

    const blogPosts = posts.map((post, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <div className="blog-card">
            <Link to={`/blog/${post.slug}`} className="blog-img">
              <Image fluid={post.featuredImage.fluid} />
            </Link>

            <div className="blog-caption">
              <ul className="meta-tag">
                <li>
                  <i className="fa fa-user"></i>
                  {/* {blogone.authorName} */}
                </li>
                <li>
                  <i className="fa fa-calendar"></i>
                  {/* {blogone.Date} */}
                </li>
              </ul>

              <h3>
                {/* <Link to={blogone.postLink}>{blogone.posttitle}</Link> */}
              </h3>


              <p>{post.contentNode.childMarkdownRemark.excerpt}</p>

              <Link className="read-more" to={`/blog/${post.slug}`}>
                Read More
              </Link>
            </div>
          </div>
        </div>
    ))

    return (
        <Layout location="blog">
          <div className="bread-cumbs-area bread-cumbs-bg">
            <div className="diplay-table">
              <div className="display-table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7">
                      <h1>Tag: {tag.title}</h1>
                      <p>{tag.title}</p>
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
                  <ul className="pagination">
                    <li><Link to="#"><i className="fa fa-angle-left"></i></Link></li>
                    <li className="active"><Link to="#">1</Link></li>
                    <li><Link to="#">2</Link></li>
                    <li><Link to="#">3</Link></li>
                    <li><Link to="#"><i className="fa fa-angle-right"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Layout>
    )
}

//Props Types
blog.propTypes = {
    Title: PropTypes.string,
    Content: PropTypes.string,
    blogonesData: PropTypes.array
}

//Default Props
blog.defaultProps = {
    Title: "Our Blog",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
    blogonesData: [
        {
            postImage: require("../images/blog-one.jpg"),
            postLink: "/blog-details",
            posttitle: "14 ridiculously cool websites you never know.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            authorName: "Jone",
            Date: "August 12, 2020",
        },
        {
            postImage: require("../images/blog-two.jpg"),
            postLink: "/blog-details",
            posttitle: "Top 10 hot marketing trends you need.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            authorName: "Jone",
            Date: "August 13, 2020",
        },
        {
            postImage: require("../images/blog-three.jpg"),
            postLink: "/blog-details",
            posttitle: "10 reasons you need a digital marketing strategy",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            authorName: "Jone",
            Date: "August 14, 2020",
        },
        {
            postImage: require("../images/blog-four.jpg"),
            postLink: "/blog-details",
            posttitle: "How to build a programming career.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            authorName: "Jone",
            Date: "August 15, 2020",
        },
        {
            postImage: require("../images/blog-five.jpg"),
            postLink: "/blog-details",
            posttitle: "10 hot marketing trends you need.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            authorName: "Jone",
            Date: "August 16, 2020",
        },
        {
            postImage: require("../images/blog-six.jpg"),
            postLink: "/blog-details",
            posttitle: "Best programming language to learn.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            authorName: "Jone",
            Date: "August 17, 2020",
        },
    ]
}

export const query = graphql`
  query getTag($id: String!) {
    tag: datoCmsTag(id: { eq: $id}) {
      title
      description
    }
    allPosts: allDatoCmsBlogPost(
      filter: { tags: { elemMatch: { id: { eq: $id } } } }
    ) {
      edges {
        node {
          title
          slug
          description
          contentNode{
            childMarkdownRemark{
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
  }
`

export default blog
