import React from "react"

import Layout from "../components/App/Layout"

import SEO from "../components/App/Seo"
import Banner from "../components/HomeTwo/Banner"
import News from "../components/Index/News"
import Products from "../components/Index/Products"
import Partners from "../components/Index/Partners"
import OurPeople from "../components/Index/OurPeople"
import ContactUs from "../components/Index/ContactUs"

const IndexPage = () => (
    <Layout location="home">
      <SEO title="Home" />
      <Banner />
      <News />
      <Products />
      <Partners />
      <OurPeople />
      <ContactUs />
    </Layout>
)

export default IndexPage
