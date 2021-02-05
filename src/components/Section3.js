import React from 'react';
import { Link } from 'react-router-dom';
import { TransparentGirl2 } from '../img'

function Section3(props) {
    return (
        <div className="section sec-3">
            <h1>НОВЕЙШИЕ КОЛЕКЦИИ</h1>
            <h4>СУМАШЕДШИЕ СОЧИТАНИЯ СТАНУТЬ ВАШИМИ ДРУЗЬЯ В 2021 ГОДУ </h4>
            <div className="row justify-content-around">
                <div className="col-1"></div>
                <div className="col-md-4 carousel">
                    <div id="carousel-2" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="cotainer">
                                    <div className="carousel-bg col-md-6">
                                        <img className="d-block w-100" src={TransparentGirl2} data-color="lightblue" alt="" />
                                    </div>

                                    <div className="carousel-caption d-md-block col-md-6">
                                        <h5>Свежая<br />
                                                палитра<br />
                                                    стиля
										</h5>
                                        <Link to="/shop" className="btn-white">ПОСМОТРЕТЬ КОЛЕКЦИЮ</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="cotainer">
                                    <div className="carousel-bg col-md-6">
                                        <img className="d-block w-100" src={TransparentGirl2} data-color="lightblue" alt="" />
                                    </div>

                                    <div className="carousel-caption d-md-block col-md-6">
                                        <h5>Привет из нижнего новогорада</h5>
                                        <Link to="/shop" className="btn-white">ПОСМОТРЕТЬ КОЛЕКЦИЮ</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#carousel-2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true">🠔</span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-2" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true">🠖</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="col-md-1 align-self-center" ></div>

            </div>
        </div>
    );
}

export default Section3;