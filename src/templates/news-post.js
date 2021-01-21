import React from "react"
import { Link, graphql } from "gatsby"

import slugify from 'slugify';

import Layout from "../components/App/Layout"

import Sidebar from "../components/NewsDetails/Sidebar"

const NewsItem = props => {
  const post = props.data.datoCmsBlogPost

  var bannerStyle = {
    backgroundImage: 'url(' + post['featuredImage']?.url + ')'
  }

  return (
    <Layout keywords={post.keywords}>
      <div className="bread-cumbs-area" style={bannerStyle}>
        <div className="diplay-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                {/* <div className="col-lg-7 banner-txt">
                  <h1>{post.title}</h1>
                  <p>{post.description}</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="news" className="our-news main-news bg-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-12">
                  <div className="news-details">
                    <div className="news-info">
                      <div className="date-box">{post.publishDay}<span className="month">{post.publishMonth}</span></div>
                      <div className="title-meta">
                        <h1>{post.title}</h1>
                        <div className="post-meta">
                          <ul>
                            <li><i className="fa fa-user"></i><a href="/our-people">{post.author}</a></li>
                            <li>
                              <i className="fa fa-tags"></i>
                              {post.tags.map((tag, i) => (
                                <Link to={`/tags/${slugify(tag.link)}`}>
                                  { tag.title = i !== post.tags.length - 1 ? tag.title + "," : tag.title}
                                </Link>
                              ))}
                            </li>
                            <li><i className="fa fa-bars"></i><a href="/categories/">{post.category.title}</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <br/>
                    <div
                      className="post-content"
                      dangerouslySetInnerHTML={{
                        __html: post.contentNode.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                </div>
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
      publishDay: publishedDate(formatString:"DD")
      publishMonth : publishedDate(formatString:"MMM")
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      tags {
        title
        description
        link
      }
      category{
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
