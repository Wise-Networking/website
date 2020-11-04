import React from 'react'
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import VisibilitySensor from "react-visibility-sensor"

const Banner = (props) => {
    return (
        <div className="home-video-area">
            <video autoPlay="autoplay" loop="loop" id="bgvid">
                <source src={props.VideoLink} type="video/mp4"/> 
            </video> 
        
            <div className="video-text-area">
                <VisibilitySensor>
                    {({ isVisible }) => (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <span
                                    className={
                                        isVisible
                                            ? "hero-text animated fadeInDown slow opacityOne"
                                            : "opacityZero"
                                    }
                                >
                                    {props.TopTitle}
                                </span>

                                <h1
                                    className={
                                        isVisible
                                            ? "animated fadeInDown slow opacityOne"
                                            : "opacityZero"
                                    }
                                >
                                    {props.Title}
                                </h1>
                                <p
                                    className={
                                        isVisible
                                            ? "animated fadeInDown slow opacityOne"
                                            : "opacityZero"
                                    }
                                >
                                    {props.Content}
                                </p>
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
                    </div>
                )}
                </VisibilitySensor>
            </div>
        </div>    
    )
}

//Props Types
Banner.propTypes = {
    VideoLink: PropTypes.string,
    TopTitle: PropTypes.string,
    Title: PropTypes.string,
    Content: PropTypes.string,
    BtnLink: PropTypes.string,
    BtnName: PropTypes.string,
}

//Default Props
Banner.defaultProps = {
    VideoLink: "https://taxify.co/wp-content/uploads/2014/06/file.mp4",
    TopTitle: "Clean & Creative",
    Title: "Fully Responsive Design",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
    BtnLink:  "#",
    BtnName: "get started",
}

export default Banner
