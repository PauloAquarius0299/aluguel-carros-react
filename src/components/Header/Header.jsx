import React, { useRef }  from "react";

import { Container, Row, Col } from "reactstrap";
import {Link, NavLink} from 'react-router-dom';
import '../../styles/header.css'

const navLinks = [
    {
        path: '/home',
        display: 'Home',
    },
    {
        path: '/about',
        display: 'Sobre Nós',
    },
    {
        path: '/cars',
        display: 'Carros',
    },
    {
        path: '/blogs',
        display: 'Blogs',
    },
    {
        path: '/contact',
        display: 'Contatos',
    },
];

const Header = () => {
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

    return (
        <header className="header">
            <div className="header__top">
                <Container>
                    <Row>
                        <Col lg='6' sm='6'>
                            <div className="header__top__left">
                                <span>Ajuda?</span>
                                <span className="header__top__help">
                                <i class="ri-phone-fill"></i> +55-(31) 987654321
                                </span>
                            </div>
                        </Col>

                        <Col lg='6' md='6' sm='6'>
                        <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                        <Link to='#' className="d-flex align-items-center gap-1">
                        <i class="ri-login-circle-line"></i> Logar</Link>

                        <Link to='#' className="d-flex align-items-center gap-1">
                        <i class="ri-user-line"></i> Cadastro
                        </Link>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="header__middle">
                <Container>
                    <Row>
                        <Col lg='4' md='3' sm='4'>
                        <div className="logo">
                            <h1>
                                <Link to='home' className="d-flex align-items-center gap-2">
                                <i class="ri-car-line"></i>
                                <span>
                                    Aluguel de <br /> Carro
                                </span>
                                </Link>
                            </h1>
                        </div>
                        </Col>

                        <Col lg='3' md='3' sm='4'>
                            <div className="header__location d-flex align-items-center gap-2">
                                <span>
                                <i class="ri-earth-line"></i>
                                <div className="header__location-content">
                                    <h4>Brasil</h4>
                                    <h6>Belo Horizonte, Minas Gerais</h6>
                                </div>
                                </span>
                            </div>
                        </Col>

                        <Col lg='3' md='3' sm='4'>
                         <div className="header__location d-flex align-items-center gap-2">
                            <span>
                            <i class="ri-time-line"></i>
                            </span>
                            <div className="header__location-content">
                                <h4>Segunda a Sexta</h4>
                                <h6>10h - 19h</h6>
                            </div>
                         </div>
                        </Col>

                        <Col lg='2' md='3' sm='0' className="d-flex align-items-center justify-content-end"
                        >
                        <button className='header__btn btn'>
                            <Link tp='/contact'>
                            <i class="ri-phone-line"></i> Aluge um carro
                            </Link>
                        </button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="main__navbar">
                <Container>
                    <div className="navigation__wrapper d-flex align-items-center justify-content-between">
                        <span className="mobile__menu">
                        <i class="ri-menu-line" onClick={toggleMenu}></i>
                        </span>

                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <div className="menu">
                                {navLinks.map((item, index) => (
                                    <NavLink
                                    to={item.path}
                                    className={(navClass) => navClass.isActive ? 'nav__active bav__item' : "nav__item"}
                                    key={index}
                                    >
                                        {item.display}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <div className="nav__right">
                            <div className="search__box">
                                <input type="text" placeholder="Pesquisar..." />
                                <span>
                                <i class="ri-search-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>

            </div>
        </header>
    )
}

export default Header;