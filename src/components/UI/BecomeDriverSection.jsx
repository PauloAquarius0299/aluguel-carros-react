import React from 'react'
import '../../styles/become-driver.css'
import {Container, Col, Row} from 'reactstrap';

import driverImg from '../../assets/images/cars-img/toyota-offer-2.png';

const BecomeDriverSection = () => {
    return (
        <section className='become__driver'>
            <Container>
                <Row>
                    <Col lg='6' mb='6' sm='12' className='become__driver-img'>
                        <img src={driverImg} alt='driverimagem' className='w-100' />
                    </Col>

                    <Col lg='6' mb='6'sm='12'>
                    <h2 className='section__title become__driver-title'>
                    Você quer trabalhar conosco? Então não se atrase
                    </h2>

                    <button className='btn become__driver-btn mt-4'>
                        Se torne um motorista
                    </button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BecomeDriverSection;