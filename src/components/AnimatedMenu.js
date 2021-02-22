import React from "react";
import { push as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faShoppingCart,
    faTshirt,
} from "@fortawesome/free-solid-svg-icons";

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
                <FontAwesomeIcon
                    icon={faHome}
                    color='#fff'
                    style={{
                        padding: "8px",
                    }}
                    size='2x'
                />
                Home
            </Link>
            <Link to='/shop' onClick={ctx.toggleMenu}>
                <FontAwesomeIcon
                    icon={faTshirt}
                    color='#fff'
                    style={{
                        padding: "8px",
                    }}
                    size='2x'
                />
                Shop
            </Link>
            <Link to='/cart' onClick={ctx.toggleMenu}>
                <FontAwesomeIcon
                    icon={faShoppingCart}
                    color='#fff'
                    style={{
                        padding: "8px",
                    }}
                    size='2x'
                />
                Cart
            </Link>
        </Menu>
    );
}

export default AnimatedMenu;
