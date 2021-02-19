import React, { Component } from "react";
import { push as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./AnimatedMenu.sass";

function AnimatedMenu({ context }) {
    const ctx = React.useContext(context);
    return (
        <Menu
            customBurgerIcon={false}
            isOpen={ctx.isMenuOpen}
            onStateChange={(state) => ctx.stateChangeHandler(state)}
            outerContainerId={"hui"}
            pageWrapId={"big-hui"}
        >
            <Link to='/' onClick={ctx.toggleMenu}>
                Home
            </Link>
            <Link to='/shop' onClick={ctx.toggleMenu}>
                Shop
            </Link>
            <Link to='/cart' onClick={ctx.toggleMenu}>
                Cart
            </Link>
        </Menu>
    );
}

export default AnimatedMenu;
