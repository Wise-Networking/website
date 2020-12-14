import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/App/Layout"
import Image from "gatsby-image"
import Loadable from "@loadable/component"
const OwlCarousel = Loadable(() => import("react-owl-carousel3"))
export const query = graphql`
  query getPage($id: String!) {
    datoCmsPage(id: { eq: $id }) {
      id
      title
      description
      link
      keywords
      contentNode {
        childMarkdownRemark {
          html
        }
      }
    }
   allDatoCmsPerson {
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

const Page = props => {
  const page = props.data.datoCmsPage
  const [display, setDisplay] = useState(false)
  const persons = props.data.allDatoCmsPerson.edges.map(node => node.node)
  useEffect(() => {
    setDisplay(true)
  }, [])
  const {
    title,
    description,
    contentNode: {
      childMarkdownRemark: { html },
    },
  } = page


  return (
    <Layout location={title} keywords={page.keywords}>
      <div className={title === "Terms Of Use" ? 'bread-cumbs-area terms-of-use-banner' : title === "Privacy Policy" ? 'bread-cumbs-area privacy-policy-banner' : 'bread-cumbs-area our-people-banner'}>
        <div className="diplay-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 banner-txt">
                  <h1>{title}</h1>
                  <p>{description}</p>
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
              <div className="row">
                <div className="col-lg-12">
                  <div className="news-details">
                    <div className="post-content">
                      {title === "Our People" ?
                        <div>
                          <h1>{title}</h1>
                          <p>{description}</p>
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
                        :
                        <div
                          className="post-content"
                          dangerouslySetInnerHTML={{ __html: html }}
                        />
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div></div></div>
      </section>
    </Layout>
  )
}

export default Page
