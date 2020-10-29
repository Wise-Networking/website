import React from "react"

import Layout from '../components/App/Layout'
import SEO from "../components/App/seo"
import Banner from "../components/HomeThree/Banner"
import Services from "../components/Index/Services"
import WelcomeServices from "../components/Index/WelcomeServices"
import Works from "../components/Index/Works"
import About from "../components/Index/About"
import Team from "../components/Index/Team"
import Blog from "../components/Index/Blog"
import VideoArea from "../components/Index/VideoArea"
import Pricing from "../components/Index/Pricing"
import FunFacts from "../components/Index/FunFacts"
import Testimonials from "../components/Index/Testimonials"
import FAQ from "../components/Index/FAQ"
import Partner from "../components/Index/Partner"
import Contact from "../components/Index/Contact"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Banner />
        <Services />
        <WelcomeServices />
        <Works />
        <About />
        <Team />
        <VideoArea />
        <Pricing />
        <FunFacts />
        <Testimonials />
        <FAQ />
        <Partner />
        <Blog />
        <Contact />
    </Layout>
)

export default IndexPage
