import React from 'react';
import './style/checkbox.css';


export default function Checkbox({ id, onChange, checked = false }) {
    return (
        <div className="o-samsung-checkbox">
            <input
                onChange={(e) => onChange(id)}
                id={id}
                type="checkbox"
                checked={checked}
            />
            <label
                className="c-samsung-checkbox"
                htmlFor={id}>
            </label>
        </div>
    )
}
