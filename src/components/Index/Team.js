import React from 'react'
import Loadable from '@loadable/component'
import {graphql, useStaticQuery} from 'gatsby'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const getTeamImages = graphql`
{
    image1: file(relativePath: {eq: "team-one.jpg"}) {
        childImageSharp {
            fixed {
                ...GatsbyImageSharpFixed
            }
        }
    }
    image2: file(relativePath: {eq: "team-two.jpg"}) {
        childImageSharp {
            fixed {
                ...GatsbyImageSharpFixed
            }
        }
    }
    image3: file(relativePath: {eq: "team-three.jpg"}) {
        childImageSharp {
            fixed {
                ...GatsbyImageSharpFixed
            }
        }
    }
    image4: file(relativePath: {eq: "team-four.jpg"}) {
        childImageSharp {
            fixed {
                ...GatsbyImageSharpFixed
            }
        }
    }
    image5: file(relativePath: {eq: "team-five.jpg"}) {
        childImageSharp {
            fixed {
                ...GatsbyImageSharpFixed
            }
        }
    }
}
`

const Team = () => {
    // get data
    const data = useStaticQuery(getTeamImages)
    // console.log(data)
    const [display, setDisplay] = React.useState(false)

    React.useEffect(() => {
        setDisplay(true)
    }, [])

    return (
        <section id="team" className="our-team ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h2>Our Team</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>
                            <span className="section-title-bg">Team</span>
                        </div>
                    </div>
                </div>
              
                { display ? <OwlCarousel
                    className="owl-theme team-slides"
                    dots= {false}
                    autoplay= {true}
                    loop= {true}
                    margin={30}
                    nav={true}
                    center={true}
                    smartSpeed= {1000}
                    autoplayHoverPause= {true}
                    navText= {[
                        "<i class='fa fa-chevron-left'></i>", 
                        "<i class='fa fa-chevron-right'></i>"
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
                            items: 3
                        },
                        1200: {
                            items: 3
                        }
                    }}
                    >
                    <div className="team-box">
                        <img src={data.image1.childImageSharp.fixed.src} alt="description" />
                        <div className="box-content">
                            <div className="box-inner-content">
                                <h3 className="title">Williams</h3>
                                <span className="post">CEO & Founder</span>
                                <ul className="icon">
                                    <li><a className="fa fa-facebook" href="#"></a></li>
                                    <li><a className="fa fa-linkedin" href="#"></a></li>
                                    <li><a className="fa fa-twitter" href="#"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                
                    <div className="team-box">
                        <img src={data.image2.childImageSharp.fixed.src} alt="description" />
                        <div className="box-content">
                            <div className="box-inner-content">
                                <h3 className="title">Thomas</h3>
                                <span className="post">Team Leader</span>
                                <ul className="icon">
                                    <li><a className="fa fa-facebook" href="#"></a></li>
                                    <li><a className="fa fa-linkedin" href="#"></a></li>
                                    <li><a className="fa fa-twitter" href="#"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                
                    <div className="team-box">
                        <img src={data.image3.childImageSharp.fixed.src} alt="description" />
                        <div className="box-content">
                            <div className="box-inner-content">
                                <h3 className="title">Taylor</h3>
                                <span className="post">React Developer</span>
                                <ul className="icon">
                                    <li><a className="fa fa-facebook" href="#"></a></li>
                                    <li><a className="fa fa-linkedin" href="#"></a></li>
                                    <li><a className="fa fa-twitter" href="#"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div> 

                    <div className="team-box">
                        <img src={data.image4.childImageSharp.fixed.src} alt="description" />
                        <div className="box-content">
                            <div className="box-inner-content">
                                <h3 className="title">Brown</h3>
                                <span className="post">Designer</span>
                                <ul className="icon">
                                    <li><a className="fa fa-facebook" href="#"></a></li>
                                    <li><a className="fa fa-linkedin" href="#"></a></li>
                                    <li><a className="fa fa-twitter" href="#"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div> 

                    <div className="team-box">
                        <img src={data.image5.childImageSharp.fixed.src} alt="description" />
                        <div className="box-content">
                            <div className="box-inner-content">
                                <h3 className="title">Davies</h3>
                                <span className="post">QA Expert</span>
                                <ul className="icon">
                                    <li><a className="fa fa-facebook" href="#"></a></li>
                                    <li><a className="fa fa-linkedin" href="#"></a></li>
                                    <li><a className="fa fa-twitter" href="#"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </OwlCarousel> : ''}
            </div>
        </section>
    )
}

export default Team
