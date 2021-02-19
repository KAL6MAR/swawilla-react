import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, Search, Camera } from "../assets/index";
import { useSelector } from "react-redux";
import { Button } from ".";

function Nav({ context }) {
    const ctx = React.useContext(context);

    const [visiblePopup, setVisiblePopup] = useState(false);
    const accountRef = useRef(null);

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    };

    const handleOutsideClick = (e) => {
        if (!e.path.includes(accountRef.current)) {
            setVisiblePopup(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, []);

    const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

    return (
        <div className='top-lite'>
            <div className='row justify-content-around align-items-center'>
                <div className='col z1000'>
                    <div
                        className='l menu'
                        id='mmenu-icon bm-icon'
                        onClick={ctx.toggleMenu}
                    >
                        <span>
                            ME <br /> NU
                        </span>
                        <img className='search' src={Search} alt='' />
                        <span className='line'></span>
                    </div>
                </div>
                <div className='col logo z1000'>
                    <Link to='/'>SWAWILLA</Link>
                </div>
                <div className='col z1000 '>
                    <div
                        ref={accountRef}
                        className='cart-account d-flex align-items-center'
                    >
                        <div
                            id='account-btn'
                            className={`d-flex ${
                                visiblePopup === true ? "active" : ""
                            }`}
                            onClick={toggleVisiblePopup}
                        >
                            <img
                                className={`d-flex ${
                                    visiblePopup === false ? "rotated" : ""
                                }`}
                                src={ArrowDown}
                                alt=''
                            />
                            ACCOUNT
                        </div>
                        <Link to='/cart'>
                            <Button className='button--cart'>
                                <span>{totalPrice} ₽</span>
                                <div className='button__delimiter'></div>
                                <svg
                                    width='18'
                                    height='18'
                                    viewBox='0 0 18 18'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z'
                                        stroke='white'
                                        strokeWidth='1.8'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z'
                                        stroke='white'
                                        strokeWidth='1.8'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669'
                                        stroke='white'
                                        strokeWidth='1.8'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                                <span>{totalCount}</span>
                            </Button>
                        </Link>
                        {visiblePopup && (
                            <div className='account-poppup'>
                                <div className='icon'>
                                    <img src={Camera} alt='' />
                                    <h1>User</h1>
                                </div>
                                <div className='account-poppup-menu'>
                                    <Link>
                                        <div className='block'>ACCOUNT</div>
                                    </Link>
                                    <Link to='/cart'>
                                        <div className='block'>CART</div>
                                    </Link>
                                    <Link>
                                        <div className='block'>LOG OUT</div>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
