import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from 'gatsby-image';

const getData = graphql`
  {
    titles: datoCmsHomePage {
      partnersTitle
      partnersDescription
      partnersBackgroundTitle
    }
    partners: allDatoCmsPartner {
      edges {
        node {
          title
          link
          image {
            fluid(maxWidth: 400) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`

const Partners = () => {
  const data = useStaticQuery(getData)

  const {
    partnersTitle,
    partnersDescription,
    partnersBackgroundTitle,
  } = data.titles

  const partners = data.partners.edges.map(node => node.node)

  return (
    <React.Fragment>
      <section id="partners" className="our-works ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h2>{partnersTitle}</h2>
                <p>{partnersDescription}</p>
                <span className="section-title-bg">
                  {partnersBackgroundTitle}
                </span>
              </div>
            </div>
          </div>

          <div id="partners" className="row">
            {
              partners.map((partner, key) => {

                const {title, link, image} = partner

                return (
                  <div key={key} className="col-sm-6 col-lg-4">
                    <div className="work-details">
                      <Image fluid={image.fluid}/>

                      <div className="box-content">
                        <h3 className="title">{title}</h3>
                        <ul className="icon">
                          <li>
                            <a href={link}>
                              <i className="fa fa-link"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Partners
