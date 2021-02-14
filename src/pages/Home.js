import React from 'react'
import HeroSection from './HomePage/HeroSection';
import Advantages from './HomePage/Advantages';
import TrendingCollections from './HomePage/TrendingCollections';
import NewArrivals from './HomePage/NewArrivals';

function Home() {
    return (
        <>
            <HeroSection />
            <Advantages />
            <TrendingCollections />
            <NewArrivals />
        </>
    )
}

export default Home
