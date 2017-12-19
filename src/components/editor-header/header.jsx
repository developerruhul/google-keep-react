import React from 'react';
import './style.css';


export default class Footer extends React.Component {
    render() {
        return (
            <header className="o-editor-header">
                <section className="editor-filter">
                    <i className="material-icons aplied-filter">star</i>
                    <i className="material-icons">lock</i>
                    <i className="material-icons">timer</i>
                </section>

                <section role="button" className="editor-action-btn">SAVE</section>
            </header>
        )
    }
} 
