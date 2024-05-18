import React from 'react'
import Helmet from "../components/Helmet/Helmet";
import CommonSection from '../components/UI/CommonSection';
import AboutSection from '../components/UI/AboutSection'
import { Col, Container, Row } from 'reactstrap';
import driverImg from '../assets/images/drive.jpg';
import BecomeDriverSection from '../components/UI/BecomeDriverSection'
import OurMembers from '../components/UI/OurMembers';

const About = () => {
  return (
    <Helmet title='About'>
        <CommonSection title='Sobre Nós' />
        <AboutSection aboutClass='aboutPage' />

        <section className='about__page-section'>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12'>
                    <div className='about__page-img'>
                        <img src={driverImg} alt="" className='w-100 rounded-3' />
                    </div>
                    </Col>

                    <Col lg='6' md='6' sm='12'>
                    <div className='about__page-content'>
                        <h2 className='section__title'>
                        Estamos empenhados em fornecer soluções de viagem segura
                        </h2>
                        <p className="section__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate provident reprehenderit cum quas tempora quasi doloremque quae mollitia eveniet repellendus adipisci placeat doloribus nam accusamus quaerat, inventore suscipit vel. Qui aspernatur, incidunt libero nemo eligendi reiciendis nam voluptates exercitationem repellat quas culpa ipsam enim laudantium. 
                         
                        </p>
                        <p className="section__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate provident reprehenderit cum quas tempora quasi doloremque quae mollitia eveniet repellendus adipisci placeat doloribus nam accusamus quaerat, inventore suscipit vel. Qui aspernatur, incidunt libero nemo eligendi reiciendis nam voluptates exercitationem repellat quas culpa ipsam enim laudantium, aperiam, asperiores recusandae eos aliquam eaque dolorum veniam iure excepturi aliquid quidem. Cupiditate natus sint modi.
                        </p>

                        <div className='d-flex align-items-center gap-3 mt-4'>
                            <span className='fs-4'>
                            <i class="ri-phone-line"></i>
                            </span>

                            <div>
                            <h6 className="section__subtitle">Precisa de ajuda?</h6>
                             <h4>+55 31 987654321</h4>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <BecomeDriverSection />

        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5 text-center' >
                    <h6 className='section__subtitle'>Especialistas</h6>
                    <h2 className='section__title'>Nossos Membros</h2>
                    </Col>

                    <OurMembers />
                </Row>
            </Container>
        </section>
    </Helmet>
  )
}

export default About