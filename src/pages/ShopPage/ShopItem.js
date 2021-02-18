import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { ItemSize } from "../ItemsPage";
function ShopItem({
    name,
    img,
    type,
    sale,
    price,
    id,
    size,
    onClickAddItem,
    addedCount,
}) {
    const onAddItem = () => {
        const obj = {
            id,
            price,
            img: img[0],
            name,
            size: activeSize,
        };
        if (activeSize === undefined) {
            console.log("Лох");
        } else {
            onClickAddItem(obj);
        }
    };

    const [activeSize, setActiveSize] = useState();

    const updateData = (value) => {
        setActiveSize(value);
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
                    <div className='size'>
                        <h2>РАЗМЕР</h2>
                        <ItemSize onClickSize={updateData} items={size} />

                        <p>
                            <a href='/'>Как выбрать размер?</a>
                        </p>
                    </div>

                    <hr />
                    <p className='bottom-area d-flex'>
                        <Button onClick={onAddItem} add outline>
                            <svg
                                width='12'
                                height='12'
                                viewBox='0 0 12 12'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                                    fill='white'
                                />
                            </svg>
                            <span>Добавить</span>
                            {addedCount && <i>{addedCount}</i>}
                        </Button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ShopItem;
