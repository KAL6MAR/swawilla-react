import React from 'react';
import { ItemGirl1, ItemGirl2 } from '../img'
function ItemsPage(props) {
    return (
        <div className="section item-sec">
            <div className="row conteiner-fluid">
                <div className="carousel slide multi-item-carousel col-sm-6 col-md-6" id="theCarousel">
                    <div className="carousel-inner row w-100">
                        <div className="carousel-item active col-md-6">
                            <img src={ItemGirl1} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                        <div className="carousel-item col-md-6">
                            <img src={ItemGirl2} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                        <div className="carousel-item col-md-6">
                            <img src={ItemGirl1} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                        <div className="carousel-item col-md-6">
                            <img src={ItemGirl2} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                    </div>
                    <div className="controls-wrapper">
                        <div className="control-prev">
                            <a className="carousel-control-prev" href="#theCarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true">🠔</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </div>
                        <div className="control-next">
                            <a className="carousel-control-next" href="#theCarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true">🠖</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="item-desc col-md-3 col-sm-3 align-self-center">

                    <h1>Mango - WOOD FUR COAT </h1>
                    <p className="salle"><span>3599</span> 1999 ₴</p>
                    <p className="description">Однотонная укороченая шестяная шуба,<br />
                                        отличный выбор на зиму. Стильный цвет станет<br />
                                            хорошим другом вашему стилю одежды</p>
                    <div className="size">
                        <h2>РАЗМЕР</h2>
                        <ul className="items-size">
                            <li>XS</li>
                            <li className="active">S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                            <li>XXL</li>
                        </ul>
                        <p><a href="/">Как выбрать размер?</a></p>
                    </div>
                    <div className="buttons-place">
                        <div className="item-ammount">
                            <span>+</span>
                            <p>01</p>
                            <span>-</span>
                        </div>
                        <a href="/" className="btn-black">В КОРЗИНУ</a>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 16.054a.997.997 0 01-.657-.247c-.687-.6-1.35-1.165-1.933-1.662l-.003-.003c-1.713-1.46-3.192-2.72-4.22-3.961C.535 8.792 0 7.476 0 6.038c0-1.397.479-2.686 1.349-3.63a4.571 4.571 0 013.4-1.48c.981 0 1.88.31 2.671.923.4.309.761.686 1.08 1.127.319-.44.68-.818 1.08-1.127A4.276 4.276 0 0112.251.93c1.313 0 2.52.525 3.4 1.48.87.943 1.349 2.232 1.349 3.629 0 1.437-.536 2.753-1.686 4.141-1.029 1.242-2.508 2.502-4.22 3.962-.585.498-1.249 1.064-1.937 1.665a.997.997 0 01-.657.247zM4.75 1.926c-1.032 0-1.98.411-2.67 1.159C1.382 3.844.997 4.893.997 6.039c0 1.209.45 2.29 1.457 3.506.974 1.175 2.422 2.41 4.1 3.84l.003.002c.586.5 1.25 1.066 1.943 1.671.696-.606 1.361-1.174 1.949-1.674 1.677-1.43 3.125-2.664 4.1-3.839 1.007-1.216 1.456-2.297 1.456-3.506 0-1.146-.385-2.195-1.085-2.954a3.586 3.586 0 00-2.668-1.16c-.756 0-1.45.24-2.062.714-.546.423-.926.957-1.15 1.33a.624.624 0 01-.539.307.624.624 0 01-.54-.307c-.223-.373-.603-.907-1.15-1.33a3.303 3.303 0 00-2.06-.713z" fill="#000" /></svg>
                        <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.946 5.41a.139.139 0 000-.22l-3.42-2.63a.14.14 0 00-.214.163l.57 1.442c-2.59.097-4.058 1.022-5.085 2.095.382.436.7.878.989 1.28.143.201.28.392.419.575.779-.916 1.727-1.57 3.668-1.659l-.561 1.422a.14.14 0 00.13.19c.03 0 .06-.01.085-.028l3.419-2.63zM3.474 8.96a.139.139 0 01.169 0 .14.14 0 01.045.163l-.557 1.41c1.933-.122 2.884-.79 3.665-1.71.136.18.272.369.413.566.29.405.61.85.995 1.29-1.029 1.077-2.498 2.012-5.089 2.148l.573 1.45a.14.14 0 01-.214.162L.054 11.81a.138.138 0 010-.22l3.42-2.63zm5.953-1.162c1.021 1.424 1.846 2.57 4.442 2.736l-.557-1.412a.14.14 0 01.214-.162l3.42 2.63a.139.139 0 010 .22l-3.42 2.63a.14.14 0 01-.214-.163l.573-1.45c-3.81-.2-5.195-2.128-6.318-3.695-1.019-1.42-1.836-2.557-4.44-2.676l.561 1.422a.14.14 0 01-.214.162L.054 5.41a.139.139 0 010-.22l3.42-2.63a.14.14 0 01.214.163l-.57 1.442c3.805.143 5.19 2.071 6.31 3.633z" fill="#000" /></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemsPage;