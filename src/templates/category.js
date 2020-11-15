import React from 'react'
import {Link,graphql} from 'gatsby'
import PropTypes from "prop-types"
import Layout from '../components/App/Layout'
import Image from 'gatsby-image'

const blog = (props) => {
    const {data} = props;
    const category = data.category;

    const posts = data.allPosts.edges.map( node => node.node)

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
                      <h1>Category: {category.title}</h1>
                      <p>{category.description}</p>
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


export const query = graphql`
  query getCategory($id: String!) {
    category: datoCmsCategory(id: { eq: $id}) {
      title
      description
    }
    allPosts: allDatoCmsBlogPost(
      filter: { category: {  id: { eq: $id } } }
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
