import React from 'react';
function Footer(props) {
    return (
        <footer className="ftco-footer bg-light ftco-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">SWAWILLA</h2>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="ftco-animate"><a href="/"><span className="icon-twitter"></span></a></li>
                                <li className="ftco-animate"><a href="/"><span className="icon-facebook"></span></a></li>
                                <li className="ftco-animate"><a href="/"><span className="icon-instagram"></span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-5">
                            <h2 className="ftco-heading-2">Меню</h2>
                            <ul className="list-unstyled">
                                <li><a href="/" className="py-2 d-block">Магазин</a></li>
                                <li><a href="/" className="py-2 d-block">Главная</a></li>
                                <li><a href="/" className="py-2 d-block">Корзина</a></li>
                                <li><a href="/" className="py-2 d-block">Связаться с нами</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Помощь</h2>
                            <div className="d-flex">
                                <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                                    <li><a href="/" className="py-2 d-block">Информация о доставке</a></li>
                                    <li><a href="/" className="py-2 d-block">Возврат &amp; Обмен</a></li>
                                    <li><a href="/" className="py-2 d-block">Политика</a></li>
                                </ul>
                                <ul className="list-unstyled">
                                    <li><a href="/" className="py-2 d-block">FAQs</a></li>
                                    <li><a href="/" className="py-2 d-block">Контакты</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Есть вопросы?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon icon-map-marker"></span><span className="text">Украина, г. Харьков, Чувашская 18, 2 этаж</span></li>
                                    <li><a href="/"><span className="icon icon-phone"></span><span className="text">+38 (093) 294 - 74 - 72</span></a></li>
                                    <li><a href="/"><span className="icon icon-envelope"></span><span className="text">info@swawilla.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">

                        <p>
                            Copyright &copy; Все права защищены
						  </p>
                    </div>
                </div>
            </div>
        </footer>

    );
}
export default Footer;