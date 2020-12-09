import React from "react"
import { Link, graphql, navigate } from "gatsby"
import slugify from 'slugify'
import ReactPaginate from "react-paginate"
import Layout from "../components/App/Layout"
import Image from "gatsby-image"

const news = props => {
  const { data } = props
  const category = data.category
  const slug = slugify(category.title.toLowerCase())
  const posts = data.allPosts.edges.map(node => node.node)
  const { pathContext } = props;

  const newsPosts = posts.map((post, index) => (
    <div className="col-md-6 col-lg-4" key={index}>
      <div className="news-card">
        <Link to={`/news/${post.slug}`} className="news-img">
          <Image fluid={post.featuredImage.fluid} />
        </Link>

        <div className="news-caption">
          <ul className="meta-tag">
            <li>
              <i className="fa fa-user"></i>
            </li>
            <li>
              <i className="fa fa-calendar"></i>
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
    <Layout location="news">
      <div className="bread-cumbs-area categories-banner">
        <div className="diplay-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 banner-txt">
                  <h1>Category: {category.title}</h1>
                  <p>{category.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="news" className="our-news main-news bg-none">
        <div className="container">
          <div className="row">{newsPosts}</div>
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
              onPageChange={(value) => {
                const selectedPage = value.selected + 1
                let navigateTo = `/categories/${slug}`

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
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getCategory($id: String!, $skip: Int!, $limit: Int!) {
    category: datoCmsCategory(id: { eq: $id }) {
      title
      description
    }
    allPosts: allDatoCmsBlogPost(
      skip: $skip
      limit: $limit
      filter: { category: { id: { eq: $id } } }
    ) {
      edges {
        node {
          title
          slug
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

export default news
