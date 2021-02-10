import React from "react";
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
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                     
                        <label>Name:</label>
                        <input type="text" name="name"  className="form-control" autoComplete="off" placeholder="Your Name" required/>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" className="form-control" autoComplete="off" placeholder="Your Email Address" required/>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Message:</label>
                        <input type="text" name="message" className="form-control" autoComplete="off" placeholder="Your message" required/>
                      </div>
                    </div>
                  </div>

                  <div className="center-wrap text-center">
                    <div className="button">
                      {status === "SUCCESS" ? <span className="txt-thanks">Thanks!</span> : <button type="submit">
                        Submit <i className="fa fa-long-arrow-right"></i>{" "}
                      </button>}
                      {status === "ERROR" && <p>Ooops! There was an error.</p>}

                      <div className="mask"></div>
                    </div>
                  </div>
                  <div className="clearfix" />
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