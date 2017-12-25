import React from "react";
import Editor from "draft-js-plugins-editor";
import './style.css';


export const TitleInput = props => (
    <section className="note_title_editor">
        <Editor
            placeholder="Title"
            onChange={e => props.setNote(e, 'title')}
            editorState={props.title}
        />
    </section>
)