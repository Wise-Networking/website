import React from "react"
import Modal from "react-modal"
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation"
import addToMailchimp from "gatsby-plugin-mailchimp"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #ff7500",
    padding: "2rem",
  },
}

const MailChimpModal = props => {
  var subtitle
  function afterOpenModal() {
    subtitle.style.color = "#262626"
  }

  const _handleSubmit = async e => {
    e.preventDefault()

    const { email } = e.target.elements

    const result = await addToMailchimp(email.value, null)
    if (result.result === "error") {
      var res = result.msg.split(". ")
      alert(res[0])
      props.closeModal()
    }
    if (result.result === "success") {
      alert(result.msg)
      props.closeModal()
    }
  }

  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={props.showModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="MailChimp/ Modal"
      >
        <h2
          ref={_subtitle => (subtitle = _subtitle)}
          className="popup-title mt-0"
        >
          Subscribe to our newsletter
        </h2>

        <ValidationForm id="mailChimpForm" onSubmit={_handleSubmit}>
          <div className="row">
            <div className="col-lg-12 col-md-12">
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
          </div>
          <div className="center-wrap text-center">
            <div className="button">
              <button type="submit">
                Submit <i className="fa fa-chevron-right"></i>{" "}
              </button>
              <div className="mask"></div>
            </div>
          </div>
          <div className="clearfix" />
        </ValidationForm>
      </Modal>
    </div>
  )
}

export default MailChimpModal
