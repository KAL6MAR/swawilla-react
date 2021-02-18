import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import store from "../redux/store";
import CartItem from "./CartPage/CartItem";
import { saveState } from "../redux/reducers/localStorage";

import {
    clearCart,
    removeCartItem,
    plusCartItem,
    minusCartItem,
} from "../redux/actions/cart";
function Cart() {
    const dispatch = useDispatch();

    const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

    const itemInCart = Object.keys(items).map((key) => {
        return items[key].items[0];
    });

    const onRemoveItem = (id) => {
        if (window.confirm("Вы действительно хотите удалить?")) {
            dispatch(removeCartItem(id));
        }
    };

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id));
    };

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id));
    };

    return (
        <div className='container-fluid'>
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

                        {itemInCart &&
                            itemInCart.map((obj) => (
                                <CartItem
                                    name={obj.name}
                                    size={obj.size}
                                    price={obj.price}
                                    img={obj.img}
                                    type={obj.type}
                                    id={obj.id}
                                    totalPrice={items[obj.id].totalPrice}
                                    totalCount={items[obj.id].items.length}
                                    onRemove={onRemoveItem}
                                    onMinus={onMinusItem}
                                    onPlus={onPlusItem}
                                >
                                    {console.log(obj.img[0])}
                                </CartItem>
                            ))}
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
                                <option className='text'>
                                    Nova-Poshta- &#8372; 80.00
                                </option>
                                <option className='text'>
                                    PickUp-At-Nearest-Store- FREE
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
