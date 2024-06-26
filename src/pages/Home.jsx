import React from "react";
import Helmet from "../components/Helmet/Helmet";
import HeroSlider from "../components/UI/HeroSlider";
import { Col, Container, Row } from "reactstrap";
import FindCarForm from '../components/UI/FindCarForm';
import AboutSection from '../components/UI/AboutSection'
import ServicesList from '../components/UI/ServicesList';
import carData from "../assets/data/carData";
import CarItem from '../components/UI/CarItem'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";

const Home = () => {
    return (
        <Helmet title='Home'>
            <section className="p-0 hero__slider-section">
                <HeroSlider />

                <div className="hero__form">
                    <Container>
                        <Row className="for__row">
                            <Col lg='4' md='4'>
                            <div className="find__car-left">
                                <h2>Encontre seu Carro ideal </h2>
                            </div>
                            </Col>

                            <Col lg='8' md='8' sm='12'>
                                <FindCarForm />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <AboutSection />

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5 text-center'>
                            <h6 className='section__subtitle'>Veja nosso</h6>
                            <h2 className='section__title'>Serviços Populares</h2>
                        </Col>

                        <ServicesList />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                        <h6 className='section__subtitle'>Aqui tem</h6>
                        <h2 className='section__title'>Otimas Ofertas</h2>
                        </Col>

                        {carData.slice(0,6).map((item) => (
                            <CarItem item={item} key={item.id} />
                        ))}
                    </Row>
                </Container>
            </section>

            <BecomeDriverSection />

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="mb-4 text-center">
                            <h6 className="section__subtitle">Nossos Clientes</h6>
                            <h2 className="section__title">Avaliação</h2>
                        </Col>

                        <Testimonial />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="mb-5 text-center">
                        <h6 className="section__subtitle">Explore nosso blog</h6>
                        <h2 className="section__title">Blogs mais recentes</h2>
                        </Col>

                        <BlogList />
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Home;