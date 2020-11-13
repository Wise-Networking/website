import React from 'react'
import { Helmet } from 'react-helmet'

import './assets/animate.css'
import './assets/bootstrap.min.css'
import './assets/flaticon.css'
import './assets/font-awesome.min.css'
import 'react-image-lightbox/style.css'
import "react-modal-video/css/modal-video.min.css"
import 'react-accessible-accordion/dist/fancy-example.css';
import './assets/style.css'
import './assets/responsive.css'
import './assets/default-color.css'
import Navigationbar from './Navigationbar'
import BlogNavigationbar from './BlogNavigationbar'
import Footer from './Footer'
import GoTop from './GoTop'

const Layout = ({children, location}) => {
    return (
        <React.Fragment>
            <Helmet title="Gloxy - Gatsby/React multipurpose responsive landing page template" defer={false} />
             <Navigationbar homepage={location ==="home"}/>
            {children}
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
            <Footer />
        </React.Fragment>
    )
}

export default Layout
