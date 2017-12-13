import React from "react";
import './style.css';
import { Editor, EditorState } from "draft-js";


export default class Main extends React.Component {
    state = {
        note: EditorState.createEmpty(),
        title: EditorState.createEmpty()
    }


    render() {
        return (
            <main className="o-editor-body">
                <section className="editor-section">
                    <p className="category-editor">
                        UNCATEGORIZED
                    </p>

                    <div
                        contentEditable={true}
                        className="note-editor"
                        placeholder="Take a note..."
                        onFocus={this.props.openEditor}
                    >
                    </div>

                </section>
            </main >
        )
    }


    setNote = (e, item) => {
        return this.setState({ [item]: e || '' });
    }
}
