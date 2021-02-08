/*import React from "react"
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

export default ContactUs*/



import React from "react";
// import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      // <form
      //   onSubmit={this.submitForm}
      //   action="https://formspree.io/f/xknpezrb"
      //   method="POST"
      // >
      //   <label>Email:</label>
      //   <input type="email" name="email" />
      //   <label>Message:</label>
      //   <input type="text" name="message" />
      //   {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
      //   {status === "ERROR" && <p>Ooops! There was an error.</p>}
      // </form>




      <section id="contact-us" className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h2>Contact Us</h2>
                <p>Learn more about how your enterprise can build its own IOT network. Reach out today!</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
              <div className="contact-form">
                <form
                  onSubmit={this.submitForm}
                  action="https://formspree.io/f/xknpezrb"
                  method="POST"
                >
                  {/* <ValidationForm id="contactForm" > */}
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        {/* <TextInput
                            name="name"
                            id="name"
                            required
                            successMessage=""
                            errorMessage="Please enter your name"
                            className="form-control"
                            placeholder="Name"
                            autoComplete="off"
                        /> */}
                        <label>Name:</label>
                        <input type="text" name="name"  className="form-control" autoComplete="off" placeholder="Your Name" required/>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        {/* <TextInput
                            name="email"
                            id="email"
                            type="email"
                            required
                            successMessage=""
                            errorMessage="Please enter your email address"
                            className="form-control"
                            placeholder="Email"
                            autoComplete="off"
                        /> */}
                        <label>Email:</label>
                        <input type="email" name="email" className="form-control" autoComplete="off" placeholder="Your Email Address" required/>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        {/* <TextInput
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
                        /> */}
                        <label>Message:</label>
                        <input type="text" name="message" className="form-control" autoComplete="off" placeholder="Your message" required/>
                      </div>
                    </div>
                  </div>

                  <div className="center-wrap text-center">
                    <div className="button">
                      {/* <button type="submit">
                        Submit <i className="fa fa-long-arrow-right"></i>{" "}
                      </button> */}

                      {status === "SUCCESS" ? <span className="txt-thanks">Thanks!</span> : <button type="submit">
                        Submit <i className="fa fa-long-arrow-right"></i>{" "}
                      </button>}
                      {status === "ERROR" && <p>Ooops! There was an error.</p>}

                      <div className="mask"></div>
                    </div>
                  </div>
                  <div className="clearfix" />
                  {/* </ValidationForm> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
