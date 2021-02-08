import React from 'react';
import CarouselItem from './CarouselItem';
import { useSelector } from 'react-redux'
function MainCarousel() {

    const { items } = useSelector(({ stuff, filter }) => {
        return {
            items: stuff.items,
        };
    });

    return (
        <div id="carousel-3" className="carousel slide" data-ride="carousel">
            <div className="container carousel-inner no-padding">
                <div className="carousel-item active">
                    <h1>HUI</h1>
                </div >
                {
                    items && items.map(obj => <CarouselItem key={obj.id} {...obj} />)
                }
                <a className="carousel-control-prev" href="#carousel-3" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true">🠔</span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-3" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true">🠖</span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default MainCarousel;