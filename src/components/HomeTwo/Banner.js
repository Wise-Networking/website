import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Banner = props => {
  const data = useStaticQuery(
    graphql`
      query HeroPageQuery {
        datoCmsHomePage {
          heroTopTitle
          heroTitle
          heroDescription
          heroButtonTitle
          heroButtonUrl
          heroImage {
            fluid(maxWidth: 600) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `
  )

  const {
    heroTopTitle,
    heroTitle,
    heroDescription,
    heroButtonTitle,
    heroButtonUrl,
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
                <div className="col-lg-7">
                  <span className="hero-text">{heroTopTitle}</span>
                  <h1>{heroTitle}</h1>
                  <p>{heroDescription}</p>

                  <div className="center-wrap">
                    <div className="center-wrap">
                      <Link to={heroButtonUrl} className="btn-a">
                        <div className="button">
                          {heroButtonTitle}
                          {` `}
                          <i className="fa fa-long-arrow-right"></i>
                          <div className="mask" />
                        </div>
                      </Link>
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

// Props Types
Banner.propTypes = {
  TopTitle: PropTypes.string,
  Title: PropTypes.string,
  Content: PropTypes.string,
  BtnLink: PropTypes.string,
  BtnName: PropTypes.string,
}

// Default Props
Banner.defaultProps = {
  topTitle: "Clean & Creative",
  title: "We Are an Expert!",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget.",
  btnLink: "#",
  btnName: "get started",
}

export default Banner
