import React, { useState } from "react";
import classNames from "classnames";

import "../../sass/_config.sass";

function ItemSize({ items, onClickSize }) {
    const availableSizes = ["XS", "S", "M", "L", "XL", "XXl"];
    const [activeSize, setActiveSize] = useState();

    const onSelectSize = (index) => {
        setActiveSize(index);
    };

    return (
        <ul className='items-size'>
            {availableSizes.map((size, index) => (
                <li
                    key={size}
                    onClick={() => {
                        onSelectSize(index);
                        onClickSize(size);
                    }}
                    className={classNames({
                        active: activeSize === index,
                        disabled: !items.includes(size),
                    })}
                >
                    {size}
                </li>
            ))}
        </ul>
    );
}

export default ItemSize;
