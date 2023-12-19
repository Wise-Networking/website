import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/App/layout"

export const query = graphql`
  query getProduct($id: String!) {
    datoCmsProduct(id: { eq: $id }) {
      icon
      title
      description
      keywords
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      featuredImage {
        fluid(maxWidth: 600) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

const Product = props => {
  const product = props.data.datoCmsProduct

  const {
    title,
    description,
    contentNode: {
      childMarkdownRemark: { html },
    },
    featuredImage,
  } = product

  return (
    <Layout
      location="products"
      keywords={product.keywords}
      title={`Product | ${title}`}
      description={description}
    >
      <section
        id="products"
        className="article our-news main-news bg-none ptb-100"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 banner-txt article-header">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="container article-img">
          <BackgroundImage
            Tag="div"
            className="bread-cumbs-area"
            fluid={featuredImage.fluid}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <div className="news-details img-details">
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{
                    __html: html.replace('sizes="', ""),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Product
