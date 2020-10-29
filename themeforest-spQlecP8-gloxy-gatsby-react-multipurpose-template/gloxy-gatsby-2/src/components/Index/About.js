import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'

const getAboutImages = graphql`
{
    image1: file(relativePath: {eq: "about-img.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
}
`
const About = () => {
    const data = useStaticQuery(getAboutImages)
    return (
        <div id="about" className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title text-center">
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>
                            <span className="section-title-bg">About</span>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-text">
                            <h3>Take your business to the next level</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
            
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.  </p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <img src={data.image1.childImageSharp.fluid.src} alt="Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;