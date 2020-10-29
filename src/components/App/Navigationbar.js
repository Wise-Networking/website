import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import TopHeader from './TopHeader'
import SearchModal from './SearchModal'
const getLogo = graphql`
{
    logo: file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        fixed {
            ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    logo2: file(relativePath:{eq: "logo2.png"}) {
      childImageSharp{
        fixed{
            ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
}
`
const Navigationbar = () => {
    const data = useStaticQuery(getLogo)
    const [collapsed, setCollapsed] = React.useState(false)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }

    React.useEffect(() => {
        let elem = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("menu-shrink");
                elem.classList.add("fixed-top");
            } else {
                elem.classList.remove("menu-shrink");
                elem.classList.remove("fixed-top");
            }
        });
        window.scrollTo(0, 0);

        menuActiveClass()
    }, [])
 
    const menuActiveClass = () => {
        let mainNavLinks = document.querySelectorAll(".navbar-nav li a");
        window.addEventListener("scroll", () => {
            let fromTop = window.scrollY;
            mainNavLinks.forEach(link => {
                if (link.hash){
                    let section = document.querySelector(link.hash);
            
                    if (
                        section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                }
            });
        });
    }

    const classOne = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <TopHeader />

            <nav id="navbar" className="navbar navbar-expand-md navbar-light">
                <div className="container">
                    <Link className="navbar-brand logo" to="/">
                        <img 
                            src={data.logo.childImageSharp.fixed.src}
                            alt="Logo" 
                        />
                    </Link>
                    <Link className="navbar-brand logo-2" to="/">
                        <img 
                            className="img-fluid" 
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
                            <li className="nav-item">
                                <AnchorLink 
                                    onClick={toggleNavbar} 
                                    offset={() => 50} 
                                    className="nav-link active" 
                                    href="#home"
                                >
                                    Home
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink 
                                    onClick={toggleNavbar} 
                                    offset={() => -10} 
                                    className="nav-link" 
                                    href="#services"
                                >
                                    Services
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink 
                                    onClick={toggleNavbar} 
                                    offset={() => -10} 
                                    className="nav-link" 
                                    href="#works"
                                >
                                    Works
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink 
                                    onClick={toggleNavbar} 
                                    offset={() => -10} 
                                    className="nav-link" 
                                    href="#about"
                                >
                                    About
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink 
                                    onClick={toggleNavbar} 
                                    offset={() => -10} 
                                    className="nav-link" 
                                    href="#team"
                                >
                                    Team
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink 
                                    onClick={toggleNavbar} 
                                    offset={() => -10} 
                                    className="nav-link" 
                                    href="#pricing"
                                >
                                    Pricing
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink 
                                    onClick={toggleNavbar} 
                                    offset={() => -10} 
                                    className="nav-link" 
                                    href="#blog"
                                >
                                    Blog
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink 
                                    onClick={toggleNavbar} 
                                    offset={() => -10} 
                                    className="nav-link" 
                                    href="#contact"
                                >
                                    Contact
                                </AnchorLink>
                            </li>
                        </ul>
                    </div>

                    <div className="header-search">
                        <SearchModal />
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navigationbar
