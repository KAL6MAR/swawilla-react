import React from "react";
import Slider from "react-slick";

export default function ItemPageCarousel({ img }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "40px",
    };

    return (
        <Slider {...settings}>
            {img.map((name, index) => (
                <img src={img[index]} alt={name} key={name} />
            ))}
        </Slider>
    );
}
