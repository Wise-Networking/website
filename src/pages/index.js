import React from "react"

import Layout from "../components/App/Layout"

import SEO from "../components/App/Seo"
import Banner from "../components/HomeTwo/Banner"
import News from "../components/Index/Blog"
import Products from "../components/Index/Products"
import Partners from "../components/Index/Partners"
import OurPeople from "../components/Index/OurPeople"
import ContactUs from "../components/Index/ContactUs"

// import About from "../components/Index/About"
// import VideoArea from "../components/Index/VideoArea"
// import Pricing from "../components/Index/Pricing"
// import FunFacts from "../components/Index/FunFacts"
// import Testimonials from "../components/Index/Testimonials"
// import FAQ from "../components/Index/FAQ"
// import Partner from "../components/Index/Partner"

import WelcomeServices from "../components/Index/WelcomeServices"

const IndexPage = () => (
    <Layout location="home">
      <SEO title="Home" />
      <Banner />
      <News />
      <Products />
      <Partners />
      {/* <WelcomeServices /> */}
      {/* <About /> */}
      <OurPeople />
      {/* <VideoArea />
        <Pricing />
        <FunFacts />
        <Testimonials />
        <FAQ />
      <Partner /> */}
      <ContactUs />
    </Layout>
)

export default IndexPage
