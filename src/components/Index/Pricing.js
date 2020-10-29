import React from 'react'
import PropTypes from 'prop-types'
import {Tabs, Tab} from 'react-bootstrap-tabs'
import ItemTwo from '../pricingItem/ItemTwo'
import ItemOne from '../pricingItem/ItemOne'

const Pricing = (props) => {
    return (
        <section id="pricing" className="our-pricing">
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
                    <div className="col-lg-12">
                        <div className="tab-slider">
                            <Tabs contentClass="tab-content-default">
                                <Tab label="Monthly">
                                    <ItemOne />
                                </Tab>
                                <Tab label="Yearly">
                                    <ItemTwo />
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

//Props Types
Pricing.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
};

//Default Props
Pricing.defaultProps = {
    SectionbgTitle: "Pricing",
    sectionTitle: "Pricing",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",

};

export default Pricing
