import React from 'react';
import { CheckboxInput } from '../../../index';
// import { Utils } from "../../../index";
import './style/note.css';
import Main from "../../../../components/editor-main/main";


const Note = ({ filter, title, note, modified, state, ...other }) => (
    <article className="o-note">
        <CheckboxInput
            {...other}
            checked={state[other.id]}
        />


    </article>
);

export default Note;
