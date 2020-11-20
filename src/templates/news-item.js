import React from "react"
import { Link,graphql } from "gatsby"

import slugify from 'slugify';

import Layout from "../components/App/Layout"

import Sidebar from "../components/BlogDetails/Sidebar"
import Comment from "../components/BlogDetails/Comment"

const NewsItem = props => {
  const post = props.data.datoCmsBlogPost

  return (
    <Layout>
      <div className="bread-cumbs-area bread-cumbs-bg">
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

      <section id="blog" className="our-blog main-blog bg-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog-details">
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
                              <Link to={`tags/${slugify(tag.title.toLowerCase())}`}>{tag.title}</Link>
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
  query getNewsItem($id: String!) {
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
    }
  }
`

export default NewsItem
