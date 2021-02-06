import React from 'react';
function Item({ name, img, type, sale, price }) {
    return (
        <div className="col-sm col-md-6 col-lg-3 ftco-animate">
            <div className="product">
                <a href="/" className="img-prod"><img className="img-fluid" src={img}
                    alt="Colorlib Template" />
                    <span className="status">30%</span>
                </a>
                <div className="text py-3 px-3">
                    <h3><a href="/">{name}</a></h3>
                    <h1>{type}</h1>
                    <div className="d-flex">
                        <div className="pricing">
                            <p className="price"><span>{sale > 0 ? sale : ''}</span> {price} ₴</p>
                        </div>
                    </div>
                    <hr />
                    <p className="bottom-area d-flex">
                        <a href="/" className="add-to-cart"><span>В Корзину <i
                            className="ion-ios-add ml-1"></i></span></a>
                        <a href="/" className="ml-auto"><span><i className="ion-ios-heart-empty"></i></span></a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Item;