import React from "react";

export default function TitleInput(props) {
  return (
    <section className="note_title_editor">
      <input
        placeholder="Title"
        onChange={e => props.setNote(e, "title")}
        value={props.title}
      />
    </section>
  );
}
