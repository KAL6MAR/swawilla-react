import React from "react";

import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux'
import TrendingCollectionsCarouselItems from "./TrendingCollectionsCarouselItems";

function SampleNextArrow(props) {

    const { className,style, onClick } = props

    return (
        <div 
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={faArrowLeft}
                color="#000"
                style={{boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)', borderRadius: '50px', backgroundColor:'white', border: '0',width:'2rem', height:'2rem', padding: '8px'}}
                size="1x"
            />
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
      
    const { className,style, onClick } = props
    
    return (
        <div 
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={faArrowRight}
                color="#000"
                style={{boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)', borderRadius: '50px', backgroundColor:'white', border: '0',width:'2rem', height:'2rem', padding: '8px'}}
                size="2x"
            />
        </div>
    );
  }

export default function TrendingCollectionsCarousel() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '40px',
        prevArrow:<SampleNextArrow/> ,
        nextArrow:<SamplePrevArrow/> ,
    }; 

    const trending = useSelector(({ stuff }) => stuff.trending)

    return (
            <Slider {...settings}>
                {
                    trending && trending.map(obj => <TrendingCollectionsCarouselItems key={obj.id} {...obj} />)
                }
            </Slider>
    );
}
