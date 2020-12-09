
import React, { useEffect, useState } from "react"
import Layout from "../components/App/Layout"
import Loadable from "@loadable/component"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const OwlCarousel = Loadable(() => import("react-owl-carousel3"))
const getData = graphql`
  {
    titles: datoCmsHomePage {
      ourPeopleTitle
      ourPeopleDescription
    }
    persons: allDatoCmsPerson {
      edges {
        node {
          name
          post
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          linkedinUrl
        }
      }
    }
  }
`
export default function OurPeople() {
  const data = useStaticQuery(getData)

  const [display, setDisplay] = useState(false)

  const {
    ourPeopleTitle,
    ourPeopleDescription,
  } = data.titles

  const persons = data.persons.edges.map(node => node.node)
  useEffect(() => {
    setDisplay(true)
  }, [])

  return (
    <Layout>
      <div className="bread-cumbs-area our-people-banner">
        <div className="diplay-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 banner-txt">
                  <h1>{ourPeopleTitle}</h1>
                  <p>{ourPeopleDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="page" className="our-news main-news bg-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="news-details">
                <div className="post-content">
                  <h2>{ourPeopleTitle}</h2>
                  <p>{ourPeopleDescription}</p>

                  {display ? (
                    <OwlCarousel
                      className="owl-theme team-slides people-carousel"
                      dots={false}
                      autoplay={true}
                      loop={true}
                      margin={30}
                      nav={true}
                      center={true}
                      smartSpeed={1000}
                      autoplayHoverPause={true}
                      navText={[
                        "<i class='fa fa-chevron-left'></i>",
                        "<i class='fa fa-chevron-right'></i>",
                      ]}
                      responsive={{
                        0: {
                          items: 1,
                          center: false,
                        },
                        576: {
                          items: 2,
                          center: false,
                          margin: 15,
                        },
                        768: {
                          items: 2,
                          center: false,
                        },
                        1024: {
                          items: 3,
                        },
                        1200: {
                          items: 3,
                        },
                      }}
                    >
                      {persons.map((person, key) => {
                        return (
                          <div key={key} className="team-box">
                            <Image fluid={person.image.fluid} style={{ borderRadius: 500 }} />
                            <div className="box-content">
                              <div className="box-inner-content">
                                <h3 className="title">{person.name}</h3>
                                <span className="post">{person.post}</span>
                                {person.linkedinUrl && (
                                  <ul className="icon">
                                    <li>
                                      <a
                                        className="fa fa-linkedin"
                                        href={person.linkedinUrl}
                                      ></a>
                                    </li>
                                  </ul>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </OwlCarousel>
                  ) : (
                      ""
                    )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
