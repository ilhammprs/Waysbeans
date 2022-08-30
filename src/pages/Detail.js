import React, { useContext, useState } from 'react'
import { dataTopping } from '../components/fakedata';
import { Container, Row, Col, Button} from 'react-bootstrap';
import NavbarLogin from '../components/navbarUser';
import { useParams } from 'react-router-dom';
import {dataProduct} from '../components/fakedata'
import { UserContext } from '../context/userContext';
import convertRupiah from "rupiah-format";

function Detail (){
    const [checkedState, setCheckedState] =useState(
        new Array(dataTopping.length).fill(false)
    )
    console.log(checkedState)
    const [total, setTotal] = useState(0)

    const [addCart, setAddChart] = useState(0)
    console.log(addCart);

    const [state, dispatch] = useContext(UserContext)

    const id = useParams()

    const [Detail] = useState(dataProduct)

    const index = id.id

    const resp = Detail[index]

    const handleOnChange = (position) => {
        const updateCheckedState = checkedState.map((item, index) =>
        index === position? !item: item)

        setCheckedState(updateCheckedState)

        const totalPrice = updateCheckedState.reduce(
            (sum, currenstState, index) => {
                if (currenstState === true) {
                    return sum + dataTopping[index].price
                }
                return sum
            },
            0
        )
        console.log(totalPrice);
        setTotal(totalPrice)
    }
    
    return(
        <div>
            <NavbarLogin show={addCart}/>
            <Container  className="mt-5 pt-5">
                <Row>
                    <Col xs={12} md={5}>
                        <img 
                        src={resp.image}
                        style={{width: "80%" }}
                        className="img-fluid"
                        alt="transaction"
                        />
                    </Col>
                    <Col xs={12} md={7} style={{backgroundColor:"white"}}>
                        <div>
                            <h1 className='text-start text-danger fw-bold mb-3'>{resp.name}</h1>
                        </div>
                        <div className='mb-3'>
                            <p className='text-start text-danger' style={{fontSize:"22px"}}>{convertRupiah.convert(resp.price)}</p>
                        </div>
                        <div className='mb-5 mt-3'>
                            <h3 className='text-start fw-bold mb-3' style={{color:"#974A4A"}}>Topping</h3>
                            <Row>
                                {dataTopping.map((item, index) => (
                                <Col xs={4} md={3}>
                                    <input 
                                    type="checkbox"
                                    className="checkbox-toping"
                                    id={`custom-checkbox-${index}`}
                                    checked={checkedState[index]}
                                    onChange={()=> handleOnChange(index)} />
                                    <label htmlFor={`custom-checkbox-${index}`}>
                                    <img 
                                    src={item.image}
                                    className='mt-5'
                                    style={{height:"5rem",borderRadius:"10px",position:"static"}}
                                    alt=''
                                    />
                                    </label>
                                    <p className='text-align-center text-danger fw-semibold '>{item.name}</p>
                                </Col>
                                ))}
                            </Row>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h2 className='text-danger fw-bold fs-4 mt-3 mb-5'>Total</h2>
                            <h2 className='text-danger fw-bold fs-4 mt-3 mb-5'>{convertRupiah.convert(resp.price + total)} </h2>
                        </div>
                    <div className=''>
                        <Button className="btn btn-auth-red fw-bold mb-4" style={{width:"100%"}} onClick={()=>setAddChart(addCart +1)}>Add to Cart</Button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default Detail;