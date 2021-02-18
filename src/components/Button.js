import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ onClick, className, outline, children, add }) => {
    return (
        <button
            onClick={onClick}
            className={classNames("button", className, {
                "button--outline": outline,
                "button--add": add,
            })}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
};

export default Button;
