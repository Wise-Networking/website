import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    titles: datoCmsHomePage {
      aboutUsTitle
      aboutUsDescription
    }
    allAbouts: allDatoCmsAbout {
      edges {
        node {
          title
          description
          image {
            url
            title
          }
        }
      }
    }
  }
`

const AboutUs = () => {
  const contentData = useStaticQuery(getData)

  const { aboutUsTitle, aboutUsDescription } = contentData.titles

  const aboutPosts = contentData.allAbouts.edges.map(item => item.node)

  const posts = aboutPosts.map((post, index) => {
    return (
      <div key={index} className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-text">
            <h3>{post.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
          </div>
        </div>
        <div className="col-lg-6 about-img-div">
          <img
            src={post.image.url}
            alt={post.image.title}
            className="about-desc-image"
            title={post.image.title}
            loading="lazy"
          />
        </div>
      </div>
    )
  })

  return (
    <div id="about-us" className="about-us ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>{aboutUsTitle}</h2>
              <p dangerouslySetInnerHTML={{ __html: aboutUsDescription }}></p>
            </div>
          </div>
        </div>
        {posts}
      </div>
    </div>
  )
}

export default AboutUs
