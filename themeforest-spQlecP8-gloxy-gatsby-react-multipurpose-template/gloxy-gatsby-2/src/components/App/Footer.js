import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <p className="copyright">© {new Date().getFullYear()} All Rights Reserved.</p>
                    </div>
                    <div className="col-md-7">
                        <div className="social-icons bottom">
                            <ul className="list-inline">
                                <li>Follow Us On: </li>
                                <li>
                                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-google-plus"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-linkedin"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
