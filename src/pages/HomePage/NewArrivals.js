import React from "react";
import Categories from "./Categories";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../redux/actions/filters";
import CarouselNevArrivals from "./CarouselNevArrivals";

function Section4() {
    const { category } = useSelector(({ filter }) => filter);

    const dispatch = useDispatch();

    const onSelectCategory = (name) => {
        dispatch(setCategory(name));
    };

    return (
        <div className='section sec-4'>
            <h1>NEW ARRIVALS</h1>
            <Categories
                activeCategory={category}
                onClickCategory={onSelectCategory}
                items={["WOOMAN", "MAN", "ACCESSORIES"]}
            />
            <div className='row justify-content-center'></div>
            <div className='container-fluid'>
                <CarouselNevArrivals />
            </div>
        </div>
    );
}

export default Section4;
