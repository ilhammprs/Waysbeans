import React, { useContext, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import background from  "../assets/bg1.svg"
import { dataProduct } from '../components/fakedata';
import NavbarUser from '../components/navbar';
import NavbarLogin from '../components/navbarUser';
import { UserContext } from '../context/userContext';
import convertRupiah from "rupiah-format";


function Landing () {
  const [state, dispatch] = useContext(UserContext)
  const [addCart, setAddChart] = useState(0)
  console.log(state.user);

    return (
        <div>
          {state.isLogin===false?  <NavbarUser/>: <NavbarLogin show={addCart}/> }
            
            <Container  className='my-5 pb-5 pt-5' style={{backgroundColor:"white"}}>
            <Card className="list-border bg-white text-white rounded-3" style={{border:"none"}}>
              <Card.Img src={background} alt="Card image" />
            </Card>
            </Container>
        <Container>
        <Row className="gap-1">
            {dataProduct.map((item, index) => (
            <Col className="mb-3 " key={index}>
                <Link to={state.isLogin === true ?`/product/${index}`:""} className="text-decoration-none">
                <Card
                  key={index}
                  className="rounded-3 bgCard text-decoration-none"
                  style={{ width: "18rem" }}
                >
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title className="text-danger text-decoration-none">
                      <b>{item.name}</b>
                    </Card.Title>
                    <Card.Text className="text-danger text-decoration-none">
                     {convertRupiah.convert(item.price)}
                    </Card.Text>
                    <Card.Text><div className="text-danger text-decoration-none">
                      Stock : {item.stock}</div>
                    </Card.Text>  
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
        </div>
    );
}

export default Landing;