import React from 'react';
import { CheckboxInput } from '../../../../index';


export default function HeaderActions({ toggleEditMode, onChange, ...other }) {
    return (
        <div className="js-notes-selected-actions">

            <div role="button" className="o-notes-header-btn c-notes-select-toggle">
                <span>All</span>
                <input
                    type="checkbox"
                    className="o-samsung-checkbox"
                    onChange={onChange}
                    checked={other.checked}
                />
            </div>

            <div role="button" className="o-notes-header-btn">MOVE</div>
            <div onClick={other.deleteNote} role="button" className="o-notes-header-btn">DELETE</div>
            <div onMouseDown={toggleEditMode} role="button" className="o-notes-header-btn">CANCEL</div>

        </div>
    )
}
