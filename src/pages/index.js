import React from "react"


import Layout from "../components/App/Layout"

import SEO from "../components/App/Seo"
import Banner from "../components/Index/Banner"
import News from "../components/Index/News"
import Products from "../components/Index/Products"
import Partners from "../components/Index/Partners"
import AboutUs from "../components/Index/AboutUs"
import ContactUs from "../components/Index/ContactUs"
import MailChimpModal from "../components/Index/Modal"

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
