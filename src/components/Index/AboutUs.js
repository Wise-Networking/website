import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

const getData = graphql`
  {
    titles: datoCmsHomePage {
      aboutUsTitle
      aboutUsDescription
      aboutUsBackgroundTitle
    }
    allAbouts: allDatoCmsAbout {
      edges {
        node {
          title
          description
          image {
            url
          }
        }
      }
    }
  }
`

const AboutUs = () => {
  const contentData = useStaticQuery(getData);

  const { aboutUsTitle, aboutUsDescription, aboutUsBackgroundTitle } = contentData.titles;

  const aboutPosts = contentData.allAbouts.edges.map(item => item.node);

  const posts = aboutPosts.map(post => {
    return (
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-text">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={post.image.url} alt="Image" />
        </div>
      </div>
    )
  })

  return (
    <div id="about-us" className="about-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title text-center">
              <h2>{aboutUsTitle}</h2>
              <p>{aboutUsDescription}</p>
              <span className="section-title-bg">{aboutUsBackgroundTitle}</span>
            </div>
          </div>
        </div>
        {posts}
      </div>
    </div>
  )
}

export default AboutUs;
