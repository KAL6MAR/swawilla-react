import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Search, ShoppingCart, Camera } from '../img'


function Nav() {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const accountRef = useRef(null);

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

    const handleOutsideClick = (e) => {
        if (!e.path.includes(accountRef.current)) {
            setVisiblePopup(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, [])



    return (
        <div className="top-lite">
            <div className="row justify-content-around align-items-center">
                <div className="col z1000">
                    <div className="l">
                        <a href="/" className="menu" id="mmenu-icon"><span>ME <br /> NU</span> </a> <img className="search" src={Search} alt="" />
                        <span className="line"></span>

                    </div>

                </div>
                <div className="col logo z1000">
                    SWAWILLA
                </div>
                <div className="col z1000">
                    <div ref={accountRef} className="cart-account">
                        <p id="account-btn" className={visiblePopup === true ? 'active' : ''} onClick={toggleVisiblePopup}><img className={visiblePopup === false ? 'rotated' : ''} src={ArrowDown} alt="" />АККАУНТ</p>
                        <div className="cart"><img src={ShoppingCart} alt="" className="shopping-bag" /></div>
                        {visiblePopup && <div className="account-poppup">
                            <div className="icon">
                                <img src={Camera} alt="" />
                                <h1>User</h1></div>
                            <div className="account-poppup-menu">
                                <div className="block">
                                    <a href="/"><h1>АККАУНТ</h1></a>
                                </div>
                                <div className="block">
                                    <a href="/"><h1>КОРЗИНА</h1></a>
                                </div>
                                <div className="block">
                                    <a href="/"><h1>ВЫХОД</h1></a>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;