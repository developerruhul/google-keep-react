import React from "react";
import "./style/style.css";

import MainCategory from "../MainCategory/app";
import TitleInput from "../Titleinput/app";

class Main extends React.Component {
  render() {
    const props = this.props;

    return (
      <main className="o-editor-body">
        <section className="editor-section">
          <MainCategory {...props} />

          {/* Title Input */}
          <TitleInput {...props} />

          {/* Description input */}
          <section
            title="TIP : select any text to style"
            id={this.props.id}
            className="note_desc_editor"
          >
            <textarea
              onFocus={props.openEditor}
              onChange={e => props.setNote(e, "note")}
              value={props.note}
              placeholder="Take a note..."
            />
          </section>
        </section>
      </main>
    );
  }
}

export default Main;
