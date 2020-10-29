import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'

const ItemTwo = (props) => {
    const itemtwodata = props.itemtwosData.map((itemtwo, index) => (
            
        <div className={itemtwo.className} key={index}>
            <div className={itemtwo.FeaturedClass}>
                <span className="featured">{itemtwo.Featured}</span>
            </div>
            <div className="plan-price">
                <h3>{itemtwo.planName}</h3>
                <span className="value">{itemtwo.price}</span>
                <span className="period">{itemtwo.description}</span>
            </div>

            <div className="plan-features">
                <ul>
                    <li>{itemtwo.content1}</li>
                    <li>{itemtwo.content2}</li>
                    <li>{itemtwo.content3}</li>
                    <li>{itemtwo.content4}</li>
                    <li>{itemtwo.content5}</li>
                    <li>{itemtwo.content6}</li>
                    <li>{itemtwo.content7}</li>
                </ul>
                <div className="center-wrap">
                    <Link to={itemtwo.btnlink} className="btn-a">
                        <div className="button">
                            {itemtwo.BtnName}
                            <i className="fa fa-long-arrow-right"></i>
                        <div className="mask" /></div>
                    </Link>
                </div>
            </div>
        </div>
    ))

    return (
    <React.Fragment>
        <div className="tab-pane fade show active">
            <div className="pricing-container margin-top-60">
                {itemtwodata}           
            </div>
        </div>
    </React.Fragment>
    )
}

ItemTwo.PropsTypes = {
    itemtwosData: PropTypes.array
}
ItemTwo.defaultProps = {
    itemtwosData: [
        {
            planName: "BASIC",
            className: "plan",
            description: "Free of charge one standard listing active for 30 days",
            FeaturedClass: "",
            Featured: "",
            price: "$55",
            content1: "Any Ware Access",
            content2: "2 GB Hosting",
            content3: "2 Unique Users",
            content4: "5 GB Capacity",
            content5: "Weekly Backups",
            content6: "5 Domain Names",
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
            price: "$245",
            content1: "Any Ware Access",
            content2: "10 GB Hosting",
            content3: "2 Unique Users",
            content4: "15 GB Capacity",
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
            price: "$999",
            content1: "Any Ware Access",
            content2: "15 GB Hosting",
            content3: "2 Unique Users",
            content4: "15 GB Capacity",
            content5: "Weekly Backups",
            content6: "35 Domain Names",
            content7: "Enhanced Security",
            BtnName: "Purchase Now",
            btnlink: "#",
        },
    ]
}

export default ItemTwo
