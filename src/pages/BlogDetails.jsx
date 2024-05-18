import React, { useEffect } from 'react'

import '../styles/blog-details.css'
import Helmet from '../components/Helmet/Helmet'
import {  Link, useParams } from 'react-router-dom'
import blogData from '../assets/data/blogData'
import { Col, Container, Row, Form, FormGroup, Input } from 'reactstrap'

import commentImg from '../assets/images/ava-2.jpg'

const BlogDetails = () => {
    const {slug} = useParams();

    const blog = blogData.find((blog) => blog.title === slug);

    useEffect(()=> {
        window.scrollTo(0,0);
    }, [blog])

  return (
    <Helmet title={blog.title}>
        <section>
            <Container>
                <Row>
                    <Col lg='8' md='8'>
                    <div className='blog__details'>
                        <img src={blog.imgUrl} alt="" className='w-100' />
                        <h2 className="section__title mt-4">{blog.title}</h2>

                        <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                            <span className="blog__author">
                            <i class="ri-user-line"></i> {blog.author}
                            </span>

                            <span className="d-flex align-items-center gap-1 section__description">
                            <i class="ri-calendar-line"></i> {blog.date}
                            </span>

                            <span className="d-flex align-items-center gap-1 section__description">
                            <i class="ri-time-line"></i> {blog.time}
                            </span>
                        </div>

                        <p className="section__description">{blog.description}</p>
                        <h6 className="ps-5 fw-normal">
                            <blockquote className='fs-4'>{blog.quote}</blockquote>
                        </h6>
                        <p className="section__description">{blog.description}</p>
                    </div>

                    <div className="comment__list mt-5">
                        <h4 className="mb-5">3 Comentários</h4>

                        <div className="single__comment d-flex gap-3">
                            <img src={commentImg} alt="" />
                            <div className='comment__content'>
                                <h6 className="fs-bold">Fagner Wolfmaan</h6>
                                <p className="section__description mb-0">4 Julho, 2022</p>
                                <p className="section__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corrupti, illo ipsum sequi veritatis fuga aspernatur recusandae a. Sunt ipsum ea laudantium omnis voluptates, tenetur commodi animi impedit rerum temporibus reprehenderit a alias facere eligendi ullam cum iure accusantium perspiciatis.
                                </p>
                                <span className="replay d-flex align-items-center gap-1">
                                <i class="ri-reply-line"></i> Replay
                                </span>
                                                        </div>
                            </div>
                    </div>


                    <div className="leave__comment-form mt-5">
                        <h4>Deixe uma Comentário</h4>
                        <p className="section__description">
                       Você precisa se cadastrar para deixar um comentário
                        </p>

                        <Form>
                            <FormGroup className='d-flex gap-3'>
                                <Input type='text' placeholder='Primero Nome' />
                                <Input type='text' placeholder='Email' />
                            </FormGroup>

                            <FormGroup>
                                <textarea
                                rows='5'
                                className='w-100 py-2 px-3'
                                placeholder='Escreva...'
                                >
                                </textarea>
                            </FormGroup>

                            <button className="btn comment__btn mt-3">
                                Poste seu Comentário
                            </button>
                        </Form>
                    </div>
                    </Col>

                    <Col lg='4' md='4'>
                        <div className="recent__post mb-4">
                            <h5 className="fw-bold">
                             Postagens Recentes
                            </h5>
                        </div>
                        {blogData.map((item) => (
                            <div className='recent__blog-post mb-4 ' key={item.id}>
                                <div className="recent__blog-item d-flex gap-3">
                                    <img src={item.imgUrl} className='w-25 rounded-2' alt="" />
                                    <h6>
                                        <Link to={`/blogs/${item.title}`}>{blog.title}</Link>
                                    </h6>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
  )
}

export default BlogDetails