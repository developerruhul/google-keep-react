import React from "react";
import './style.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="o-editor-footer">
                <i className="material-icons aplied">check</i>
                <i className="material-icons">format_list_numbered</i>
                <i className="material-icons">format_list_bulleted</i>
                <i className="material-icons">format_bold</i>
                <i className="material-icons">format_italic</i>
                <i className="material-icons">format_underline</i>
                <i className="material-icons">format_color_text</i>
            </footer>
        )
    }
}
