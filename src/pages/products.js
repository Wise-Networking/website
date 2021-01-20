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
    <Layout location="products" keywords="products, wise networking">
      <div className="bread-cumbs-area products-banner">
        <div className="diplay-table"><div className="display-table-cell">
          <div className="container"><div className="row">
            <div className="col-lg-7 banner-txt">
              <h1>Products</h1>
              <p>prod·​uct (noun) : something that is marketed or sold as a commodity</p>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>

      <section id="news" className="our-news main-news bg-none">
        <div className="container">
          <div className="row products-div">
            {productItems.map((productItem, key) => {
              return (
                <div key={key} className="col-md-6 col-lg-4">
                  <div className="news-card">
                    <div className="news-caption">
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
