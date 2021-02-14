import React from 'react';

function Cart(props) {
    return (
        <div className="container-fluid">
            <div className="row ">
                <div className="col-10 ml-auto mr-3"><h1>Ваша Корзина</h1></div>
                <div className="col-1"></div>
            </div>

            <div className="row">
                <div className="col-7 cart ml-auto mr-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-6" style="padding: 0;">
                                <img src="images/dist/image1.png" alt="" />
                                <span className="gray-tag">Шуба</span>
                                <span className="main-tag">Mango - WOOD FUR COAT </span>
                            </div>
                            <div className="col-3 align-self-center text-center mt-4" >
                                <div className="buttons-place1">
                                    <div className="item-ammount">
                                        <span>+</span>
                                        <p>01</p>
                                        <span>-</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 align-self-center text-center mt-4">
                                <p className="price"><span>3599</span>1999 ₴</p>
                                <div className="delete-item-icon">
                                    <span></span>
                                </div>

                            </div>
                        </div>
                        <div className="row line-tb">
                            <div className="col-6" style="padding: 0;">
                                <img src="images/dist/image1.png" alt="" />
                                <span className="gray-tag">Шуба</span>
                                <span className="main-tag">Mango - WOOD FUR COAT </span>
                            </div>
                            <div className="col-3 align-self-center text-center mt-4" >
                                <div className="buttons-place1">
                                    <div className="item-ammount">
                                        <span>+</span>
                                        <p>02</p>
                                        <span>-</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 align-self-center text-center mt-4">
                                <p className="price"><span>3599</span>1999 ₴</p>
                                <div className="delete-item-icon">
                                    <span></span>
                                </div>

                            </div>
                        </div>
                        <div className="row line-b">
                            <div className="col-6" style="padding: 0;">
                                <img src="images/dist/image1.png" alt="" />
                                <span className="gray-tag">Шуба</span>
                                <span className="main-tag">Mango - WOOD FUR COAT </span>
                            </div>
                            <div className="col-3 align-self-center text-center mt-4" >
                                <div className="buttons-place1">
                                    <div className="item-ammount">
                                        <span>+</span>
                                        <p>01</p>
                                        <span>-</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 align-self-center text-center mt-4">
                                <p className="price"><span>3599</span>1999 ₴</p>
                                <div className="delete-item-icon">
                                    <span></span>
                                </div>

                            </div>
                        </div>
                        <div className="row line-b">
                            <div className="col-6" style="padding: 0;">
                                <img src="images/dist/image1.png" alt="" />
                                <span className="gray-tag">Шуба</span>
                                <span className="main-tag">Mango - WOOD FUR COAT </span>
                            </div>
                            <div className="col-3 align-self-center text-center mt-4" >
                                <div className="buttons-place1">
                                    <div className="item-ammount">
                                        <span>+</span>
                                        <p>04</p>
                                        <span>-</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 align-self-center text-center mt-4">
                                <p className="price"><span>3599</span>1999 ₴</p>
                                <div className="delete-item-icon">
                                    <span></span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-1"></div>
                <div className="col-3 checkout align-self-center mb-5" >
                    <div className="price-cart">
                        <p className="cart-price">Стоимость доставки<span>Бесплатно</span></p>
                        <p className="cart-price">Общая сумма<span>1999 ₴</span></p>
                        <a href="shop.html" className="back">ВЕРНУТСЯ В МАГАЗИН</a>
                        <a href="" className="bnt-big">Перейти к Оплате</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;