import React from 'react'

import '../styles/contact.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Col, Container, FormGroup, Row, Input, Form } from 'reactstrap';
import { Link } from 'react-router-dom';

const socialLinks = [
    {
        url: "#",
        icon: "ri-facebook-line",
      },
      {
        url: "#",
        icon: "ri-instagram-line",
      },
      {
        url: "#",
        icon: "ri-linkedin-line",
      },
      {
        url: "#",
        icon: "ri-twitter-line",
      },

];

const Contact = () => {
  return (
    <Helmet title='Contact'>
        <CommonSection title='Contatos' />
        <section>
            <Container>
                <Row>
                    <Col lg='7' md='7'>
                    <h6 className="fw-bold mb-4">Entre em Contato</h6>

                    <Form>
                        <FormGroup className='contact__form'>
                            <Input placeholder='Seu Nome' type='text' />
                        </FormGroup>
                        <FormGroup className='contact__form'>
                            <Input type='email' placeholder='Email' />
                        </FormGroup>
                        <FormGroup className='contact__form'>
                            <textarea
                            rows={5}
                            placeholder='Messagem'
                            className='textarea'

                            >

                            </textarea>
                        </FormGroup>

                        <button className="contact__btn" type='submit'>
                            Enviar Mensagem
                        </button>
                    </Form>
                    </Col>

                    <Col lg='5' md='5'>
                        <div className="contact__info">
                            <h6 className="fw-bold">Informações de Contato</h6>
                            <p className="section__description mb-0">
                                123 Centro, Belo Horizonte - MG
                            </p>
                            <div className="d-flex align-items-center gap-2">
                                <h6 className="fs-6 mb-0">
                                    Celular:
                                </h6>
                                <p className="section__description mb-0">
                                    +55 31 987654321
                                </p>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <h6 className="fs-6 mb-0">
                                    Email:
                                </h6>
                                <p className="section__description mb-0">
                                    aluguelcarros@gamil.com
                                </p>
                            </div>

                            <h6 className="fs-bold mt-">Sigua-nos nas redes</h6>

                            <div className="d-flex align-items-center gap-4 mt-3">
                                {socialLinks.map((item,index) => (
                                    <Link
                                    to={item.url}
                                    key={index}
                                    className='social__link-icon'
                                    >
                                    <i className={item.icon}></i>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
  )
}

export default Contact