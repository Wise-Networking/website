import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'gatsby'

const Banner = (props) => {
    return (
        <div className="hompage-slides-wrapper">
            <div className="single-slider-item slide-bg-2">
                <div className="diplay-table">
                    <div className="display-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <span className="hero-text">
                                        {props.topTitle}
                                    </span>
                                    <h1>{props.title}</h1>
                                    <p>{props.content}</p>

                                    <div className="center-wrap">
                                        <div className="center-wrap">
                                            <Link to={props.btnLink} className="btn-a">
                                                <div className="button">
                                                    {props.btnName}
                                                    {` `}
                                                    <i className="fa fa-long-arrow-right"></i>
                                                <div className="mask" /></div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Props Types
Banner.propTypes = {
    TopTitle: PropTypes.string,
    Title: PropTypes.string,
    Content: PropTypes.string,
    BtnLink: PropTypes.string,
    BtnName: PropTypes.string,
}

// Default Props
Banner.defaultProps = {
    topTitle: "Clean & Creative",
    title: "We Are an Expert!",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget.",
    btnLink:  "#",
    btnName: "get started",
}

export default Banner