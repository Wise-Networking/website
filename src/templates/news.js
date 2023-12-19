import React from "react"
import { graphql, Link, navigate } from "gatsby"
import ReactPaginate from "react-paginate"
import Image from "gatsby-image"
import { render } from "datocms-structured-text-to-plain-text"
import slugify from "slugify"

import Layout from "../components/App/layout"
import trimString from "../utils/trim-string"

export const query = graphql`
  query getAllNews($skip: Int!, $limit: Int!) {
    allDatoCmsBlogPost(
      skip: $skip
      limit: $limit
      sort: { fields: publishedDate, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          author
          category {
            title
          }
          publishedDate(fromNow: true)
          description
          richText {
            value
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
    <div key={index} className="col-md-6 col-lg-4 mb-4">
      <div className="news-card">
        <Link to={`/news/${post.slug}`} className="news-img">
          <Image fluid={post.featuredImage.fluid} />
        </Link>

        <div className="news-caption">
          <div className="meta-tag text-dark">
            {post.publishedDate} /{" "}
            <Link
              to={`/categories/${slugify(post.category.title.toLowerCase())}`}
              className="text-brand"
            >
              {post.category.title}
            </Link>
          </div>
          <Link to={`/news/${post.slug}`}>
            <h1 className="news-title text-black">{post.title}</h1>
          </Link>
          <Link to={`/news/${post.slug}`}>
            <p className="text-dark">{trimString(render(post.richText))}</p>
          </Link>
        </div>
      </div>
    </div>
  ))

  return (
    <Layout
      location="news"
      keywords="news, wise networking"
      title="News | Stories from the world of On Demand IOT, Emergency Services and Space Logistics"
      description="Stories from the world of On Demand IOT, Emergency Services and Space Logistics"
    >
      <section id="news" className="article our-news main-news bg-none ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 banner-txt article-header">
              <h1>News</h1>
              <p>
                Stories from the world of On Demand IOT, Emergency Services and
                Space Logistics
              </p>
            </div>
          </div>
        </div>

        <div className="container article-img">
          <div className="bread-cumbs-area news-banner" />
        </div>

        <div className="container">
          <div className="row">{newsPosts}</div>
          <div className="row">
            <div className="col-lg-12 pagination-area text-center">
              <ReactPaginate
                previousLabel="&laquo;"
                nextLabel="&raquo;"
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
