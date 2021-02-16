import React from "react";
import ItemPageCarousel from "./ItemsPage/ItemPageCarousel";
import ItemPageDesc from "./ItemsPage/ItemPageDesc";
import { useSelector } from "react-redux";

function ItemPage({ match }) {
    const { id } = match.params;
    console.log(typeof id);
    const { isLoaded } = useSelector(({ stuff }) => stuff);
    const getItem = useSelector(({ stuff }) =>
        //eslint-disable-next-line
        stuff.items.find((item) => item.id == id)
    );
    console.log(getItem);
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
export default ItemPage;
