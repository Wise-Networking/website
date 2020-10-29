import React from 'react'
import { Modal, Form } from "react-bootstrap"

const SearchModal = () => {
    const [show, setShow] = React.useState(false)

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    return (
        <React.Fragment>
            <button onClick={handleShow} className="search-toggle">
            <i className="fa fa-search"></i>
            </button>
                                                                        
            <Modal show={show} onHide={handleClose} className="search-modal text-center modal fade">
                <Modal.Body>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="header-search-form">
                                <Form>
                                    <input type="text" placeholder="Search" />
                                    <button><i className="fa fa-search"></i></button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default SearchModal
