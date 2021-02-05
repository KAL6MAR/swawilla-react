import React, { useState } from 'react';

function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div>
            <ul className="selectors">
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>ВСЁ</li>
                {items.map((name, index) => (
                    <li
                        className={activeItem === index ? 'active' : ''}
                        onClick={() => setActiveItem(index)} key={`${name}_${index}`}>{name}</li>))
                }
            </ul>
        </div>
    );
}

export default Categories;