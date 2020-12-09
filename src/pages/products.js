import React from "react"
import Layout from "../components/App/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    products: allDatoCmsProduct {
      edges {
        node {
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
        <Layout location="products">
          <div className="bread-cumbs-area bread-cumbs-bg">
            <div class="diplay-table"><div class="display-table-cell">
              <div class="container"><div class="row">
                <div class="col-lg-7">
                  <h1>Products</h1>
                  <p>prod·​uct (noun) : something that is marketed or sold as a commodity</p>
                </div>
              </div>
              </div>
            </div>
            </div>
          </div>

          <section id="news" className="our-news main-news bg-none">
            <div class="container">
              <div class="row">
                {productItems.map((productItem, key) => {
                  return (
                    <div key={key} class="col-md-6 col-lg-4">
                      <div class="news-card">
                        <div class="news-caption">
                          <h3>{productItem.title}</h3>
                          <p>{productItem.description}</p>

                          <Link className="read-more" to={`/products/${productItem.link}`}>
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </Layout>
    )
}

export default Products
