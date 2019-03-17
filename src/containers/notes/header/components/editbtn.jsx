import React from "react";

export default function EditButton({ toggle }) {
  return (
    <div
      onMouseDown={toggle}
      role="button"
      className="o-notes-header-btn js-note-edit"
    >
      EDIT
    </div>
  );
}
