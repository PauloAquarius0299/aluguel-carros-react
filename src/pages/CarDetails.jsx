import {useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet';
import {Container, Row, Col} from 'reactstrap';
import {useParams} from 'react-router-dom';
import carData from '../assets/data/carData'
import BookingForm from '../components/UI/BookingForm';
import PaymentMethod from '../components/UI/PaymentMethod';

const CarDetails = ()=> {
    const {slug} = useParams();

    const singleCarItem = carData.find((item) => item.carName === slug);

    useEffect(()=> {
        window.scrollTo(0,0);
    }, [singleCarItem])

    return (
        <Helmet title={singleCarItem.carName}>
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                         <img src={singleCarItem.imgUrl} alt='imagem car details' className='w-100' />
                        </Col>

                        <Col lg='6'>
                        <div className='car__info'>
                            <h2 className='section__title'>{singleCarItem.carName}</h2>

                            <div className='d-flex align-items-center gap-5 mb-4 mt-3'>
                                <h6 className='rent__prince fw-bold fs-4'>
                                    ${singleCarItem.price}.00 / dia
                                </h6>

                                <span className='d-flex align-items-center gap-2'>
                                    <span style={{color: '#d4eb0a'}}>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    </span>
                                    ({singleCarItem.rating} ratings)
                                </span>
                            </div>

                            <p className='section__description'>
                                {singleCarItem.description}
                            </p>

                            <div className='d-flex align-items-center mt-3'
                            style={{columnGap: '4rem'}}
                            >
                                <span className='d-flex align-items-center gap-1 section__description'>
                                <i
                                class="ri-roadster-line"
                                style={{ color: "#000d6b" }}
                                ></i>{" "}
                                {singleCarItem.model}
                                </span>

                                <span className=" d-flex align-items-center gap-1 section__description">
                               <i
                               class="ri-settings-2-line"
                               style={{ color: "#000d6b" }}
                               ></i>{" "}
                               {singleCarItem.automatic}
                               </span>

                               <span className=" d-flex align-items-center gap-1 section__description">
                                <i
                                class="ri-timer-flash-line"
                                style={{ color: "#000d6b" }}
                                ></i>{" "}
                                {singleCarItem.speed}
                                 </span>
                            </div>

                            <div
                            className='d-flex align-items-center mt-3'
                            style={{columnGap: '2.8rem'}}
                            >
                                <span className=" d-flex align-items-center gap-1 section__description">
                                <i
                                class="ri-wheelchair-line"
                                style={{ color: "#000d6b" }}
                                ></i>{" "}
                                {singleCarItem.seatType}
                                </span>

                                <span className=" d-flex align-items-center gap-1 section__description">
                                <i
                                class="ri-building-2-line"
                                 style={{ color: "#000d6b" }}
                                 ></i>{" "}
                                {singleCarItem.brand}
                                </span>
                            </div>
                        </div>
                        </Col>

                        <Col lg='7' className='mt-5'>
                        <div className='booking-info mt-5'>
                            <h5 className='mb-4 fw-bold'>Informação</h5>
                            <BookingForm />
                        </div>
                        </Col>

                        <Col lg='5' className='mt-5'>
                        <div className='booking-info mt-5'>
                            <h5 className='mb-4 fw-bold'>Informação de Pagamento</h5>
                            <PaymentMethod />
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default CarDetails;