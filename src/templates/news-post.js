import React from "react"
import { Link, graphql } from "gatsby"

import slugify from 'slugify';

import Layout from "../components/App/Layout"

import Sidebar from "../components/NewsDetails/Sidebar"

const NewsItem = props => {
  const post = props.data.datoCmsBlogPost

  var divStyle = {
    backgroundImage: 'url(' + post['blogBackgroundImage']?.url + ')'
  }

  return (
    <Layout>
      {/* <div className="bread-cumbs-area bread-cumbs-bg"> */}
      <div className="bread-cumbs-area" style={divStyle}>
        <div className="diplay-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1>{post.title}</h1>
                  <p>{post.description}</p>
                </div>
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
                    <div
                      className="post-content"
                      dangerouslySetInnerHTML={{
                        __html: post.contentNode.childMarkdownRemark.html,
                      }}
                    />

                    <div className="post-content">
                      <div className="post-tag-media">
                        <ul className="tag">
                          <li>
                            <span>Tags:</span>
                          </li>
                          {post.tags.map(tag => (
                            <li>
                              <Link to={`/tag/${slugify(tag.title.toLowerCase())}`}>{tag.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      tags {
        title
        description
      }
      blogBackgroundImage{
        url
      }
    }
  }
`

export default NewsItem
