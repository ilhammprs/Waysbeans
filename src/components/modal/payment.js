import React from 'react'
import {Modal} from 'react-bootstrap'

export default function PaymentModal(props) {
  console.log(props);
  return (
    <Modal show={props.payShow} onHide={props.Close} 
    {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Body>
            <p className="text-center fw-semibold fs-4 p-5" style={{color:"#469F74"}}>Thank you for ordering in us, please wait 1 x 24 hours to verify you order</p>
        </Modal.Body>
    </Modal>
  )
}
