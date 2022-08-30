import React, {useState} from 'react'
import {Col, Container, Form, Row, Button} from 'react-bootstrap';
import iceblend from '../assets/ice-blend.png';
import paperclip from '../assets/paperclip.png';
import NavbarAdmin from '../components/navbarAdmin';
import ProductAdd from '../components/modal/product';


function AddProduct() {
  const [addProduct, setAddProduct] = useState(false);
    const handleAp =() => setAddProduct(true);
    const handleCloseAp =() => setAddProduct(false);
    console.log(setAddProduct);
  return (
    <div>
      <NavbarAdmin />
      <Container className='mt-5 pt-5'>
        <Row>
        <Col xs={12} md={7}>
          <Form>
            <div className='add-title text-danger mb-5'>
              <h1 className='fw-bold'>Product</h1>
            </div>
            <Form.Group>
              <Form.Control type='text' placeholder='Name product' className='form-box mb-4'/>
                <Form.Control type='text' placeholder='Price'className='form-box mb-4'/>
                  <div className='input-group  mb-4' style={{borderRadius:"5px"}}>
                    <input type="file" className='form-control' id='inputgroupfile2' hidden required/>
                  <label className='d-flex jc-between ai-center input-group-text form-box' htmlFor='inputgroupfile2' style={{width:"100%", borderRadius:"5px"}}><p>Photo Product</p> <img src={paperclip} alt="" className='' /></label>
                </div>
              </Form.Group>
              <Button className="btn btn-danger" style={{width:"70%"}} onClick={()=> handleAp()}>
                Add Product
              </Button>
              <ProductAdd addProduct={addProduct} Close={handleCloseAp}/>
            </Form>
          </Col>
          <Col xs={12} md={5} className="mt-5">
            <img
            src={iceblend}
            className=''
            style={{height:"80%",borderRadius:"10px"}}
            alt=''
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AddProduct;