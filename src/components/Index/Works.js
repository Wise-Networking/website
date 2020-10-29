import React from 'react'
import { Link } from 'gatsby';
import {graphql, useStaticQuery} from 'gatsby'
import Lightbox from "react-image-lightbox";

const getImages = graphql`
{
    image1: file(relativePath: {eq: "work-1.jpg"}) {
      childImageSharp {
        fixed {
            ...GatsbyImageSharpFixed
        }
      }
    }
    image2: file(relativePath: {eq: "work-2.jpg"}) {
      childImageSharp {
        fixed {
            ...GatsbyImageSharpFixed
        }
      }
    }
    image3: file(relativePath: { eq: "work-3.jpg" }) {
        childImageSharp{
          fixed{
            ...GatsbyImageSharpFixed
          }
        }
    }
    image4: file(relativePath: { eq: "work-4.jpg" }) {
        childImageSharp{
          fixed{
            ...GatsbyImageSharpFixed
          }
        }
    }
    image5: file(relativePath: { eq: "work-5.jpg" }) {
        childImageSharp{
          fixed{
            ...GatsbyImageSharpFixed
          }
        }
    }
    image6: file(relativePath: { eq: "work-6.jpg" }) {
        childImageSharp{
          fixed{
            ...GatsbyImageSharpFixed
          }
        }
    }
}
`

const Works = () => {
    const data = useStaticQuery(getImages)
    const [isOpen, setIsOpen] = React.useState(false)
    const [photoIndex, setPhotoIndex] = React.useState(0)

    const images = [
        data.image1.childImageSharp.fixed.src,
        data.image2.childImageSharp.fixed.src,
        data.image3.childImageSharp.fixed.src,
        data.image4.childImageSharp.fixed.src,
        data.image5.childImageSharp.fixed.src,
        data.image6.childImageSharp.fixed.src,
    ];
      
    const smallImages = [
        data.image1.childImageSharp.fixed.src,
        data.image2.childImageSharp.fixed.src,
        data.image3.childImageSharp.fixed.src,
        data.image4.childImageSharp.fixed.src,
        data.image5.childImageSharp.fixed.src,
        data.image6.childImageSharp.fixed.src,
    ];
    return (
        <React.Fragment>
            <section id="works" className="our-works ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h2>Our Works</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>
                                <span className="section-title-bg">Works</span>
                            </div>
                        </div>
                    </div>
                    
                    <div id="Portfolio" className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="work-details">
                                <img src={smallImages[0]} alt="sample" />
                                <div className="box-content">
                                    <h3 className="title">Work Details</h3>
                                    <ul className="icon">
                                        <li>
                                            <Link 
                                                to="#"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setPhotoIndex(0);
                                                    setIsOpen(true)
                                                }}
                                            >
                                                <i className="fa fa-link"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> 
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="work-details">
                                <img src={smallImages[1]} alt="sample" />
                                <div className="box-content">
                                    <h3 className="title">Work Details</h3>
                                    <ul className="icon">
                                        <li>
                                            <Link 
                                                to="#"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setPhotoIndex(1);
                                                    setIsOpen(true)
                                                }}
                                            >
                                                <i className="fa fa-link"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="work-details">
                                <img src={smallImages[2]} alt="sample" />
                                <div className="box-content">
                                    <h3 className="title">Work Details</h3>
                                    <ul className="icon">
                                        <li>
                                            <Link 
                                                to="#"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setPhotoIndex(2);
                                                    setIsOpen(true)
                                                }}
                                            >
                                                <i className="fa fa-link"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="work-details">
                                <img src={smallImages[3]} alt="sample" />
                                <div className="box-content">
                                    <h3 className="title">Work Details</h3>
                                    <ul className="icon">
                                        <li>
                                            <Link 
                                                to="#"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setPhotoIndex(3);
                                                    setIsOpen(true)
                                                }}
                                            >
                                                <i className="fa fa-link"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="work-details">
                                <img src={smallImages[4]} alt="sample" />
                                <div className="box-content">
                                    <h3 className="title">Work Details</h3>
                                    <ul className="icon">
                                        <li>
                                            <Link 
                                                to="#"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setPhotoIndex(4);
                                                    setIsOpen(true)
                                                }}
                                            >
                                                <i className="fa fa-link"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="work-details">
                                <img src={smallImages[5]} alt="sample" />
                                <div className="box-content">
                                    <h3 className="title">Work Details</h3>
                                    <ul className="icon">
                                        <li>
                                            <Link 
                                                to="#"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setPhotoIndex(5);
                                                    setIsOpen(true)
                                                }}
                                            >
                                                <i className="fa fa-link"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    imageTitle={photoIndex + 1 + "/" + images.length}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}
        </React.Fragment>
    )
}

export default Works
