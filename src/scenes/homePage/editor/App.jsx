import React from 'react';

export default function MainForm() {
    return (
        <form className="c-main-form">
            <p>UNCATEGORIZED</p>
            <input className="c-main-input" placeholder="Title" type="text" />
            <textarea required wrap="hard" placeholder="Take a note..." className="c-main-input" rows="2"></textarea>
            <button type="submit"> DONE </button>
        </form>
    )
}
