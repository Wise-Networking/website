import React from 'react';
import Modal from 'react-modal';
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import addToMailchimp from 'gatsby-plugin-mailchimp'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

const MailChimpModal = (props) => {
  var subtitle;

  function afterOpenModal() {
    subtitle.style.color = 'red';
  }

  const _handleSubmit = async (e) => {
    e.preventDefault();

    const result = await addToMailchimp(email, null)

    console.log(result);
    
    // if (result.result === "error") {
    //   //console.log(result.msg);
    // }
    // if (result.result === "success") {
    //   //console.log(result.msg);
    // }
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

        <h2 ref={_subtitle => (subtitle = _subtitle)}>Subscribe</h2>
        {/* <button onClick={props.closeModal}>close</button> */}

        <ValidationForm
          id="mailChimpForm"
          onSubmit={_handleSubmit}
        >
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
              <button type="submit">Submit <i className="fa fa-long-arrow-right"></i> </button>
              <div className="mask"></div>
            </div>
          </div>
          <div className="clearfix" />
        </ValidationForm>

      </Modal>
    </div>
  )
}

export default MailChimpModal;
