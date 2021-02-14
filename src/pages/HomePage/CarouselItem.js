import React from "react";
// import { Heart, arrowMix } from '../../assets/index'
import { Link } from "react-router-dom";

function CarouselItem({ name, type, sale, price, img, id }) {
    return (
        <div className='product'>
            <Link to={`/shop/item/${id}`} className='img-prod'>
                <img src={img[0]} alt={name} className='img-prod' />
            </Link>
            <div className='text py-3 px-3'>
                <h3>
                    <Link to={`/shop/item/${id}`}>{name}</Link>
                </h3>
                <h1>{type}</h1>
                <p className='price'>
                    {price} ₴<span>{sale > 0 ? sale : ""}</span>
                </p>

                {/* <div className="hoverMenu ">
                    <div className="inner">
                        <a href="/">ADD TO CART</a>
                        <img src={Heart} alt="" />
                        <img src={arrowMix} alt="" />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default CarouselItem;
