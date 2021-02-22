import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TransparentGirl1 } from "../../assets/index";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
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
            style={{ ...style, display: "block" }}
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
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "40px",
        prevArrow: <SampleNextArrow />,
        nextArrow: <SamplePrevArrow />,
        className: "heroSectionCarousel",
    };
    return (
        <Slider {...settings}>
            <div className='HeroCarouselItem'>
                <img src={TransparentGirl1} alt='' />
                <div className='caption'>
                    <h6>LATTEST ITEM</h6>
                    <h5>
                        Black hoodie
                        <br /> with print
                    </h5>
                    <img
                        src='images/dist/shopping-cart.svg'
                        alt=''
                        className='shopping-bag'
                    />
                    <a href='/' className='btn'>
                        SHOP NOW
                    </a>
                </div>
            </div>
            <div className='HeroCarouselItem'>
                <img src={TransparentGirl1} alt='' />
                <div className='caption'>
                    <h6>НОВИНКА</h6>
                    <h5>
                        Черное худи <br /> с принтом
                    </h5>
                    <img
                        src='images/dist/shopping-cart.svg'
                        alt=''
                        className='shopping-bag'
                    />
                    <a href='/' className='btn'>
                        КУПИТЬ
                    </a>
                </div>
            </div>
            <div className='HeroCarouselItem'>
                <img src={TransparentGirl1} alt='' />
                <div className='caption'>
                    <h6>НОВИНКА</h6>
                    <h5>
                        Черное худи <br /> с принтом
                    </h5>
                    <img
                        src='images/dist/shopping-cart.svg'
                        alt=''
                        className='shopping-bag'
                    />
                    <a href='/' className='btn'>
                        КУПИТЬ
                    </a>
                </div>
            </div>
        </Slider>
    );
}
