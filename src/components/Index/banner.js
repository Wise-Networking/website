import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Banner = props => {
  const data = useStaticQuery(graphql`
    query HeroPageQuery {
      datoCmsHomePage {
        heroTopTitle
        heroTitle
        heroDescription
        heroButtonTitle
      }
    }
  `)

  const {
    heroTopTitle,
    heroDescription,
    heroButtonTitle,
  } = data.datoCmsHomePage

  console.log("banner => ", data.datoCmsHomePage)
  return (
    <div className="hompage-slides-wrapper">
      <div className="single-slider-item">
        <div className="hero-container">
          <div className="container">
            <div className="row">
              <div className="col-12 banner-txt">
                <span className="hero-text">{heroTopTitle}</span>
                <h1>
                  <span className="text-brand">Dandelions.</span>Cloud
                </h1>
                <p>{heroDescription}</p>
                <div className="center-wrap">
                  <div
                    className="button btn-a"
                    onClick={props.onNewsLetter}
                    onKeyDown={props.onNewsLetter}
                    role="button"
                    tabIndex="0"
                  >
                    {heroButtonTitle}
                    <i className="fa fa-chevron-right"></i>
                    <div className="mask" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
