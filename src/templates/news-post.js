import React from "react"
import { Link, graphql } from "gatsby"
import { render } from "datocms-structured-text-to-html-string"

import slugify from "slugify"

import Layout from "../components/App/layout"
import Sidebar from "../components/NewsDetails/sideBar"
import options from "../utils/render-options"

const NewsItem = props => {
  const post = props.data.datoCmsBlogPost

  var bannerStyle = {
    backgroundImage: "url(" + post["featuredImage"]?.url + ")",
  }
  return (
    <Layout
      keywords={post.keywords}
      title={`News | ${post.title}`}
      description={post.description}
    >
      <div className="bread-cumbs-area" style={bannerStyle} />
      <section id="news" className="our-news main-news bg-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="news-details">
                <div className="news-info">
                  <div className="date-box">
                    {post.publishDay}
                    <span className="month">{post.publishMonth}</span>
                  </div>
                  <div className="title-meta">
                    <h1>{post.title}</h1>
                    <div className="post-meta">
                      <ul>
                        <li>
                          <i className="fa fa-user"></i>
                          <a href="/our-people">{post.author}</a>
                        </li>
                        <li>
                          <i className="fa fa-tags"></i>
                          {post.tags.map((tag, i) => (
                            <Link key={i} to={`/tags/${slugify(tag.link)}`}>
                              {
                                (tag.title =
                                  i !== post.tags.length - 1
                                    ? tag.title + ","
                                    : tag.title)
                              }
                            </Link>
                          ))}
                        </li>
                        <li>
                          <i className="fa fa-bars"></i>
                          <a href="/categories/">{post.category.title}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <br />
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{
                    __html: render(post.richText, options),
                  }}
                />
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getNewsPost($id: String!) {
    datoCmsBlogPost(id: { eq: $id }) {
      id
      title
      description
      slug
      author
      keywords
      publishDay: publishedDate(formatString: "DD")
      publishMonth: publishedDate(formatString: "MMM")
      richText {
        value
        blocks {
          __typename
          ... on DatoCmsImageBlock {
            id: originalId
            image {
              url
              title
              alt
            }
          }
        }
      }
      tags {
        title
        description
        link
      }
      category {
        title
        description
        link
      }
      featuredImage {
        url
      }
    }
  }
`

export default NewsItem
