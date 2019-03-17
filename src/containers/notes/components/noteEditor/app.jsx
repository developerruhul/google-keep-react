import React from "react";
// import { Editor, convertFromRaw, EditorState } from "draft-js";

export default class Editors extends React.Component {
  // state = {
  //     note: EditorState.createWithContent(this.props.note),
  //     title: EditorState.createWithContent(this.props.title)
  // }

  render() {
    return (
      <section className="inline-note-editor">
        <section className="c-note-title">
          <h1>hih</h1>
        </section>
        <section className="c-note-description" />
      </section>
    );
  }
}
