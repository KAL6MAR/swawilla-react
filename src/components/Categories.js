import React from 'react';


function Categories({ activeCategory, items, onClickCategory }) {

    return (
        <div>
            <ul className="selectors">
                <li className={activeCategory === "ВСЁ" ? 'active' : ''} onClick={() => onClickCategory("ВСЁ")}>ВСЁ</li>
                {items.map((name, index) => (
                    <li
                        className={activeCategory === name ? 'active' : ''}
                        onClick={() => onClickCategory(name)} key={`${name}_${index}`}>{name}</li>))
                }
            </ul>
        </div>
    );
}

export default Categories;