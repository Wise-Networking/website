import React from 'react'
import PropTypes from "prop-types";
import { Link } from 'gatsby';
import {graphql, useStaticQuery} from 'gatsby'

const getMacImage = graphql`
{
    macImage: file(relativePath: {eq: "mac-pro.png"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}
`

const WelcomeServices = (props) => {
    const data = useStaticQuery(getMacImage)
    return (
        <section className="cta-area cta-bg-img">
            <div className="diplay-table">
                <div className="display-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-lg-7">
                                <div className="cta-info">
                                    <h2>{props.Title}</h2>
                                    <p>{props.Content}</p>
                                    
                                    <div className="center-wrap">
                                        <Link to={props.BtnLink} className="btn-a">
                                            <div className="button">
                                                {props.BtnName}
                                                {` `}
                                                <i className="fa fa-long-arrow-right"></i>
                                            <div className="mask" /></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-5 cta-img">
                                <img 
                                    className="img-fluid" 
                                    src={data.macImage.childImageSharp.fluid.src}
                                    alt="mac-pro"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

//Props Types
WelcomeServices.propTypes = {
    Title: PropTypes.string,
    Content: PropTypes.string,
    BtnLink: PropTypes.string,
    BtnName: PropTypes.string,
    Image: PropTypes.string,
    
};

//Default Props
WelcomeServices.defaultProps = {
    Title: "We offer best in class service for your needs",
    Content: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    BtnLink: "#",
    BtnName: "PURCHASE NOW"
};

export default WelcomeServices
