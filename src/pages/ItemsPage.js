import React from "react";
import store from "../redux/store";
import ItemPageCarousel from "./ItemsPage/ItemPageCarousel";
import ItemPageDesc from "./ItemsPage/ItemPageDesc";
import { shallowEqual, useSelector } from "react-redux";

const selectItems = (state) => state.stuff.map((items) => items.id);

function ItemsPage({ match }) {
    const { id } = match.params;

    const { isLoaded } = useSelector(({ stuff }) => stuff);
    const getItem = useSelector(selectItems, shallowEqual);

    if (isLoaded !== false) {
        const { img } = getItem;

        return (
            <div className='section item-sec'>
                <div className='row conteiner-fluid'>
                    <div className='col-md-6'>
                        <ItemPageCarousel img={img} />
                    </div>

                    <ItemPageDesc item={getItem} />
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

export default ItemsPage;
