import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/App/Layout"
import BackgroundImage from "gatsby-background-image"

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
    <Layout location="products" keywords={product.keywords}>
      <BackgroundImage
        Tag="div"
        className="bread-cumbs-area"
        fluid={featuredImage.fluid}
        backgroundColor={`#B68D40`}
      >
        <div className="diplay-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 banner-txt">
                  <h1>{title}</h1>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>

      <section id="products" className="our-news main-news bg-none">
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

export default Product
