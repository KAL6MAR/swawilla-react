import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    counterIncrement,
    counterDecrement,
} from "../../redux/actions/counter";

function ItemAmmountButton() {
    const dispatch = useDispatch();

    const { value } = useSelector(({ counter }) => counter);
    // eslint-disable-next-line
    const [counter, setCounter] = useState();
    console.log(value);

    const setCounterIncrement = () => {
        dispatch(counterIncrement());
        setCounter(value);
    };
    const setCounterDecrement = () => {
        if (value !== 0) {
            dispatch(counterDecrement());
            setCounter(value);
        }
    };
    return (
        <div className='item-ammount'>
            <span onClick={setCounterIncrement}>+</span>
            <p>{value}</p>
            <span onClick={setCounterDecrement}>-</span>
        </div>
    );
}

export default ItemAmmountButton;
