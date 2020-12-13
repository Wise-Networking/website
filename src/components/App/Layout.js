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

import NavBar from './NavBar'
import Footer from './Footer'
import GoTop from './GoTop'

const Layout = ({ children, location }) => {
  return (
    <React.Fragment>
      <Helmet title="Dandelions: Your Partner In Custom Smart Grids" defer={false} />
      <Helmet>
        <link rel="apple-touch-icon" sizes="180*180" href="../../images/favicons/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32*32" href="../../images/favicons/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16*16" href="../../images/favicons/favicon-16x16.png"></link>
        <link rel="manifest" href="../../images/favicons/site.webmanifest"></link>
      </Helmet>
      <NavBar homepage={location === "home"} />
      {children}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
      <Footer />
    </React.Fragment>
  )
}

export default Layout
