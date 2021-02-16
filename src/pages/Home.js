import React, { useEffect } from "react";
import HeroSection from "./HomePage/HeroSection";
import Advantages from "./HomePage/Advantages";
import TrendingCollections from "./HomePage/TrendingCollections";
import NewArrivals from "./HomePage/NewArrivals";
import { fetchStuff } from "../redux/actions/stuff";
import { useDispatch, useSelector } from "react-redux";

function Home() {
    const dispatch = useDispatch();
    const { category } = useSelector(({ filter }) => filter);

    useEffect(() => {
        dispatch(fetchStuff(category));
        //eslint-disable-next-line
    }, [category]);

    return (
        <>
            <HeroSection />
            <Advantages />
            <TrendingCollections />
            <NewArrivals />
        </>
    );
}

export default Home;
