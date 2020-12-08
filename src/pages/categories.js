import React from "react"
import Layout from "../components/App/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"


const Categories = props => {

    const data = useStaticQuery(getData)


    const categoriesItems = data.categories.edges.map(node => node.node)

    return (
        <Layout location="categories">
            <div className="bread-cumbs-area bread-cumbs-bg">
                <div class="diplay-table"><div class="display-table-cell">
                    <div class="container"><div class="row">
                        <div class="col-lg-7">
                            <h1>Our Categories</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <section id="news" className="our-news main-news bg-none">
                <div class="container">
                    <div class="row">
                        {categoriesItems.map((categoryItem, key) => {
                            return (
                                <div key={key} class="col-md-6 col-lg-4">
                                    <div class="news-card">
                                        <div class="news-caption">
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


export default Categories