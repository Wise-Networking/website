import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"

const getData = graphql`
  query AllProducts {
    titles: datoCmsHomePage {
      productsTitle
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

  const { productsTitle, productDescription } = data.titles

  const products = data.products.edges.map(node => node.node)
  // console.log("PRODUCTS ==> ", products);
  const productsData = products.map((product, index) => (
    <div key={index} className="col-12 col-md-6 col-lg-3">
      <Link
        className="read-more"
        to={`products/${product.link}`}
        style={{
          color: "unset",
        }}
      >
        <div className="service-item">
          <div className="text-center">
            <i className={product.icon}></i>
          </div>
          <h3 className="text-brand">{product.title}</h3>
          <p>{product.description}</p>
        </div>
      </Link>
    </div>
  ))

  return (
    <section id="products" className="services ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>{productsTitle}</h2>
              <p dangerouslySetInnerHTML={{ __html: productDescription }}></p>
            </div>
          </div>
        </div>
        <div className="row">{productsData}</div>
      </div>
    </section>
  )
}

export default Products
