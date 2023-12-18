import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { render } from "datocms-structured-text-to-plain-text"
import slugify from "slugify"

import Image from "gatsby-image"

import trimString from "../../utils/trim-string"

const getData = graphql`
  {
    dato: datoCmsHomePage {
      newsTitle
      newsDescription
      newsBackgroundTitle
    }
    newsPosts: allDatoCmsBlogPost(
      limit: 3
      sort: { fields: publishedDate, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          featuredImage {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          publishedDate(fromNow: true)
          richText {
            value
          }
          author
          category {
            title
          }
        }
      }
    }
  }
`

const News = () => {
  const data = useStaticQuery(getData)

  const { newsTitle, newsDescription } = data.dato

  const newsItems = data.newsPosts.edges.map(node => node.node)

  return (
    <section id="news" className="our-news ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>{newsTitle}</h2>
              <p dangerouslySetInnerHTML={{ __html: newsDescription }}></p>
            </div>
          </div>
        </div>

        <div className="row">
          {newsItems.map((newsItem, key) => {
            return (
              <div key={key} className="col-12 col-md-6 col-lg-4">
                <div className="news-card">
                  <Link to={`/news/${newsItem.slug}`}>
                    <Image
                      fluid={newsItem.featuredImage.fluid}
                      alt="news-one"
                    />
                  </Link>

                  <div className="news-caption">
                    <div className="meta-tag">
                      {newsItem.publishedDate} /{" "}
                      <Link
                        to={`/categories/${slugify(
                          newsItem.category.title.toLowerCase()
                        )}`}
                        className="text-brand"
                      >
                        {newsItem.category.title}
                      </Link>
                    </div>
                    <Link to={`/news/${newsItem.slug}`}>
                      <h1 className="news-title">{newsItem.title}</h1>
                    </Link>
                    <Link to={`/news/${newsItem.slug}`}>
                      <p>{trimString(render(newsItem.richText))}</p>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default News
