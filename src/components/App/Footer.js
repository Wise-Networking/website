import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query Footer {
      datoCmsSiteConfig {
        facebook
        twitter
        linkedin
      }
    }
  `)

  const { facebook, twitter, linkedin } = data.datoCmsSiteConfig

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ul className="list-inline footer-privacy">
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-use">Terms Of Use</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <div className="social-icons-footer social-icons  bottom">
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
                  <p className="copyright">
                    © {new Date().getFullYear()} All Rights Reserved.
            </p>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-md-4">
            <p className="copyright">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
