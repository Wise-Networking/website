import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Splide, SplideSlide } from "@splidejs/react-splide"

const splideOptions = {
  autoplay: true,
  type: "loop",
  perPage: 3,
  padding: "3rem",
  gap: "1rem",
  breakpoints: {
    640: {
      perPage: 1,
    },
  },
}

const getData = graphql`
  {
    titles: datoCmsHomePage {
      partnersTitle
      partnersDescription
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

  const { partnersTitle, partnersDescription } = data.titles

  const partners = data.partners.edges.map(node => node.node)

  const partnersData = partners.map((partner, index) => {
    const { title, link, image } = partner
    return (
      <SplideSlide key={index}>
        <div className="work-details">
          <Image fluid={image.fluid} />

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
      </SplideSlide>
    )
  })

  return (
    <React.Fragment>
      <section id="partners" className="our-works ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title">
                <h2>{partnersTitle}</h2>
                <p>{partnersDescription}</p>
              </div>
            </div>
          </div>

          <div id="partners" className="row">
            <div className="col-12">
              <Splide options={splideOptions} aria-label="Dandelions Partners">
                {partnersData}
              </Splide>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Partners
