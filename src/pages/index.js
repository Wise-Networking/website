import React from "react"

import Layout from "../components/App/Layout"

import SEO from "../components/App/Seo"
import Banner from "../components/Index/Banner"
import News from "../components/Index/News"
import Products from "../components/Index/Products"
import Partners from "../components/Index/Partners"
import AboutUs from "../components/Index/AboutUs"
import OurPeople from "../components/Index/OurPeople"
import ContactUs from "../components/Index/ContactUs"

const IndexPage = () => (
  <Layout location="home">
    <SEO title="Home" />
    <Banner />
    <News />
    <Products />
    <Partners />
    <AboutUs />
    <OurPeople />
    <ContactUs />
  </Layout>
)

export default IndexPage
