import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from 'gatsby-image'

const getTeamImages = graphql`
  {
    image1: file(relativePath: { eq: "blog-one.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "blog-two.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "blog-three.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "blog-four.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
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

const Blog = () => {
  const data = useStaticQuery(getTeamImages)

  const { newsTitle, newsDescription, newsBackgroundTitle } = data.dato

  const blogPosts = data.blogPosts.edges.map(node => node.node)

  console.log({ blogPosts })
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
          {blogPosts.map(post => (
            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <Link to={`/blog/${post.slug}`}>
                  <Image
                    fluid={post.featuredImage.fluid}
                    alt="blog-one"
                  />
                </Link>

                <div className="blog-caption">
                  <ul className="meta-tag">
                    <li>
                      <i className="fa fa-calendar"></i>{post.publishedDate}
                    </li>
                  </ul>

                  <h3>
                  <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p>
                    {post.contentNode.childMarkdownRemark.excerpt}
                  </p>

                  <Link className="read-more" to="/blog-details">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="col-md-6 col-lg-4">
            <div className="blog-card">
              <Link to="/blog-details">
                <img
                  src={data.image1.childImageSharp.fluid.src}
                  alt="blog-one"
                />
              </Link>

              <div className="blog-caption">
                <ul className="meta-tag">
                  <li>
                    <i className="fa fa-user"></i> Admin
                  </li>
                  <li>
                    <i className="fa fa-calendar"></i>August 12, 2020
                  </li>
                </ul>

                <h3>
                  <Link to="/blog-details">
                    14 ridiculously cool websites you never know.
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>

                <Link className="read-more" to="/blog-details">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="blog-card">
              <Link to="/blog-details">
                <img
                  src={data.image2.childImageSharp.fluid.src}
                  alt="blog-one"
                />
              </Link>

              <div className="blog-caption">
                <ul className="meta-tag">
                  <li>
                    <i className="fa fa-user"></i> Admin
                  </li>
                  <li>
                    <i className="fa fa-calendar"></i>August 13, 2020
                  </li>
                </ul>

                <h3>
                  <Link to="/blog-details">
                    Top 10 hot marketing trends you need.
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>

                <Link className="read-more" to="/blog-details">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-0">
            <div className="blog-card">
              <Link to="/blog-details">
                <img
                  src={data.image3.childImageSharp.fluid.src}
                  alt="blog-one"
                />
              </Link>

              <div className="blog-caption">
                <ul className="meta-tag">
                  <li>
                    <i className="fa fa-user"></i> Admin
                  </li>
                  <li>
                    <i className="fa fa-calendar"></i>August 14, 2020
                  </li>
                </ul>

                <h3>
                  <Link to="/blog-details">
                    10 reasons you need a digital marketing strategy
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>

                <Link className="read-more" to="/blog-details">
                  Read More
                </Link>
              </div>
            </div>
          </div>
     */}
        </div>
      </div>
    </section>
  )
}

export default Blog
