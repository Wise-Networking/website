import React from "react"
import { Link, graphql } from "gatsby"

import slugify from 'slugify';

import Layout from "../components/App/Layout"

import Sidebar from "../components/BlogDetails/Sidebar"

const NewsItem = props => {
  const post = props.data.datoCmsBlogPost
  console.log("POST => ");
  console.log(post);
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


                    <div class="blog-info">
                      <div class="date-box">{post.publishDay}
                        <span class="month">{post.publishMonth}</span>
                      </div>
                      <div class="title-meta">
                        <h2>{post.title}</h2>
                        <div class="post-meta">
                          <ul>
                            <li><i class="fa fa-user"></i>Posted By:<a href="/our-people">{post.author}</a></li>
                            {/* <li><i class="fa fa-comments-o"></i>Comments:<a href="/blog-details/#">545</a></li> */}
                            <li>
                              <i class="fa fa-tags"></i>
                              {post.tags.map((tag, i) => (
                                <Link to={`/tag/${slugify(tag.title.toLowerCase())}`}>
                                  { tag.title = i != post.tags.length - 1 ? tag.title + "," : tag.title}
                                </Link>
                              ))}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>


                    <div
                      className="post-content"
                      dangerouslySetInnerHTML={{
                        __html: post.contentNode.childMarkdownRemark.html,
                      }}
                    />

                    {/* <div className="post-content">
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
                    </div> */}
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
      }
    }
  }
`

export default NewsItem
