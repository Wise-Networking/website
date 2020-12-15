import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Banner = (props) => {
  const data = useStaticQuery(graphql`
      query HeroPageQuery {
        datoCmsHomePage {
          heroTopTitle
          heroTitle
          heroDescription
          heroButtonTitle
          heroImage {
            fluid(maxWidth: 600) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `)

  const {
    heroTopTitle,
    heroTitle,
    heroDescription,
    heroButtonTitle,
    heroImage,
  } = data.datoCmsHomePage

  return (
    <div className="hompage-slides-wrapper">
      <BackgroundImage
        Tag="div"
        className="single-slider-item"
        fluid={heroImage.fluid}
        backgroundColor={`#B68D40`}
      >
        <div className="diplay-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 banner-txt">
                  <span className="hero-text">{heroTopTitle}</span>
                  <h1>{heroTitle}</h1>
                  <p>{heroDescription}</p>
                  <div className="center-wrap">
                    <div className="button btn-a" onClick={props.onNewsLetter}>
                      {heroButtonTitle}
                      {` `}
                      <i className="fa fa-long-arrow-right"></i>
                      <div className="mask" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Banner
