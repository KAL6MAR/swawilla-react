import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import { ItemAmmountButton } from "./ItemsPage";

function Cart(props) {
    const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

    console.log(totalCount, totalPrice);

    return (
        <div className='container-fluid'>
            {" "}
            <div className='card'>
                <div className='row'>
                    <div className='col-md-8 shopping-cart '>
                        <div className='title'>
                            <div className='row'>
                                <div className='col'>
                                    <h4>
                                        <b>Shopping Cart</b>
                                    </h4>
                                </div>
                                <div className='col align-self-center text-right text'>
                                    {totalCount} items
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='row items align-items-center'>
                                <div className='col-2'>
                                    <img
                                        className='img-fluid'
                                        src='https://i.imgur.com/ba3tvGm.jpg'
                                    />
                                </div>
                                <div className='col'>
                                    <div className='row text'>Shirt</div>
                                    <div className='row'>Cotton T-shirt</div>
                                </div>
                                <div className='col'>
                                    {" "}
                                    <ItemAmmountButton />{" "}
                                </div>
                                <div className='col'>
                                    &euro; 44.00{" "}
                                    <span className='close'>&#10005;</span>
                                </div>
                            </div>
                        </div>
                        <div className='row border-top border-bottom'>
                            <div className='row items align-items-center'>
                                <div className='col-2'>
                                    <img
                                        className='img-fluid'
                                        src='https://i.imgur.com/pHQ3xT3.jpg'
                                    />
                                </div>
                                <div className='col'>
                                    <div className='row text-muted'>Shirt</div>
                                    <div className='row'>Cotton T-shirt</div>
                                </div>
                                <div className='col'>
                                    {" "}
                                    <a href='#'>-</a>
                                    <a href='#' className='border'>
                                        1
                                    </a>
                                    <a href='#'>+</a>{" "}
                                </div>
                                <div className='col'>
                                    &euro; 44.00{" "}
                                    <span className='close'>&#10005;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className='col-md-4 summary'
                        style={{ backgroundColor: "#ddd" }}
                    >
                        <div>
                            <h5>
                                <b>Summary</b>
                            </h5>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col'>ITEMS {totalCount}</div>
                            <div className='col text-right'>
                                &euro; {totalPrice}
                            </div>
                        </div>
                        <form>
                            <p>SHIPPING</p>{" "}
                            <select>
                                <option className='text-muted'>
                                    Standard-Delivery- &euro;5.00
                                </option>
                            </select>
                            <p>GIVE CODE</p>{" "}
                            <input id='code' placeholder='Enter your code' />
                        </form>
                        <div
                            className='row'
                            style={{
                                borderTop: "1px solid rgba(0,0,0,.1)",
                                padding: "2vh 0",
                            }}
                        >
                            <div className='col'>TOTAL PRICE</div>
                            <div className='col text-right'>
                                &euro; {totalPrice + 5}
                            </div>
                        </div>{" "}
                        <div className='back-to-shop'>
                            <Link>
                                {" "}
                                <FontAwesomeIcon
                                    icon={faLongArrowAltLeft}
                                    color='#000'
                                    style={{
                                        width: "1rem",
                                        height: "1rem",
                                    }}
                                    size='1x'
                                />
                                <span className='text'>Back to shop</span>
                            </Link>
                        </div>
                        <button className='btn-checkout '>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
