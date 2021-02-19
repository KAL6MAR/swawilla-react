import React from "react";
import { MaiGirlNew } from "../../assets/index";
import HeroSectionCarousel from "./HeroSectionCarousel";

function Section1(props) {
    return (
        <div>
            <div className='main'>
                <div className='row align-items-center'>
                    <div className='left-desc'>
                        <h1>WOMAN</h1>
                        <span></span>
                    </div>
                    <div className='col-md-3'>
                        <div className='main-girl'>
                            <img src={MaiGirlNew} alt='' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12  mx-auto'>
                        <HeroSectionCarousel />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;
