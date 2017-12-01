import React from 'react';


export default function Checkbox({ id }) {
    return (
        <div className="o-samsung-checkbox">
            <input id={id} type="checkbox" />
            <label className="c-samsung-checkbox" htmlFor={id}></label>
        </div>
    )
}