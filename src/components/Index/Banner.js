import React from 'react'
import { Link } from 'gatsby'
import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const Banner = (props) => {
    const [display, setDisplay] = React.useState(false)
    React.useEffect(() => {
        setDisplay(true)
    }, [])

    // BannerOne loop start
    const banneronedata = props.banneronesData.map(
        (bannerone, index) => (
            <div className={bannerone.BgClass} key={index}>
                <div className="diplay-table">
                    <div className="display-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <span className="hero-text">
                                        {bannerone.TopTitle}
                                    </span>

                                    <h1>{bannerone.Title}</h1>
                                    <p>{bannerone.Content}</p>

                                    <div className="center-wrap">
                                        <Link to={bannerone.BtnLink} className="btn-a">
                                            <div className="button">
                                                {bannerone.BtnName}
                                                {` `}
                                                <i className="fa fa-long-arrow-right"></i>
                                                <div className="mask" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
    // BannerOne loop END
    
    // Thumbs loop Start
    const thumbdata = props.thumbsData.map((thumb, index) => (
        <div className="owl-thumb-item" key={index}>
            <div className="glyph">
                <i className={thumb.ThumbIcon}></i>
            </div>
            <h3>{thumb.ThumbTitle}</h3>
            <p>{thumb.ThumbContent}</p>
        </div>
    ))

    // Thumbs loop END
    return (
        <React.Fragment>
            <div className="hompage-slides-wrapper">
                {display ? <OwlCarousel
                    className="owl-theme homepage-slides"
                    items={1}
                    touchDrag={false}
                    margin={0}
                    mouseDrag={false}
                    smartSpeed={1000}
                    dotData={true}
                    dotsContainer={".owl-thumbs"}
                >
                    {banneronedata}
                </OwlCarousel> : '' }

                <div className="owl-thumbs">
                    {thumbdata}
                </div>
            </div>
        </React.Fragment>
    );
}

// Default Props
Banner.defaultProps = {
    banneronesData: [
        {
            BgClass: "single-slider-item slide-bg-1",
            TopTitle: "Clean & Creative",
            Title: "We Are an Expert",
            Content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            BtnLink:  "#",
            BtnName: "get started"
        },
        {
            BgClass: "single-slider-item slide-bg-2",
            TopTitle: "Clean & Creative",
            Title: "We Are a Creative",
            Content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            BtnLink:  "#",
            BtnName: "get started"
        },
        {
            BgClass: "single-slider-item slide-bg-3",
            TopTitle: "Clean & Creative",
            Title: "Fully Responsive Design",
            Content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            BtnLink:  "#",
            BtnName: "get started"
        }
    ],
    thumbsData: [
        {
            ThumbIcon: "glyph-icon flaticon-047-laptop",
            ThumbTitle: "Beautiful Designs",
            ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
        },
        {
            ThumbIcon: "glyph-icon flaticon-017-package",
            ThumbTitle: "Unique Features",
            ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
        },
        {
            ThumbIcon: "glyph-icon flaticon-025-chat",
            ThumbTitle: "Reliable Support",
            ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
        },
    ]
};

export default Banner
