import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

function ShopItem({ name, img, type, sale, price, id, onClickAddItem }) {
    const onAddItem = () => {
        const obj = {
            id,
            price,
            img,
            name,
        };
        onClickAddItem(obj);
    };

    return (
        <div className='col-sm col-md-6 col-lg-3 ftco-animate'>
            <div className='product'>
                <Link to={`/shop/item/${id}`} className='img-prod'>
                    <img
                        className='img-fluid'
                        src={img[0]}
                        alt='Colorlib Template'
                    />
                    <span className='status'>30%</span>
                </Link>
                <div className='text py-3 px-3'>
                    <h3>
                        <Link to={`/shop/item/${id}`}>{name}</Link>
                    </h3>
                    <h2>{type}</h2>
                    <div className='d-flex'>
                        <div className='pricing'>
                            <p className='price'>
                                <span>{sale > 0 ? sale : ""}</span> {price} ₴
                            </p>
                        </div>
                    </div>
                    <hr />
                    <p className='bottom-area d-flex'>
                        <Button text={"ADD TO CART"} onClick={onAddItem} />

                        <a href='/' className='ml-auto'>
                            <span>
                                <i className='ion-ios-heart-empty'></i>
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ShopItem;
