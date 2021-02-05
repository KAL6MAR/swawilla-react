import React from 'react';
import { Image1, Image2, Image3, Image4, Heart, arrowMix } from '../img'
import Categories from './Categories';
function Section4(props) {
    return (
        <div className="section sec-4">
            <h1>НОВИНКИ</h1>
            <Categories onClickItem={(name) => console.log(name)} items={['ШУБЫ', 'ДЖИНСЫ', 'АКСЕССУАРЫ']} />
            <div className="row justify-content-center">
                <div id="carousel-3" className="carousel slide" data-ride="carousel">
                    <div className="container carousel-inner no-padding">
                        <div className="carousel-item active">
                            <div className="col-xs-3 col-sm-3 col-md-3 cards">
                                <img src={Image1} alt="" />
                                <h3>Mango</h3>
                                <h1>Шуба - WOOD</h1>
                                <p><span>3599</span> 1999 ₴</p>
                                <div className="hoverMenu ">
                                    <div className="inner">
                                        <a href="/">В КРОРЗИНУ</a>
                                        <img src={Heart} alt="" />
                                        <img src={arrowMix} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 cards">
                                <img src={Image2} alt="" />
                                <h3>Only</h3>
                                <h1>Шуба - BLACK</h1>
                                <p><span>2260</span> 2034 ₴</p>
                                <div className="hoverMenu ">
                                    <div className="inner">
                                        <a href="/">В КРОРЗИНУ</a>
                                        <img src={Heart} alt="" />
                                        <img src={arrowMix} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 cards">
                                <img src={Image3} alt="" />
                                <h3>Mango</h3>
                                <h1>Шуба - WOOD</h1>
                                <p><span>3599</span> 1999 ₴</p>
                                <div className="hoverMenu ">
                                    <div className="inner">
                                        <a href="/">В КРОРЗИНУ</a>
                                        <img src={Heart} alt="" />
                                        <img src={arrowMix} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 cards">
                                <img src={Image4} alt="" />
                                <h3>Raslov</h3>
                                <h1>Шуба - УДЛЕНЕНАЯ</h1>
                                <p><span>3200</span> 2500 ₴</p>
                                <div className="hoverMenu ">
                                    <div className="inner">
                                        <a href="/">В КРОРЗИНУ</a>
                                        <img src={Heart} alt="" />
                                        <img src={arrowMix} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-xs-3 col-sm-3 col-md-3 cards">
                                <img src={Image1} alt="" />
                                <h3>Mango</h3>
                                <h1>Шуба - WOOD</h1>
                                <p><span>3599</span> 1999 ₴</p>
                                <div className="hoverMenu ">
                                    <div className="inner">
                                        <a href="/">В КРОРЗИНУ</a>
                                        <img src={Heart} alt="" />
                                        <img src={arrowMix} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 cards">
                                <img src={Image2} alt="" />
                                <h3>Only</h3>
                                <h1>Шуба - BLACK</h1>
                                <p><span>2260</span> 2034 ₴</p>
                                <div className="hoverMenu ">
                                    <div className="inner">
                                        <a href="/">В КРОРЗИНУ</a>
                                        <img src={Heart} alt="" />
                                        <img src={arrowMix} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 cards">
                                <img src={Image3} alt="" />
                                <h3>Mango</h3>
                                <h1>Шуба - WOOD</h1>
                                <p><span>3599</span> 1999 ₴</p>
                                <div className="hoverMenu ">
                                    <div className="inner">
                                        <a href="/">В КРОРЗИНУ</a>
                                        <img src={Heart} alt="" />
                                        <img src={arrowMix} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 cards">
                                <img src={Image4} alt="" />
                                <h3>Raslov</h3>
                                <h1>Шуба - УДЛЕНЕНАЯ</h1>
                                <p><span>3200</span> 2500 ₴</p>
                                <div className="hoverMenu ">
                                    <div className="inner">
                                        <a href="/">В КРОРЗИНУ</a>
                                        <img src={Heart} alt="" />
                                        <img src={arrowMix} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div >
                    <a className="carousel-control-prev" href="#carousel-3" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true">🠔</span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-3" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true">🠖</span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>                                                                                            </div >
        </div>


    );
}

export default Section4;