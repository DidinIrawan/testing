import React from 'react';

export const Input = (props) => {
    function handleChange(event) {
        props.handleChange(event.target.value)
    }
    return (
        <input onChange={handleChange} value={props.value} />
    );
};
