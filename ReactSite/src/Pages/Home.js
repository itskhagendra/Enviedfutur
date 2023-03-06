import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import "../Assets/Css/Home.css"
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
        <NavbarComponent/>
        {/* Body Section */}
        <Container fluid >
            <Row className='JumoContainer' style={{height:"100vh"}}>
                <Col>
                    <img src='Images/Model.png' style={{height:"80%",width:'auto', margin:'15% 20%'}} alt="Model"/>
                </Col>
                <Col style={{padding:'2% 10%'}}>
                    <div>
                        <img src='Images/LogoFullText.jpg' style={{width:'40%',align:'right',marginLeft:'20vw',paddingBottom:'20px'}} alt=""/>
                        <h1 className='TextGradient'>100% Sustainable <br></br> Phygital Fashion Brand </h1>
                        <h3 className='Message'>At Envied FutuR, our mantra is Wild Living by Nature ! its always about healing our plant and making our community 
                            happy first! it's purpose driven initiative with 100% recycled and organic materials, nurish a proud community of our empoyees, customers and mother earth.
                        </h3>
                    </div>
                    <Button variant="light" className='ComingSoombtn'><p>Light</p></Button>{' '}
                </Col>
            </Row>
        </Container>

        <Footer/>
    </>
  )
}

export default Home