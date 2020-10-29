import React from 'react'
import PropTypes from "prop-types"
import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const Testimonials = (props) => {
    const [display, setDisplay] = React.useState(false)

    React.useEffect(() => {
        setDisplay(true)
    }, [])

    const testimonialsitem = props.testimonialsData.map((testimonials, index) => (
        <div className="single-testimonial-item text-center" key={index}>
            <i className="fa fa-quote-left"></i>
            <p>{testimonials.Content}</p>

            <div className="client-profile">
                <img src={testimonials.clientImage} alt="client-one" />
            </div>
            
            <div className="client-info">
                <h3>{testimonials.Name}</h3>
                <span>{testimonials.Profession}</span>
            </div>
        </div>
    ))

    return (
        <div className="testimonials ptb-100">
            <div className="container">
                { display ? <OwlCarousel
                    className="owl-theme testimonial-slides"
                    items={1}
                    nav= {true}
                    dots= {false}
                    autoplay= {false}
                    loop= {true}
                    autoplayHoverPause= {true}
                    smartSpeed= {1000}
                    navText= {[
                        "<i class='fa fa-chevron-left'></i>", 
                        "<i class='fa fa-chevron-right'></i>"
                    ]}
                >
                    {testimonialsitem}
                </OwlCarousel> : '' }
            </div>
        </div>
    )
}

//Props Types
Testimonials.propTypes = {
    testimonialsData: PropTypes.array
}

//Default Props
Testimonials.defaultProps = { 
    testimonialsData: [
        {
            clientImage: require("../../images/client-one.png"),
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            Name: "Jason",
            Profession: "Founder & Director",
        },
        {
            clientImage: require("../../images/client-two.jpg"),
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            Name: "Statham",
            Profession: "React Developer",
        },
    ]
}

export default Testimonials
