import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PageLinks({ items }) {
    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }
    return (
        <div className="block-27">
            <ul>
                <li><a href="/">&lt;</a></li>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}> <Link to="/items/page/">1</Link> </li>
                {items.map((name, index) => (
                    <li
                        className={activeItem === index ? 'active' : ''}
                        onClick={() => setActiveItem(index)} key={`${name}_${index}`}><Link to="/items/page/:pageNumber">{name}</Link></li>))
                }
            </ul>
        </div>
    );
}

export default PageLinks;