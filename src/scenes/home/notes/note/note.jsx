import React from 'react';
import { CheckboxInput } from '../../../index';
import { Utils } from "../../../index";
import './style/note.css';
import Editors from '../components/noteEditor/app';


const Note = ({ filter, title, note, modified, state, ...other }) => (
    <article className="o-note">
        <CheckboxInput
            {...other}
            checked={state[other.id]}
        />

        <Editors />

        <footer className="c-note-footer">
            <span>Modified: {modified}</span>
            {filter ? <i className="material-icons js-decorate-in-footer">{filter}</i> : null}
        </footer>
    </article>
);

export default Note;
