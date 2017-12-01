import React from 'react';
import { CheckboxInput } from '../../../index';
import { Utils } from "../../../index";


const Note = ({ decorate, id, title, note, modified }) => (
    <article className="o-note">
    
        <CheckboxInput id={id} />

        <h1 className="c-note-title">{title}</h1>

        <p className="c-note-description">{Utils.truncate(note)}</p>

        <footer className="c-note-footer">
            {modified}
            <i className="material-icons js-decorate-in-footer">{decorate}</i>
        </footer>

    </article>
);

export default Note;
