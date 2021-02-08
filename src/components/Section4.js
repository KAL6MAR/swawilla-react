import React from 'react';
import Categories from './Categories';
import MainCarousel from './MainCarousel';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCategory } from '../redux/actions/filters'


function Section4() {

    const { category } = useSelector(({ filter }) => filter);

    const dispatch = useDispatch();

    const { items } = useSelector(({ stuff }) =>
        stuff.items
    );
    const onSelectCategory = name => {
        dispatch(setCategory(name))
    }



    return (
        <div className="section sec-4">
            <h1>НОВИНКИ</h1>
            <Categories activeCategory={category} onClickCategory={onSelectCategory} items={['ШУБЫ', 'Джемпер', 'АКСЕССУАРЫ']} />
            <div className="row justify-content-center">
            </div >
            <MainCarousel items={items} />
        </div>


    );
}

export default Section4;