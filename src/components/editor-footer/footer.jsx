import React from 'react';
import './style.css';


export default class Footer extends React.Component {
    render() {
        return (
            <header className="o-editor-header">


                <section className="editor-filter">
                    <i
                        className={`material-icons ${this.props.star ? 'applied-filter' : ''}`}
                        onMouseDown={this.props.starChange} >
                        star
                    </i>

                    <i
                        onMouseDown={this.props.lockChange}
                        className={`material-icons ${this.props.lock ? 'applied-filter' : ''}`}>
                        lock
                    </i>
                </section>



                {/* save the note when user clicks this big save button  */}
                <section
                    onClick={this.props.saveNote}
                    role="button"
                    className="editor-action-btn">
                    SAVE
                </section>

            </header >
        )
    }
}


