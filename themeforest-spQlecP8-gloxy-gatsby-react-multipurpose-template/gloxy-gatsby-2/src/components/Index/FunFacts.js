import React from 'react'
import PropTypes from "prop-types";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const FunFacts = (props) => {
    const [didViewCountUp, setDidViewCountUp] = React.useState(false)

    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setDidViewCountUp(true);
        }
    }


    return (
        <section className="fun-facts ptb-100">
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

                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="count-box text-center">
                            <div className="glyph">
                                <i className="glyph-icon flaticon-035-coin-1"></i>
                            </div>
                            <h2 className="counter">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{
                                        top: 10
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            didViewCountUp
                                                ? 14
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor>0
                            </h2>

                            <p>Clients Worked With</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="count-box text-center">
                            <div className="glyph">
                                <i className="glyph-icon flaticon-020-handshake"></i>
                            </div>
                            
                            <h2 className="counter">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{
                                        top: 10
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            didViewCountUp
                                                ? 20
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor>5
                            </h2>

                            <p>Completed Projects</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="count-box text-center">
                            <div className="glyph">
                                <i className="glyph-icon flaticon-005-trophy"></i>
                            </div>
                            
                            <h2 className="counter">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{
                                        top: 10
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            didViewCountUp
                                                ? 5
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor>0
                            </h2>

                            <p>Winning Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

//Props Types
FunFacts.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string
};

//Default Props
FunFacts.defaultProps = {
    SectionbgTitle: "Fun Facts",
    sectionTitle: "Some Fun Facts",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
};

export default FunFacts
