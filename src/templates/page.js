import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/App/Layout"

export const query = graphql`
  query getPage($id: String!) {
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

const Page = props => {
  const page = props.data.datoCmsPage

  const {
    title,
    description,
    contentNode: {
      childMarkdownRemark: { html },
    },
  } = page

  return (
    <Layout location={title}>
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

      <section id="page" className="our-news main-news bg-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="news-details">
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

export default Page
