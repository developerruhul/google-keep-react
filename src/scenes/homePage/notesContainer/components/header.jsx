import React from 'react';
import { CheckboxInput } from '../../../index';


const Header = ({ toggleEditMode }) => (
    <header className="o-notes-header">
        <h1 className="o-notes-header-title">NOTES</h1>

        <div
            onMouseDown={toggleEditMode}
            role="button" className="o-notes-header-btn js-note-edit">
            EDIT
        </div>

        <div className="js-notes-selected-actions">

            <div role="button" className="o-notes-header-btn c-notes-select-toggle">
                <span>All</span>
                <CheckboxInput id='iAmRuhul' />
            </div>
            <div role="button" className="o-notes-header-btn">MOVE</div>
            <div role="button" className="o-notes-header-btn">DELETE</div>
            <div onMouseDown={toggleEditMode} role="button" className="o-notes-header-btn">CANCEL</div>

        </div>

    </header>
)

export default Header;