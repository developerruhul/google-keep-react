import React from "react";
import MainCategory from "../MainCategory/app";
import "./style/style.css";

class Main extends React.Component {
  render() {
    const props = this.props;

    return (
      <main className="o-editor-body">
        <section className="editor-section">
          <MainCategory {...props} />

          {/* Title Input */}
          <input
            className="note_title_editor"
            placeholder="Title"
            onChange={e => props.setNote(e.target.value, "title")}
            value={props.title}
          />

          {/* Description input */}
          <textarea
            className="note_desc_editor"
            onFocus={props.openEditor}
            onChange={e => props.setNote(e.target.value, "note")}
            value={props.note}
            placeholder="Take a note..."
          />
        </section>
      </main>
    );
  }
}

export default Main;
