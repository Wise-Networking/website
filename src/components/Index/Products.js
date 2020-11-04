import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

const Services = props => {
  const data = useStaticQuery(graphql`
    query AllProducts {
      products: allDatoCmsProduct {
        edges {
          node {
            icon
            title
            description
            link
          }
        }
      }
      titles: datoCmsHomePage {
        productsTitle
        productBackgroundTitle
        productDescription
      }
    }
  `)

  const products = data.products.edges.map(node => node.node)
  const {
    productsTitle,
    productBackgroundTitle,
    productDescription,
  } = data.titles
  const servicedata = products.map((product, index) => (
    <div className="col-md-6 col-lg-6 text-center" key={index}>
      <Link
        className="read-more"
        to={`products/${product.link}`}
        style={{
          color: "unset",
        }}
      >
        <div className="service-item">
          <div className="glyph">
            <i className={product.icon}></i>
          </div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      </Link>
    </div>
  ))
  return (
    <section id="products" className="services ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h2>{productsTitle}</h2>
              <p>{productDescription}</p>
              <span className="section-title-bg">{productBackgroundTitle}</span>
            </div>
          </div>
        </div>
        <div className="row">{servicedata}</div>
      </div>
    </section>
  )
}

Services.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  servicesData: PropTypes.array,
}

//Default Props
Services.defaultProps = {
  SectionbgTitle: "Services",
  sectionTitle: "Services",
  sectionDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",

  servicesData: [
    {
      icon: "glyph-icon flaticon-012-management",
      heading: "Creative Solutions",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    },
    {
      icon: "glyph-icon flaticon-032-target",
      heading: "Excellent Features",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    },
    {
      icon: "glyph-icon flaticon-024-user",
      heading: "Friendly Support",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    },
    {
      icon: "glyph-icon flaticon-008-bar-chart",
      heading: "SEO & Advertising",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    },
    {
      icon: "glyph-icon flaticon-033-networking",
      heading: "Marketing & Consulting",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    },
    {
      icon: "glyph-icon flaticon-031-laptop-1",
      heading: "Design & Development",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    },
  ],
}

export default Services
