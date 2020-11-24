import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

const getData = graphql`
  query AllProducts {
    titles: datoCmsHomePage {
      productsTitle
      productBackgroundTitle
      productDescription
    }
    products: allDatoCmsProduct {
      edges {
        node {
          icon
          title
          description
          link
        }
      }
    }
  }
`

const Products = () => {
  const data = useStaticQuery(getData)

  const {
    productsTitle,
    productBackgroundTitle,
    productDescription,
  } = data.titles

  const products = data.products.edges.map(node => node.node)

  const productsData = products.map((product, index) => (
    <div key={index} className="col-md-6 col-lg-6 text-center">
      <Link
        className="read-more"
        to={`products/${product.link}`}
        style={{
          color: "unset",
        }}
      >
        <div className="service-item">
          <div className="glyph">
            <i className={product.icon}></i>
          </div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      </Link>
    </div>
  ))

  return (
    <section id="products" className="services ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h2>{productsTitle}</h2>
              <p>{productDescription}</p>
              <span className="section-title-bg">{productBackgroundTitle}</span>
            </div>
          </div>
        </div>
        <div className="row">{productsData}</div>
      </div>
    </section>
  )
}

export default Products
