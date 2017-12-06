import React from 'react';
import './style/nav.css';



export default function Nav() {
    return (
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
    )
}