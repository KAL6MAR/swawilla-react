import React from "react";

function ItemSize({ activeSize, items, onClickSize }) {
    console.log(activeSize);
    return (
        <ul className='items-size'>
            {items &&
                items.map((name, index) => (
                    <li
                        className={activeSize === name ? "active" : ""}
                        onClick={() => onClickSize(name)}
                        key={`${name}_${index}`}
                    >
                        {console.log(name)}
                        {name}
                    </li>
                ))}
        </ul>
    );
}

export default ItemSize;
