import React from "react"
import { Link, graphql, navigate } from "gatsby"
import slugify from "slugify"
import ReactPaginate from "react-paginate"
import Image from "gatsby-image"
import { render } from "datocms-structured-text-to-plain-text"

import Layout from "../components/App/layout"
import trimString from "../utils/trim-string"

const news = props => {
  const { data } = props
  const tag = data.tag
  const slug = slugify(tag.title.toLowerCase())
  const posts = data.allPosts.edges.map(node => node.node)
  const { pathContext } = props

  const newsPosts = posts.map((post, index) => (
    <div className="col-md-6 col-lg-4 mb-4" key={index}>
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
            <h1 className="news-title">{post.title}</h1>
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
      keywords={tag.keywords}
      title={`Tags | ${tag.title}`}
      description={tag.description}
    >
      <section id="news" className="article our-news main-news bg-none ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 banner-txt article-header">
              <h1>
                Tag / <span className="text-brand">{tag.title}</span>
              </h1>
              <p>{tag.description}</p>
            </div>
          </div>
        </div>

        <div className="container article-img">
          <div className="bread-cumbs-area tags-banner" />
        </div>

        <div className="container">
          <div className="row">
            {newsPosts}
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
                  let navigateTo = `/tags/${slug}`

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
  query getTag($id: String!, $skip: Int!, $limit: Int!) {
    tag: datoCmsTag(id: { eq: $id }) {
      title
      description
      keywords
    }
    allPosts: allDatoCmsBlogPost(
      skip: $skip
      limit: $limit
      filter: { tags: { elemMatch: { id: { eq: $id } } } }
    ) {
      edges {
        node {
          title
          slug
          description
          author
          category {
            title
          }
          publishedDate(fromNow: true)
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

export default news
