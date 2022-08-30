import React, { useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import berry from '../assets/berry.svg'
import '../assets/styles.css';
import paperclip from '../assets/paperclip.png'
import NavbarAdmin from '../components/navbarAdmin';
import ToppingAdd from '../components/modal/toppingAdd';

export default function AddTopping() {
    const [addTopping, setAddTopping] = useState(false);
    const handleAdd =() => setAddTopping(true);
    const handleCloseAdd =() => setAddTopping(false);
    console.log(setAddTopping);

  return (
    <div>
        <Container className='mt-5 pt-5'>
            <NavbarAdmin />
            <Row>
                <Col xs={12} md={7}>
                <Form>
                    <div className='add-title text-danger mb-5'>
                        <h1 className='fw-bold'>Toping</h1>
                    </div>
                    <Form.Group>
                    <Form.Control type='text' placeholder='Name product' className='form-box mb-4'/>
                    <Form.Control type='text' placeholder='Price'className='form-box mb-4'/>
                    <div className='input-group  mb-4' style={{borderRadius:"5px"}}>
                        <input type="file" className='form-control' id='inputgroupfile2' hidden required/>
                        <label className='d-flex jc-between ai-center input-group-text form-box' htmlFor='inputgroupfile2' style={{width:"100%", borderRadius:"5px"}}><p>Photo Product</p> <img src={paperclip} alt="" className='' /></label>
                    </div>
                    </Form.Group>
                    <Button className="btn btn-auth-red" style={{width:"70%"}} onClick={()=> handleAdd()}>
                    Add Topping
                    </Button>
                    <ToppingAdd addTopping={addTopping} Close={handleCloseAdd}/>
                </Form>
                </Col>
                <Col xs={12} md={5}>
                    <img
                    src={berry}
                    alt=''
                    style={{width:"70%", borderRadius:"7px"}}
                    className=''
                    />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
