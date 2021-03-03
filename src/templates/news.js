import React from "react"
import { graphql, Link, navigate } from "gatsby"
import ReactPaginate from "react-paginate"
import Image from "gatsby-image"

import Layout from "../components/App/layout"

export const query = graphql`
  query getAllNews($skip: Int!, $limit: Int!) {
    allDatoCmsBlogPost(skip: $skip, limit: $limit,sort: {fields: publishedDate,order:DESC}) {
      edges {
        node {
          title
          slug
          author
          category{
            title
          }
          publishedDate(formatString:"MMMM DD, YYYY")
          description
          contentNode {
            childMarkdownRemark {
              newsItemDescription:excerpt
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

const News = props => {
  const { data } = props
  const { pathContext } = props
  const posts = data.allDatoCmsBlogPost.edges.map(node => node.node)
  
  const newsPosts = posts.map((post, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="news-card">
        <Link to={`/news/${post.slug}`} className="news-img">
          <Image fluid={post.featuredImage.fluid} />
          {/* <h3 className="news-title"><span>{post.title}</span></h3> */}
        </Link>
        <div className="news-caption">
          <ul className="meta-tag">
            <li>
              <Link to={`/our-people`} className="news-link-cls">
                <i className="fa fa-bars"></i>
                {/* {post.author} */}
                {post.category.title}
              </Link>
            </li>
            <li>
              <i className="fa fa-calendar"></i>
              {post.publishedDate}
            </li>
          </ul>

          <p>{post.contentNode.childMarkdownRemark.newsItemDescription}</p>

          <Link className="read-more" to={`/news/${post.slug}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  ))

  return (
    <Layout location="news" keywords="news, wise networking" title="News | Stories from the world of On Demand IOT, Emergency Services and Space Logistics" description="Stories from the world of On Demand IOT, Emergency Services and Space Logistics">
      <div className="bread-cumbs-area news-banner">
        <div className="diplay-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 banner-txt">
                  <h1>News</h1>
                  <p>Stories from the world of On Demand IOT, Emergency Services and Space Logistics</p>
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

export default News
