import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import CarouselItem from "./CarouselItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white" }}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={faArrowLeft}
                color='#000'
                style={{
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    border: "0",
                    width: "2rem",
                    height: "2rem",
                    padding: "8px",
                }}
                size='1x'
            />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white" }}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={faArrowRight}
                color='#000'
                style={{
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    border: "0",
                    width: "2rem",
                    height: "2rem",
                    padding: "8px",
                }}
                size='2x'
            />
        </div>
    );
}

export default function SimpleSlider() {
    const arrivals = useSelector(({ stuff }) => stuff.arrivals);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: "40px",
        prevArrow: <SampleNextArrow />,
        nextArrow: <SamplePrevArrow />,
    };
    return (
        <Slider {...settings}>
            {arrivals &&
                arrivals.map((obj) => <CarouselItem key={obj.id} {...obj} />)}
        </Slider>
    );
}
