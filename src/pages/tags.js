import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/App/layout"

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

const Tags = props => {
  const data = useStaticQuery(getData)

  const tagsItems = data.tags.edges.map(node => node.node)

  return (
    <Layout location="tags" keywords="tags, wise networking" title="Tags | tag (noun) : a descriptive or identifying epithet" description="tag (noun) : a descriptive or identifying epithet">
      <div className="bread-cumbs-area tags-banner">
        <div className="diplay-table"><div className="display-table-cell">
          <div className="container"><div className="row">
            <div className="col-lg-7 banner-txt">
              <h1>Tags</h1>
              <p>tag (noun) : a descriptive or identifying epithet</p>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>

      <section id="news" className="our-news main-news bg-none">
        <div className="container">
          <div className="row">
            {tagsItems.map((tagsItem, key) => {
              return (
                <div key={key} className="col-md-6 col-lg-4">
                  <div className="news-card">
                    <div className="news-caption">
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

export default Tags
