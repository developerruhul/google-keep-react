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

                    {/* <h1
                        contentEditable={true}
                        className="title-editor"
                        placeholder="Title"
                        onBlur={this.grabTitle}
                        onPaste={e => this.setNote(e, 'title')}
                        dangerouslySetInnerHTML={{ __html: this.state.title }}
                    >
                    </h1> */}
                    <Editor
                        editorState={this.state.title}
                        onChange={e => this.setNote(e, 'title')}
                        placeholder="hihvjgv"
                    />

                    {/* <Editor
                        placeholder="Notes"
                        contentEditable={true}
                        className="note-editor"
                        role="textbox"
                        onChange={e => this.setNote(e, 'note')}
                        html={this.state.note}
                        onBlur={this.blured}
                    /> */}
                </section>
            </main >
        )
    }


    blured = () => {
        console.log(this.state.note)
    }

    setNote = (e, item) => {
        return this.setState({ [item]: e || '' });
    }
}
