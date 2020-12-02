import React from "react"

import Layout from "../components/App/Layout"

import SEO from "../components/App/Seo"
import Banner from "../components/HomeTwo/Banner"
import News from "../components/Index/News"
import Products from "../components/Index/Products"
import Partners from "../components/Index/Partners"
import AboutUs from "../components/Index/AboutUs"
import ContactUs from "../components/Index/ContactUs"

const IndexPage = () => (
  <Layout location="home">
    <SEO title="Home" />
    <Banner />
    <News />
    <Products />
    <Partners />
    <AboutUs />
    <ContactUs />
  </Layout>
)

export default IndexPage
