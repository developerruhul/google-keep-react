import React from 'react';
import { CheckboxInput } from '../../../index';
import { Utils } from "../../../index";
import './style/note.css';


const Note = ({ filter, title, note, modified, state, ...other }) => (
    <article className="o-note">
        <CheckboxInput
            {...other}
            checked={state[other.id]}
        />

        <h1 className="c-note-title">{title}</h1>
        <p className="c-note-description">{Utils.truncate(note)}</p>

        <footer className="c-note-footer">
            <span>Modified: {modified}</span>
            {filter ? <i className="material-icons js-decorate-in-footer">{filter}</i> : null}
        </footer>
    </article>
);

export default Note;
