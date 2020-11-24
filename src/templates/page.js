import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/App/Layout"

const Page = props => {
  const product = props.data.datoCmsPage

  const {
    title,
    description,
    contentNode: {
      childMarkdownRemark: { html },
    },
  } = product

  return (
    <Layout location="home">
      <div className="bread-cumbs-area">
        <div className="diplay-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1>{title}</h1>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="blog" className="our-blog main-blog bg-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog-details">
                    <div
                      className="post-content"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPagge($id: String!) {
    datoCmsPage(id: { eq: $id }) {
      id
      title
      description
      link
      contentNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Page
