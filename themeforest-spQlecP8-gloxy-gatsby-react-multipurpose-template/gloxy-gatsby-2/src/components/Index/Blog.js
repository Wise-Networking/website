import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'

const getTeamImages = graphql`
{
    image1: file(relativePath: {eq: "blog-one.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: {eq: "blog-two.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: {eq: "blog-three.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: {eq: "blog-four.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
}
`

const Blog = () => {
    const data = useStaticQuery(getTeamImages)
    return (
        <section id="blog" className="our-blog ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h2>Our Blog</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>
                            <span className="section-title-bg">Blog</span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="blog-item">
                            <a href="/blog-details" className="blog-img">
                                <img src={data.image1.childImageSharp.fluid.src} alt="blog-one" />
                            </a>
                            <div className="blog-info">
                                <div className="date-box">
                                    12 <span className="month">Aug</span>
                                </div>
                                <div className="title-meta">
                                    <h2>
                                        <a href="/blog-details">
                                            14 ridiculously cool websites you never know.
                                        </a>
                                    </h2>
                                    <div className="post-meta">
                                        <ul>
                                            <li>
                                                <i className="fa fa-user"></i> Posted By: <Link to="#">Admin</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-comment"></i> Comments: <Link to="#">2</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-tag"></i> Tags: <Link to="#">IT</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <div className="blog-item">
                            <a href="/blog-details" className="blog-img">
                                <img src={data.image2.childImageSharp.fluid.src} alt="blog-one" />
                            </a>
                            <div className="blog-info">
                                <div className="date-box">
                                    12 <span className="month">Feb</span>
                                </div>
                                <div className="title-meta">
                                    <h2>
                                        <a href="/blog-details">
                                            14 ridiculously cool websites you never know.
                                        </a>
                                    </h2>
                                    <div className="post-meta">
                                        <ul>
                                            <li>
                                                <i className="fa fa-user"></i> Posted By: <Link to="#">Admin</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-comment"></i> Comments: <Link to="#">2</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-tag"></i> Tags: <Link to="#">IT</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <div className="blog-item">
                            <a href="/blog-details" className="blog-img">
                                <img src={data.image3.childImageSharp.fluid.src} alt="blog-one" />
                            </a>
                            <div className="blog-info">
                                <div className="date-box">
                                    12 <span className="month">Sep</span>
                                </div>
                                <div className="title-meta">
                                    <h2>
                                        <a href="/blog-details">
                                            14 ridiculously cool websites you never know.
                                        </a>
                                    </h2>
                                    <div className="post-meta">
                                        <ul>
                                            <li>
                                                <i className="fa fa-user"></i> Posted By: <Link to="#">Admin</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-comment"></i> Comments: <Link to="#">2</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-tag"></i> Tags: <Link to="#">IT</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <div className="blog-item">
                            <a href="/blog-details" className="blog-img">
                                <img src={data.image4.childImageSharp.fluid.src} alt="blog-one" />
                            </a>
                            <div className="blog-info">
                                <div className="date-box">
                                    12 <span className="month">Oct</span>
                                </div>
                                <div className="title-meta">
                                    <h2>
                                        <a href="/blog-details">
                                            14 ridiculously cool websites you never know.
                                        </a>
                                    </h2>
                                    <div className="post-meta">
                                        <ul>
                                            <li>
                                                <i className="fa fa-user"></i> Posted By: <Link to="#">Admin</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-comment"></i> Comments: <Link to="#">2</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-tag"></i> Tags: <Link to="#">IT</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 all-post">
                        <div className="center-wrap">
                            <Link to="#" className="btn-a">
                                <div className="button">
                                    Read More <i className="fa fa-arrow-right"></i>
                                    <div className="mask"></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
