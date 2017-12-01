import React from 'react';
import './app.css';


export default class App extends React.Component {
    render() {
        return (
            <main className="o-body">
                <header className="o-app-header">
                    <h1 className="c-samsung-title">Samsung Notes Web</h1>
                </header>

                <nav className="app__main__nav">

                    <div className="all__notes active nav__link">
                        <i className="material-icons">lightbulb_outline</i>
                        <span>All</span>
                    </div>

                    <div className="link__category">
                        <h3>Filter</h3>

                        <div className="all__notes nav__link">
                            <i className="material-icons">star</i>
                            <span>Favorites</span>
                        </div>

                        <div className="nav__link">
                            <i className="material-icons">alarm</i>
                            <span>Reminder</span>
                        </div>

                        <div className="nav__link">
                            <i className="material-icons">lock</i>
                            <span>Locked Notes</span>
                        </div>
                    </div>

                    <div className="link__category">
                        <h3>Catergories <span className="js-catergory-edit">EDIT</span></h3>

                        <div className="nav__link">
                            <i className="material-icons">label</i>
                            <span>Study</span>
                        </div>

                        <div className="nav__link">
                            <i className="material-icons">label</i>
                            <span>Islam</span>
                        </div>

                        <div className="nav__link">
                            <i className="material-icons">add</i>
                            <span>Create Category</span>
                        </div>
                    </div>

                </nav>

                <div className="o-main-body">
                    <div className="o-main-layout">

                        <form className="c-main-form">
                            <input className="c-main-input" placeholder="Title" type="text" />
                            <textarea required wrap="hard" placeholder="Take a note..." className="c-main-input" rows="2"></textarea>
                            <div role="button"> DONE </div>
                        </form>

                        <div className="o-notes-container j-edit-mode">

                            <header className="o-notes-header">
                                <h1 className="o-notes-header-title">NOTES</h1>

                                <div role="button" className="o-notes-header-btn js-note-edit">EDIT</div>

                                <div className="js-notes-selected-actions">

                                    <div role="button" className="o-notes-header-btn c-notes-select-toggle">
                                        <span>All</span>

                                        <div className="o-samsung-checkbox">
                                            <input id="all-notes-toggle" type="checkbox" />
                                            <label className="c-samsung-checkbox" for="all-notes-toggle"></label>
                                        </div>

                                    </div>


                                    <div role="button" className="o-notes-header-btn">MOVE</div>
                                    <div role="button" className="o-notes-header-btn">DELETE</div>
                                    <div role="button" className="o-notes-header-btn">CANCEL</div>

                                </div>

                            </header>


                            <article className="o-note">
                                <div className="o-samsung-checkbox">
                                    <input id="c-samsung-input" type="checkbox" />
                                    <label className="c-samsung-checkbox" for="c-samsung-input"></label>
                                </div>


                                <i className="material-icons js-decorate-star">star</i>

                                <h1 className="c-note-title">Muhammad Ruhul Amin</h1>

                                <p className="c-note-description">
                                    I am muhammad and i dream...
                                    </p>

                                <footer className="c-note-footer">
                                    Modified: 22 Nov, 2017
                                    </footer>
                            </article>

                        </div>

                    </div>
                </div>

            </main>

        )
    }
}