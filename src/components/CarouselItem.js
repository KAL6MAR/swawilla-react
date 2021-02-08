import React from 'react';
import { Heart, arrowMix } from '../img'
function CarouselItem({ name, type, sale, price, img }) {
    return (
        <div className="carousel-item">
            <div className="col-xs-3 col-sm-3 col-md-3 cards">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h1>{type}</h1>
                <p><span>{sale > 0 ? sale : ''}</span> {price} ₴</p>
                <div className="hoverMenu ">
                    <div className="inner">
                        <a href="/">В КРОРЗИНУ</a>
                        <img src={Heart} alt="" />
                        <img src={arrowMix} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 cards">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h1>{type}</h1>
                <p><span>{sale > 0 ? sale : ''}</span> {price} ₴</p>
                <div className="hoverMenu ">
                    <div className="inner">
                        <a href="/">В КРОРЗИНУ</a>
                        <img src={Heart} alt="" />
                        <img src={arrowMix} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 cards">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h1>{type}</h1>
                <p><span>{sale > 0 ? sale : ''}</span> {price} ₴</p>
                <div className="hoverMenu ">
                    <div className="inner">
                        <a href="/">В КРОРЗИНУ</a>
                        <img src={Heart} alt="" />
                        <img src={arrowMix} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 cards">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h1>{type}</h1>
                <p><span>{sale > 0 ? sale : ''}</span> {price} ₴</p>
                <div className="hoverMenu ">
                    <div className="inner">
                        <a href="/">В КРОРЗИНУ</a>
                        <img src={Heart} alt="" />
                        <img src={arrowMix} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CarouselItem;