import React from "react";
import TrendingCollectionsCarousel from "./TrendingCollectionsCarousel";

function Section3(props) {
    return (
        <div className='section sec-3'>
            <h1>TRENDING COLLECTIONS</h1>
            <h4>
                OUR NEWEST STYLES HAVE JUST-RIGHT AMOUNG OF COZY, COLORS, AND
                COMFORT.
            </h4>
            <div className='container '>
                <TrendingCollectionsCarousel />
            </div>
        </div>
    );
}

export default Section3;
