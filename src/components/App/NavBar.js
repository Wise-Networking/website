import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import AnchorLink from "react-anchor-link-smooth-scroll"

import TopHeader from "./TopHeader"

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
      if (window.scrollY > 170) {
        elem.classList.add("menu-shrink")
        elem.classList.add("fixed-top")
      } else {
        elem.classList.remove("menu-shrink")
        elem.classList.remove("fixed-top")
      }
    })
    window.scrollTo(0, 0)
    menuActiveClass()
  }, [])

  const menuActiveClass = () => {
    let mainNavLinks = document.querySelectorAll(".navbar-nav li a")
    window.addEventListener("scroll", () => {
      let fromTop = window.scrollY
      mainNavLinks.forEach(link => {
        if (link.hash) {
          let section = document.querySelector(link.hash)
          if (!section) return
          if (
            section.offsetTop <= (fromTop + 20) &&
            section.offsetTop + section.offsetHeight >= (fromTop + 20)
          ) {
            link.classList.add("active")
          } else {
            link.classList.remove("active")
          }
        }
      })
    })
  }

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "navbar-collapse collapse show"
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <React.Fragment>
      <TopHeader />

      <nav id="navbar" className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <Link
            className="navbar-brand logo logo-one"
            to="/"
          >
            <img src={data.logo.childImageSharp.fixed.src} alt="Logo" />
          </Link>
          <Link className="navbar-brand logo-2" to="/">
            <img
              className="img-fluid img-logo-2"
              style={{
                maxWidth: "46%",
              }}
              src={data.logo2.childImageSharp.fixed.src}
              alt="Logo"
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
            <ul className="navbar-nav ml-auto">
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
                        className="nav-link"
                      // activeClassName="active"
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

                return <li key={key} className="nav-item">{linkReturn}</li>
              })}
            </ul>
          </div>

        </div>
      </nav>
    </React.Fragment>
  )
}

export default NavBar
