import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const Partner = (props) => {
    const [display, setDisplay] = React.useState(false)

    React.useEffect(() => {
        setDisplay(true)
    }, [])

    const partnerData = props.partnersData.map((partner, index) => (
        <div className="single-partner-logo" key={index}>
            <Link to={partner.partnerLink} className="logo-preview">
                <img src={partner.partnerLogo} alt="partnerLogo" />
            </Link>
        </div>
    ))
    return (
        <section className="our-partners ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h2>{props.sectionTitle}</h2>
                            <p>{props.sectionDescription}</p>
                            <span className="section-title-bg">{props.SectionbgTitle}</span>
                        </div>
                    </div>
                </div>

                {display ? <OwlCarousel
                    className="owl-theme partners-slides"
                    dots= {false}
                    loop={true}
                    margin={60}
                    autoplay={true}
                    smartSpeed={1000}
                    nav={true}
                    navText={[
                        "<i class='fa fa-chevron-left'></i>",
                        "<i class='fa fa-chevron-right'></i>"
                    ]}
                    responsive={{
                        0: { 
                            items: 2,
                        },
                        576: {
                            items: 3,
                        },
                        768: {
                            items: 3
                        },
                        992: {
                            items: 4,
                        },
                        1200: {
                            items: 5
                        }
                    }}
                >
                    {partnerData}
                </OwlCarousel> : '' }
            </div>
        </section>
    )
}

//Props Types
Partner.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    partnersData: PropTypes.array
}

//Default Props
Partner.defaultProps = {
    SectionbgTitle: "Partners",
    sectionTitle: "Our Partners",
    sectionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
    partnersData: [
        {
            partnerLogo: require("../../images/partners-logo/img1.png"),
            partnerLink: "#"
        },
        {
            partnerLogo: require("../../images/partners-logo/img2.png"),
            partnerLink: "#"
        },
        {
            partnerLogo: require("../../images/partners-logo/img3.png"),
            partnerLink: "#"
        },
        {
            partnerLogo: require("../../images/partners-logo/img4.png"),
            partnerLink: "#"
        },
        {
            partnerLogo: require("../../images/partners-logo/img5.png"),
            partnerLink: "#"
        },
        {
            partnerLogo: require("../../images/partners-logo/img3.png"),
            partnerLink: "#"
        }
    ]
}

export default Partner
