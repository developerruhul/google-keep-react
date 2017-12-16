import React from "react";
import './style/style.css';
import { Editor } from "draft-js";
import 'draft-js/dist/Draft.css';


export default class Main extends React.Component {
    render() {
        return (
            <main className="o-editor-body">
                <section className={`editor-section ${this.props.className}`}>
                    <p className="category-editor">
                        UNCATEGORIZED
                    </p>

                    <section className="note_title_editor">
                        <input
                            type="text"
                            placeholder="Title"
                            onChange={e => this.props.setNote(e.currentTarget.value, 'title')}
                            value={this.props.state.title}
                        />
                    </section>


                    <section className="note_desc_editor">
                        <Editor
                            onFocus={this.props.openEditor || (e => null)}
                            onChange={e => this.props.setNote(e, 'note')}
                            editorState={this.props.state.note}
                            handleKeyCommand={this.props.handleKeyCommand || (e => null)}
                            placeholder="Take a note..."
                        />
                    </section>

                </section>
            </main >
        )
    }

}
