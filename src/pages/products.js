import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/App/layout"

const getData = graphql`
  {
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

const Products = props => {
  const data = useStaticQuery(getData)

  const productItems = data.products.edges.map(node => node.node)

  return (
    <Layout
      location="products"
      keywords="products, wise networking"
      title="Products | Dandelions offers a number of different solutions for your IOT project. How can we help?"
      description="Dandelions offers a number of different solutions for your IOT project. How can we help?"
    >
      <section id="news" className="article our-news main-news bg-none ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 banner-txt article-header">
              <h1>Products</h1>
              <p>
                Dandelions offers a number of different solutions for your IOT
                project. How can we help?
              </p>
            </div>
          </div>
        </div>

        <div className="container article-img">
          <div className="bread-cumbs-area products-banner" />
        </div>

        <div className="container">
          <div className="row products-div">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <div className="row">
                {productItems.map((productItem, key) => {
                  return (
                    <div key={key} className="col-12 col-md-6 pb-4">
                      <Link key={key} to={`/products/${productItem.link}`}>
                        <div className="product-card">
                          <div className="product-caption">
                            <div className="text-center">
                              <span className="icon-wrapper">
                                <i className={productItem.icon}></i>
                              </span>
                            </div>
                            <h3>{productItem.title}</h3>
                            <p>{productItem.description}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Products
