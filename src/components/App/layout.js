import React from 'react'
import { Helmet } from 'react-helmet'

import './assets/animate.css'
import './assets/bootstrap.min.css'
import './assets/flaticon.css'
import './assets/font-awesome.min.css'
import 'react-image-lightbox/style.css'
import 'react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css';
import './assets/style.css'
import './assets/responsive.css'
import './assets/default-color.css'

import NavBar from './navBar'
import Footer from './footer'
import GoTop from './goTop'

const Layout = ({ children, location, keywords, description }) => {
  return (
    <React.Fragment>
      <Helmet title="Dandelions: Your Partner In Custom Smart Grids" defer={false} />
      <Helmet>
        <meta name="keywords" content={keywords}></meta>
        <meta name="description" content={description}></meta>
      </Helmet>
      <NavBar homepage={location === "home"} />
      {children}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
      <Footer />
    </React.Fragment>
  )
}

export default Layout
