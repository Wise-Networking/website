import React from "react"
import { graphql, useStaticQuery, Link, withPrefix } from "gatsby"

import AnchorLink from "react-anchor-link-smooth-scroll"

import TopHeader from "./topHeader"

const getLogo = graphql`
  {
    logo: file(relativePath: { eq: "logo_wise_new.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    logo2: file(relativePath: { eq: "logo_wise_new.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    links: datoCmsSiteConfig {
      navigationLinks {
        title
        url
        internalLink
      }
    }
  }
`
const NavBar = ({ homepage }) => {
  const data = useStaticQuery(getLogo)
  const [collapsed, setCollapsed] = React.useState(false)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  React.useEffect(() => {
    let elem = document.getElementById("navbar")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 46) {
        elem.classList.add("menu-shrink")
        elem.classList.add("fixed-top")
      } else {
        elem.classList.remove("menu-shrink")
        elem.classList.remove("fixed-top")
      }
    })
  }, [])

  const classOne = collapsed
    ? "collapse navbar-collapse justify-content-end"
    : "navbar-collapse collapse justify-content-end show"
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <React.Fragment>
      <TopHeader />

      <nav id="navbar" className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <Link className="navbar-brand logo" to="/">
            <img
              src={withPrefix("/dandelions-logo-primary.png")}
              alt="Dandelions"
              width={180}
              loading="lazy"
            />
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav">
              {data.links.navigationLinks.map((link, key) => {
                const { url, title, internalLink } = link
                let linkReturn = null
                if (url.startsWith("#") && !homepage) {
                  linkReturn = (
                    <AnchorLink
                      key={key}
                      onClick={toggleNavbar}
                      offset={() => 50}
                      className="nav-link"
                      href={url}
                    >
                      {title}
                    </AnchorLink>
                  )
                } else {
                  if (internalLink) {
                    linkReturn = (
                      <Link
                        key={key}
                        to={url}
                        className={
                          title !== "Contact Us"
                            ? "nav-link"
                            : "nav-link cta-link"
                        }
                        activeClassName="nav-link-active"
                      >
                        {title}
                      </Link>
                    )
                  } else {
                    linkReturn = (
                      <a key={key} href={url} className="nav-link">
                        {title}
                      </a>
                    )
                  }
                }

                return (
                  <li key={key} className="nav-item">
                    {linkReturn}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default NavBar
