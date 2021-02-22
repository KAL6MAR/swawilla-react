import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faMapMarkerAlt,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
    return (
        <footer className='ftco-footer bg-light ftco-section'>
            <div className='container'>
                <div className='row mb-5'>
                    <div className='col-md'>
                        <div className='ftco-footer-widget mb-4'>
                            <h2 className='ftco-heading-2'>SWAWILLA</h2>
                            <ul className='ftco-footer-social list-unstyled float-md-left float-lft mt-5'>
                                <li className='ftco-animate'>
                                    <a href='/'>
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                            color='#000'
                                            style={{
                                                padding: "3px",
                                            }}
                                            size='2x'
                                        />
                                    </a>
                                </li>
                                <li className='ftco-animate'>
                                    <a href='/'>
                                        <FontAwesomeIcon
                                            icon={faFacebook}
                                            color='#000'
                                            style={{
                                                padding: "3px",
                                            }}
                                            size='2x'
                                        />
                                    </a>
                                </li>
                                <li className='ftco-animate'>
                                    <a href='/'>
                                        <FontAwesomeIcon
                                            icon={faInstagram}
                                            color='#000'
                                            style={{
                                                padding: "3px",
                                            }}
                                            size='2x'
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md'>
                        <div className='ftco-footer-widget mb-4 ml-md-5'>
                            <h2 className='ftco-heading-2'>Меню</h2>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to='/shop' className='py-2 d-block'>
                                        Магазин
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='py-2 d-block'>
                                        Главная
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/cart' className='py-2 d-block'>
                                        Корзина
                                    </Link>
                                </li>
                                <li>
                                    <a href='/' className='py-2 d-block'>
                                        Связаться с нами
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='ftco-footer-widget mb-4'>
                            <h2 className='ftco-heading-2'>Помощь</h2>
                            <div className='d-flex'>
                                <ul className='list-unstyled mr-l-5 pr-l-3 mr-4'>
                                    <li>
                                        <a href='/' className='py-2 d-block'>
                                            Информация о доставке
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/' className='py-2 d-block'>
                                            Возврат &amp; Обмен
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/' className='py-2 d-block'>
                                            Политика
                                        </a>
                                    </li>
                                </ul>
                                <ul className='list-unstyled'>
                                    <li>
                                        <a href='/' className='py-2 d-block'>
                                            FAQs
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/' className='py-2 d-block'>
                                            Контакты
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md'>
                        <div className='ftco-footer-widget mb-4'>
                            <h2 className='ftco-heading-2'>Есть вопросы?</h2>
                            <div className='info-block mb-3'>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faMapMarkerAlt}
                                            color='#000'
                                            style={{
                                                padding: "5px",
                                                marginRight: "5px",
                                            }}
                                            size='2x'
                                        />
                                        <span className='text'>
                                            Украина, г. Харьков, Чувашская 18, 2
                                            этаж
                                        </span>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <FontAwesomeIcon
                                                icon={faPhone}
                                                color='#000'
                                                style={{
                                                    padding: "5px",
                                                }}
                                                size='2x'
                                            />
                                            <span className='text'>
                                                +38 (093) 294 - 74 - 72
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <FontAwesomeIcon
                                                icon={faEnvelope}
                                                color='#000'
                                                style={{
                                                    padding: "5px",
                                                    marginRight: "5px",
                                                }}
                                                size='2x'
                                            />
                                            <span className='text'>
                                                info@swawilla.com
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <p>
                            Copyright &copy; {new Date().getFullYear()} Все
                            права защищены
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
