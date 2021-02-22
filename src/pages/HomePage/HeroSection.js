import React from "react";
import { MaiGirlNew } from "../../assets/index";
import HeroSectionCarousel from "./HeroSectionCarousel";

function Section1(props) {
    return (
        <div>
            <div className='main d-flex align-items-center'>
                <div className='container-fluid'>
                    <div className='row align-items-center justify-content-between '>
                        <div className='col-1 left-desc'>
                            <h1>WOMAN</h1>
                            <span></span>
                        </div>
                        <div className='col-md-3  '>
                            <div className='main-girl'>
                                <img src={MaiGirlNew} alt='' />
                            </div>
                        </div>
                        <div className='col-md-12 col-12 col-lg-4 mx-auto my-auto'>
                            <HeroSectionCarousel />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container '>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col main--carousel '>
                            <HeroSectionCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        </div>
    );
}

export default Section1;
