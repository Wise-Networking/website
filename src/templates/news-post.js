/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"
import { Link, graphql } from "gatsby"
import { StructuredText } from "react-datocms"
import {
  FacebookEmbed,
  InstagramEmbed,
  LinkedInEmbed,
  TwitterEmbed,
  YouTubeEmbed,
} from "react-social-media-embed"

import slugify from "slugify"

import Layout from "../components/App/layout"
import Sidebar from "../components/NewsDetails/sideBar"

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
      <section
        id="news"
        className="article our-news main-news bg-none ptb-100 pb-0"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 banner-txt article-header">
              <h1>{post.title}</h1>
              <div className="my-4 text-dark">
                Posted on{" "}
                <span style={{ textTransform: "capitalize" }}>
                  {post.publishedDate}
                </span>
                {" by "}
                <strong>
                  <Link to="/our-people" className="text-dark">
                    {post.author}
                  </Link>
                </strong>
              </div>
            </div>
          </div>
        </div>

        <div className="container article-img">
          <div className="bread-cumbs-area" style={bannerStyle} />
        </div>

        <div className="container pb-5">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <div className="news-details img-details">
                <div className="news-info">
                  <div className="title-meta"></div>
                </div>
                <br />
                <div className="post-content">
                  <StructuredText
                    data={post.richText}
                    renderBlock={({ record }) => {
                      switch (record.__typename) {
                        case "DatoCmsImageBlock":
                          return (
                            <figure>
                              <img
                                src={record.image.url}
                                alt={record.image.alt}
                              />
                              <figcaption style={{ textAlign: "center" }}>
                                {record.image.title}
                              </figcaption>
                            </figure>
                          )
                        case "DatoCmsYoutube":
                          return (
                            <div className="block-container block-container--youtube">
                              <YouTubeEmbed url={record.url} />
                            </div>
                          )
                        case "DatoCmsTwitter":
                          return (
                            <div className="block-container">
                              <TwitterEmbed url={record.url} width={480} />
                            </div>
                          )
                        case "DatoCmsLinkedin":
                          return (
                            <div className="block-container">
                              <LinkedInEmbed
                                url={record.url}
                                width={480}
                                height={640}
                              />
                            </div>
                          )
                        case "DatoCmsFacebook":
                          return (
                            <div className="block-container">
                              {typeof window !== "undefined" && (
                                <FacebookEmbed url={record.url} width={480} />
                              )}
                            </div>
                          )
                        case "DatoCmsInstagram":
                          return (
                            <div className="block-container">
                              <InstagramEmbed url={record.url} width={480} />
                            </div>
                          )
                        case "DatoCmsVideo":
                          return (
                            <div>
                              <video width="100%" controls="controls">
                                <source
                                  src={record.video.url}
                                  type={`video/${record.video.format}`}
                                />
                              </video>
                            </div>
                          )
                        default:
                          return null
                      }
                    }}
                  />
                </div>
                <div className="pt-5 text-center">
                  <div className="tag-container">
                    {post.tags.map(tag => (
                      <Link to={`/tags/${slugify(tag.title.toLowerCase())}`}>
                        <span className="tag">{tag.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-container">
          <div className="container">
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
      publishedDate(formatString: "MMM DD, YYYY")
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
          ... on DatoCmsYoutube {
            id: originalId
            url
          }
          ... on DatoCmsTwitter {
            id: originalId
            url
          }
          ... on DatoCmsLinkedin {
            id: originalId
            url
          }
          ... on DatoCmsFacebook {
            id: originalId
            url
          }
          ... on DatoCmsInstagram {
            id: originalId
            url
          }
          ... on DatoCmsVideo {
            id: originalId
            video {
              format
              url
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
