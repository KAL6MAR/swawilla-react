import React from "react";

function Button({ text, onClick }) {
    return (
        <button className='add-to-cart btn btn-primary' onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
