import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/App/layout"

const getData = graphql`
  {
    categories: allDatoCmsCategory {
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

const Categories = props => {
  const data = useStaticQuery(getData)

  const categoriesItems = data.categories.edges.map(node => node.node)
  return (
    <Layout location="categories" keywords="categories, wise networking" description={`cat·​e·​go·​ry (noun) : any of several fundamental and distinct classes to which entities or concepts belong`}>
      <div className="bread-cumbs-area categories-banner">
        <div className="diplay-table"><div className="display-table-cell">
          <div className="container"><div className="row">
            <div className="col-lg-7 banner-txt">
              <h1>Categories</h1>
              <p>cat·​e·​go·​ry (noun) : any of several fundamental and distinct classes to which entities or concepts belong</p>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
      <section id="news" className="our-news main-news bg-none">
        <div className="container">
          <div className="row">
            {categoriesItems.map((categoryItem, key) => {
              return (
                <div key={key} className="col-md-6 col-lg-4">
                  <div className="news-card">
                    <div className="news-caption">
                      <h3>{categoryItem.title}</h3>
                      <p>{categoryItem.description}</p>

                      <Link className="read-more" to={`/categories/${categoryItem.link}`}>
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

export default Categories
