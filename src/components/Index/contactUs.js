import React from "react"
export default class ContactUs extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <section id="contact-us" className="contact-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title">
                <h2>Contact Us</h2>
                <p>
                  Learn more about how your enterprise can build its own IOT
                  network. <span className="text-brand">Reach out today!</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12 offset-sm-0">
              <div className="contact-form">
                <form
                  id="contact-us"
                  onSubmit={this.submitForm}
                  action="https://formspree.io/f/xknpezrb"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          autoComplete="off"
                          placeholder="Your Name"
                          required
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          autoComplete="off"
                          placeholder="Your Email Address"
                          required
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <input
                          type="text"
                          name="message"
                          className="form-control"
                          autoComplete="off"
                          placeholder="Your message"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="center-wrap text-center pt-2">
                    <div className="button">
                      {status === "SUCCESS" ? (
                        <span className="txt-thanks">Thanks!</span>
                      ) : (
                        <button type="submit">
                          Submit <i className="fa fa-chevron-right"></i>{" "}
                        </button>
                      )}
                    </div>
                    {status === "ERROR" && (
                      <p className="text-white mt-2">
                        Ooops! There was an error.
                      </p>
                    )}
                  </div>
                  <div className="clearfix" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    }).then(response => {
      if (response.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    })
  }
}
