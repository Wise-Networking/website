import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Image from 'gatsby-image'

const getData = graphql`
  {
    dato: datoCmsHomePage {
      newsTitle
      newsDescription
      newsBackgroundTitle
    }
    newsPosts: allDatoCmsBlogPost(limit: 3,sort: {fields: publishedDate,order:DESC}) {
      edges {
        node {
          title
          slug
          featuredImage {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          publishedDate(formatString:"MMMM DD, YYYY")
          contentNode {
            childMarkdownRemark {
              newsItemDescription:excerpt
            }
          }
          author
          category{
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
  console.log("NEWS ITEMS => ", newsItems);
  return (
    <section id="news" className="our-news ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h2>{newsTitle}</h2>
              <p dangerouslySetInnerHTML={{ __html: newsDescription }}></p>
            </div>
          </div>
        </div>

        <div className="row">
          {newsItems.map((newsItem, key) => {
            return (
              <div key={key} className="col-md-6 col-lg-4">
                <div className="news-card">
                  <Link to={`/news/${newsItem.slug}`}>
                    <Image
                      fluid={newsItem.featuredImage.fluid}
                      alt="news-one"
                    />
                  </Link>

                  <div className="news-caption">
                    <ul className="meta-tag">
                      <li>
                        <Link to={`/our-people`} className="news-link-cls">
                          <i className="fa fa-bars"></i>
                          {/* {newsItem.author} */}
                          {newsItem.category.title}
                        </Link>
                      </li>
                      <li>
                        <i className="fa fa-calendar"></i>{newsItem.publishedDate}
                      </li>
                    </ul>
                    <p>
                      {newsItem.contentNode.childMarkdownRemark.newsItemDescription}
                    </p>

                    <Link className="read-more" to={`/news/${newsItem.slug}`}>
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
  )
}

export default News
