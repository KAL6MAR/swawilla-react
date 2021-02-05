import React from 'react';
import { MaiGirlNew, ShoppingCart, TransparentGirl1 } from '../img'


function Section1(props) {
    return (
        <div>
            <div className="main">
                <div className="row align-items-center woman">
                    <div className="left-desc">
                        <h1>WOMAN</h1>
                        <span></span>
                    </div>
                    <div className="col-md-3">
                        <div className="main-girl">
                            <img src={MaiGirlNew} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 carousel">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={TransparentGirl1} data-color="lightblue" alt="" />
                                    <div className="carousel-caption d-md-block">
                                        <h6>НОВИНКА</h6>
                                        <h5>Черное худи <br /> с принтом</h5>
                                        <img src={ShoppingCart} alt="" className="shopping-bag" />
                                        <a href="/" className="btn">КУПИТЬ</a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="" data-color="firebrick" alt="" />
                                    <div className="carousel-caption d-md-block">
                                        <h5>Second Image</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="" data-color="violet" alt="" />
                                    <div className="carousel-caption d-md-block">
                                        <h5>Third Image</h5>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true">🠔</span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true">🠖</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Section1;