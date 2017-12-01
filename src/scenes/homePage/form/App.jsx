import React from 'react';

export default function MainForm() {
    return (
        <form className="c-main-form">
            <input className="c-main-input" placeholder="Title" type="text" />
            <textarea required wrap="hard" placeholder="Take a note..." className="c-main-input" rows="2"></textarea>
            <div role="button"> DONE </div>
        </form>
    )
}