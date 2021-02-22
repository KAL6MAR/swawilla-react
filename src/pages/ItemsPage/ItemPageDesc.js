import React, { useState } from "react";
import { ItemSize } from "./";

import { Button } from "../../components/";

function ItemPageDesc({ item, addedCount, onClickAddItem }) {
    const { name, type, price, sale, size, img, id } = item;
    const onAddItem = () => {
        const obj = {
            id,
            price,
            img: img[0],
            name,
            size: activeSize,
        };
        if (activeSize === undefined) {
            console.log("Лох");
        } else {
            onClickAddItem(obj);
        }
    };

    const [activeSize, setActiveSize] = useState();

    const updateData = (value) => {
        setActiveSize(value);
    };

    return (
        <div className='item-desc col-md-3 col-sm-3 align-self-center'>
            <h1>{name}</h1>
            <p className='salle'>
                <span>{sale === 0 ? "" : sale}</span> {price}₴
            </p>
            <p className='description'>{type}</p>
            <div className='size'>
                <h2>РАЗМЕР</h2>
                <ItemSize onClickSize={updateData} items={size} />

                <p>
                    <a href='/'>Как выбрать размер?</a>
                </p>
            </div>
            <div className='buttons-place'>
                <Button key='1' onClick={onAddItem} add outline>
                    <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                            fill='white'
                        />
                    </svg>
                    <span>Добавить</span>

                    {addedCount && <i>{addedCount}</i>}
                </Button>

                <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M8.5 16.054a.997.997 0 01-.657-.247c-.687-.6-1.35-1.165-1.933-1.662l-.003-.003c-1.713-1.46-3.192-2.72-4.22-3.961C.535 8.792 0 7.476 0 6.038c0-1.397.479-2.686 1.349-3.63a4.571 4.571 0 013.4-1.48c.981 0 1.88.31 2.671.923.4.309.761.686 1.08 1.127.319-.44.68-.818 1.08-1.127A4.276 4.276 0 0112.251.93c1.313 0 2.52.525 3.4 1.48.87.943 1.349 2.232 1.349 3.629 0 1.437-.536 2.753-1.686 4.141-1.029 1.242-2.508 2.502-4.22 3.962-.585.498-1.249 1.064-1.937 1.665a.997.997 0 01-.657.247zM4.75 1.926c-1.032 0-1.98.411-2.67 1.159C1.382 3.844.997 4.893.997 6.039c0 1.209.45 2.29 1.457 3.506.974 1.175 2.422 2.41 4.1 3.84l.003.002c.586.5 1.25 1.066 1.943 1.671.696-.606 1.361-1.174 1.949-1.674 1.677-1.43 3.125-2.664 4.1-3.839 1.007-1.216 1.456-2.297 1.456-3.506 0-1.146-.385-2.195-1.085-2.954a3.586 3.586 0 00-2.668-1.16c-.756 0-1.45.24-2.062.714-.546.423-.926.957-1.15 1.33a.624.624 0 01-.539.307.624.624 0 01-.54-.307c-.223-.373-.603-.907-1.15-1.33a3.303 3.303 0 00-2.06-.713z'
                        fill='#000'
                    />
                </svg>
                <svg
                    width='17'
                    height='17'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M16.946 5.41a.139.139 0 000-.22l-3.42-2.63a.14.14 0 00-.214.163l.57 1.442c-2.59.097-4.058 1.022-5.085 2.095.382.436.7.878.989 1.28.143.201.28.392.419.575.779-.916 1.727-1.57 3.668-1.659l-.561 1.422a.14.14 0 00.13.19c.03 0 .06-.01.085-.028l3.419-2.63zM3.474 8.96a.139.139 0 01.169 0 .14.14 0 01.045.163l-.557 1.41c1.933-.122 2.884-.79 3.665-1.71.136.18.272.369.413.566.29.405.61.85.995 1.29-1.029 1.077-2.498 2.012-5.089 2.148l.573 1.45a.14.14 0 01-.214.162L.054 11.81a.138.138 0 010-.22l3.42-2.63zm5.953-1.162c1.021 1.424 1.846 2.57 4.442 2.736l-.557-1.412a.14.14 0 01.214-.162l3.42 2.63a.139.139 0 010 .22l-3.42 2.63a.14.14 0 01-.214-.163l.573-1.45c-3.81-.2-5.195-2.128-6.318-3.695-1.019-1.42-1.836-2.557-4.44-2.676l.561 1.422a.14.14 0 01-.214.162L.054 5.41a.139.139 0 010-.22l3.42-2.63a.14.14 0 01.214.163l-.57 1.442c3.805.143 5.19 2.071 6.31 3.633z'
                        fill='#000'
                    />
                </svg>
            </div>
        </div>
    );
}

export default ItemPageDesc;
