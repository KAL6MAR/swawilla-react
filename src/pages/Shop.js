import React, { useEffect } from "react";
import Collection from "./ShopPage/Collection";
import ShopItem from "./ShopPage/ShopItem";
import PageLinks from "./ShopPage/PageLinks";
import { useSelector, useDispatch } from "react-redux";
import { fetchStuff } from "../redux/actions/stuff";
import { addItemToCart } from "../redux/actions/cart";

function Shop() {
    const { category } = useSelector(({ filter }) => filter);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStuff(category));
        // eslint-disable-next-line
    }, [dispatch]);

    const { items } = useSelector(({ stuff }) => {
        return {
            items: stuff.items,
        };
    });

    const handleAddItemToCart = (obj) => {
        dispatch(addItemToCart(obj));
    };

    return (
        <div>
            <Collection />
            <section className='ftco-section bg-light'>
                <div className='container-fluid'>
                    <div className='row'>
                        {items.map((obj) => (
                            <ShopItem
                                onClickAddItem={handleAddItemToCart}
                                key={obj.id}
                                {...obj}
                            />
                        ))}
                    </div>
                    <div className='row mt-5'>
                        <div className='col text-center'>
                            <PageLinks
                                onClickItem={(name) => console.log(name)}
                                items={[2, 3, 4]}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Shop;
