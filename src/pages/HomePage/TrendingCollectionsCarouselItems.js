import React from "react";
import { Link } from "react-router-dom";

function TrendingCollectionsCarouselItems({ name, desc, img }) {
    return (
        <div className='container justify-content-center trending--img'>
            <div className='row d-flex '>
                <div className='col-md-6'>
                    <img src={img} alt={name} />
                </div>
                <div className='col-md-6 trending--desc'>
                    <h5>{desc}</h5>
                    <Link to='/shop' className='btn-white'>
                        ПОСМОТРЕТЬ КОЛЕКЦИЮ
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TrendingCollectionsCarouselItems;
