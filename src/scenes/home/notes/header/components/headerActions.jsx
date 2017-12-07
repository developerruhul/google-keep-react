import React from 'react';
import { CheckboxInput } from '../../../../index';


export default function HeaderActions({ toggleEditMode, ...other }) {
    return (
        <div className="js-notes-selected-actions">

            <div role="button" className="o-notes-header-btn c-notes-select-toggle">
                <span>All</span>
                <CheckboxInput
                    id="-f-4t3nkso49-"
                    {...other}
                    checked={other.checked}
                />
            </div>

            <div role="button" className="o-notes-header-btn">MOVE</div>
            <div onClick={other.deleteNote} role="button" className="o-notes-header-btn">DELETE</div>
            <div onMouseDown={toggleEditMode} role="button" className="o-notes-header-btn">CANCEL</div>

        </div>
    )
}
