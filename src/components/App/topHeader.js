import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const TopHeader = () => {
  const data = useStaticQuery(graphql`
    query TopBar {
      datoCmsSiteConfig {
        email
        facebook
        twitter
        linkedin
        instagram
      }
    }
  `)
  // console.log("datoCmsSiteConfig DATA => ", data);
  const {
    email,
    facebook,
    twitter,
    linkedin,
    instagram,
  } = data.datoCmsSiteConfig

  return (
    <div id="home" className="top-header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="address-bar">
              <a href={`mailto:${email}`}>
                <i className="fa fa-envelope"></i> {email}
              </a>
            </div>
          </div>

          <div className="col-6">
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
                <li>
                  <a href={instagram}>
                    <i className="fa fa-instagram"></i>
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
