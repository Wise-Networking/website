import React from "react"


import Layout from "../components/App/layout"

import SEO from "../components/App/seo"
import Banner from "../components/Index/banner"
import News from "../components/Index/news"
import Products from "../components/Index/products"
import Partners from "../components/Index/partners"
import AboutUs from "../components/Index/aboutUs"
import ContactUs from "../components/Index/contactUs"
import MailChimpModal from "../components/Index/modal"

const IndexPage = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleNewsLetter = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <Layout location="home" keywords="home page, wise networking ">
      <SEO title="Home" />
      <Banner onNewsLetter={handleNewsLetter} />
      <News/>
      <Products />
      <Partners />
      <AboutUs />
      <ContactUs />
      <MailChimpModal showModal={showModal} closeModal={closeModal} />
    </Layout>
  )
}

export default IndexPage
