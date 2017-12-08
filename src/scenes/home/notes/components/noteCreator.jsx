import React from 'react';
import Note from '../note/note';
import { Utils } from "../../../index";


const NoteCreator = ({ data, ...other }) => (
    <div className="o-notes-cards-wrapper">
        {
            Utils.objToArray(data).map(item => (
                <Note
                    key={item.id}
                    title={item.title}
                    note={item.note}
                    modified={item.modified}
                    filter={item.filter}
                    id={item.id}
                    {...other}
                />
            ))
        }
    </div>
)

export default NoteCreator;
