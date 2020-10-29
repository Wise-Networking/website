import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
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
    }, [])

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
                                <Link 
                                    className="nav-link active" 
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-link" 
                                    to="/"
                                >
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-link" 
                                    to="/"
                                >
                                    Works
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link" 
                                    to="/"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link" 
                                    to="/"
                                >
                                    Team
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link" 
                                    to="/"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link" 
                                    to="/"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link" 
                                    to="/"
                                >
                                    Contact
                                </Link>
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
