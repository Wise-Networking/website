import React from "react"
import PropTypes from "prop-types"
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation"

const ContactUs = props => {
  const handleForm = e => {
    e.preventDefault()
  }

  return (
    <section id="contact-us" className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h2>{props.sectionTitle}</h2>
              <p>{props.sectionDescription}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
            <div className="contact-form">




              
              <ValidationForm id="contactForm" onSubmit={handleForm}>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <TextInput
                        name="name"
                        id="name"
                        required
                        successMessage=""
                        errorMessage="Please enter your name"
                        className="form-control"
                        placeholder="Name"
                        autoComplete="off"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <TextInput
                        name="email"
                        id="email"
                        type="email"
                        required
                        successMessage=""
                        errorMessage="Please enter your email address"
                        className="form-control"
                        placeholder="Email"
                        autoComplete="off"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <TextInput
                        name="message"
                        id="description"
                        multiline
                        placeholder="Your message"
                        className="form-control"
                        required
                        successMessage=""
                        errorMessage="Please write your message"
                        rows="5"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>

                <div className="center-wrap text-center">
                  <div className="button">
                    <button type="submit">
                      Submit <i className="fa fa-long-arrow-right"></i>{" "}
                    </button>
                    <div className="mask"></div>
                  </div>
                </div>
                <div className="clearfix" />
              </ValidationForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

//Props Types
ContactUs.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  AddTitle: PropTypes.string,
  Address: PropTypes.string,
  EmailTitle: PropTypes.string,
  Email: PropTypes.string,
  PhoneTitle: PropTypes.string,
  Phone: PropTypes.string,
}

//Default Props
ContactUs.defaultProps = {
  SectionbgTitle: "Contact Us",
  sectionTitle: "Contact Us",
  sectionDescription:
    "Learn more about how your enterprise can build its own IOT network. Reach out today!",
  AddTitle: "Address",
  Address: "Suite 4, 71 Balfour Street Chippendale, Sydney 2007",
  EmailTitle: "Email",
  Email: "hello@dandelions.cloud",
  PhoneTitle: "Phone",
  Phone: "+61 4 3707 9009",
}

export default ContactUs
