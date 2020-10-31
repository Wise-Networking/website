import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const TopHeader = () => {
  const data = useStaticQuery(graphql`
    query TopBar {
      datoCmsSiteConfig {
        email
        facebook
        twitter
        linkedin
      }
    }
  `)

  const { email, facebook, twitter, linkedin } = data.datoCmsSiteConfig
  return (
    <div id="home" className="top-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-8">
            <div className="address-bar">
              <ul className="list-inline">
                <li>
                  <a href={`mailto:${email}`}>
                    <i className="fa fa-envelope"></i> {email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-5 col-md-4">
            <div className="social-icons">
              <ul className="list-inline">
                <li>
                  <a href={facebook}>
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href={twitter}>
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={linkedin}>
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
