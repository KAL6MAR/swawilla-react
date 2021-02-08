import React from 'react';
import Categories from './Categories';
import MainCarousel from './MainCarousel';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCategory } from '../redux/actions/filters'


function Section4() {

    const { items } = useSelector(({ stuff }) =>
        stuff.items
    );
    const onSelectCategory = index => {
        dispatch(setCategory(index))
    }


    const dispatch = useDispatch();

    return (
        <div className="section sec-4">
            <h1>НОВИНКИ</h1>
            <Categories onClickItem={onSelectCategory} items={['ШУБЫ', 'ДЖИНСЫ', 'АКСЕССУАРЫ']} />
            <div className="row justify-content-center">
            </div >
            <MainCarousel items={items} />
        </div>


    );
}

export default Section4;