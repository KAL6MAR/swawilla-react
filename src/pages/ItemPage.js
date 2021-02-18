import React from "react";

import ItemPageCarousel from "./ItemsPage/ItemPageCarousel";
import ItemPageDesc from "./ItemsPage/ItemPageDesc";
import { useSelector, useDispatch } from "react-redux";

import { addItemToCart } from "../redux/actions/cart";

function ItemPage({ match }) {
    const { id } = match.params;
    const dispatch = useDispatch();

    const { isLoaded } = useSelector(({ stuff }) => stuff);

    const getItem = useSelector(({ stuff }) =>
        //eslint-disable-next-line
        stuff.items.find((item) => item.id == id)
    );

    const getArrivals = useSelector(({ stuff }) =>
        //eslint-disable-next-line
        stuff.arrivals.find((item) => item.id == id)
    );

    const handleAddItemToCart = (obj) => {
        dispatch(addItemToCart(obj));
        console.log(obj);
    };

    const cartItems = useSelector(({ cart }) => cart.items);

    if (isLoaded !== false) {
        const { img } = getItem !== undefined ? getItem : getArrivals;

        return (
            <div className='section item-sec'>
                <div className='row conteiner-fluid'>
                    <div className='col-md-6'>
                        <ItemPageCarousel img={img} />
                    </div>

                    <ItemPageDesc
                        item={getItem !== undefined ? getItem : getArrivals}
                        addedCount={
                            cartItems[parseInt(id)] &&
                            cartItems[parseInt(id)].length
                        }
                        onClickAddItem={handleAddItemToCart}
                    />
                </div>
            </div>
        );
    } else if (isLoaded === false) {
        return (
            <div className='container d-flex justify-content-center align-items-center loading'>
                <h1>Loading...</h1>
            </div>
        );
    }
}
export default ItemPage;
