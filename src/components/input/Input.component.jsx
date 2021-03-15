import React from "react";

const Input = (props) => {
    const { children, ...restProps } = props;

    return (
        <div className="form__group">
            <label className="form__label">{children}</label>
            <input className="form__input" {...restProps} />
        </div>
    );
};

export default Input;
