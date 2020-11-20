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
    blogPosts: allDatoCmsBlogPost(limit: 3) {
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
              excerpt
            }
          }
        }
      }
    }
  }
`

const News = () => {
  const data = useStaticQuery(getData)

  console.log(data);

  const { newsTitle, newsDescription, newsBackgroundTitle } = data.dato

  const newsItems = data.blogPosts.edges.map(node => node.node)

  return (
    <section id="news" className="our-blog ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h2>{newsTitle}</h2>
              <p>{newsDescription}</p>
              <span className="section-title-bg">{newsBackgroundTitle}</span>
            </div>
          </div>
        </div>

        <div className="row">
          {newsItems.map((newsItem, key) => {
            return (
              <div key={key} className="col-md-6 col-lg-4">
                <div className="blog-card">
                  <Link to={`/news/${newsItem.slug}`}>
                    <Image
                      fluid={newsItem.featuredImage.fluid}
                      alt="blog-one"
                    />
                  </Link>

                  <div className="blog-caption">
                    <ul className="meta-tag">
                      <li>
                        <i className="fa fa-calendar"></i>{newsItem.publishedDate}
                      </li>
                    </ul>

                    <h3>
                      <Link to={`/news/${newsItem.slug}`}>
                        {newsItem.title}
                      </Link>
                    </h3>
                    <p>
                      {newsItem.contentNode.childMarkdownRemark.excerpt}
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
