import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'

const ItemOne = (props) => {
    const itemonedata = props.itemonesData.map((itemone, index) => (
        <div className={itemone.className} key={index}>
            <div className={itemone.FeaturedClass}>
                <span className="featured">{itemone.Featured}</span>
            </div>
            <div className="plan-price">
                <h3>{itemone.planName}</h3>
                <span className="value">{itemone.price}</span>
                <span className="period">{itemone.description}</span>
            </div>

            <div className="plan-features">
                <ul>
                    <li>{itemone.content1}</li>
                    <li>{itemone.content2}</li>
                    <li>{itemone.content3}</li>
                    <li>{itemone.content4}</li>
                    <li>{itemone.content5}</li>
                    <li>{itemone.content6}</li>
                    <li>{itemone.content7}</li>
                </ul>
                <div className="center-wrap">
                    <Link to={itemone.btnlink} className="btn-a">
                        <div className="button">
                            {itemone.BtnName} 
                            <i className="fa fa-long-arrow-right"></i>
                            <div className="mask" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    ))

    return (
        <React.Fragment>
            <div className="tab-pane fade show active">
                <div className="pricing-container margin-top-60">
                    {itemonedata}           
                </div>
            </div>
        </React.Fragment>
    );
}

ItemOne.PropsTypes = {
    itemonesData: PropTypes.array
}
ItemOne.defaultProps = {
    itemonesData: [
        {
            planName: "BASIC",
            className: "plan",
            description: "Free of charge one standard listing active for 30 days",
            FeaturedClass: "",
            Featured: "",
            price: "Free",
            content1: "Any Ware Access",
            content2: "1 GB Hosting",
            content3: "1 Unique Users",
            content4: "2 GB Capacity",
            content5: "Weekly Backups",
            content6: "1 Domain Names",
            content7: "Enhanced Security",
            BtnName: "Purchase Now",
            btnlink: "#",
        },
        {
            planName: "Extended",
            className: "plan featured",
            description: "One time fee for one listing, highlighted in the search results",
            FeaturedClass: "listing-badges",
            Featured: "Featured",
            price: "$145",
            content1: "Any Ware Access",
            content2: "10 GB Hosting",
            content3: "2 Unique Users",
            content4: "12 GB Capacity",
            content5: "Weekly Backups",
            content6: "15 Domain Names",
            content7: "Enhanced Security",
            BtnName: "Purchase Now",
            btnlink: "#",
        },
        {
            planName: "Professional",
            className: "plan",
            description: "Monthly subscription for unlimited listings and availability",
            FeaturedClass: "",
            Featured: "",
            price: "$555",
            content1: "Any Ware Access",
            content2: "15 GB Hosting",
            content3: "2 Unique Users",
            content4: "15 GB Capacity",
            content5: "Weekly Backups",
            content6: "25 Domain Names",
            content7: "Enhanced Security",
            BtnName: "Purchase Now",
            btnlink: "#",
        },
    ]
}

export default ItemOne
