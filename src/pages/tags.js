import React from "react"
import Layout from "../components/App/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"


const Tags = props => {

    const data = useStaticQuery(getData)


    const tagsItems = data.tags.edges.map(node => node.node)

    return (
        <Layout location="tags">
            <div className="bread-cumbs-area bread-cumbs-bg">
                <div class="diplay-table"><div class="display-table-cell">
                    <div class="container"><div class="row">
                        <div class="col-lg-7">
                            <h1>Our Tags</h1>
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
                        {tagsItems.map((tagsItem, key) => {
                            return (
                                <div key={key} class="col-md-6 col-lg-4">
                                    <div class="news-card">
                                        <div class="news-caption">
                                            <h3>{tagsItem.title}</h3>
                                            <p>{tagsItem.description}</p>
                                            <Link className="read-more" to={`/tags/${tagsItem.link}`}>
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
    
    tags: allDatoCmsTag {
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
export default Tags