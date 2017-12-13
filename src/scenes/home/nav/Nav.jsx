import React from 'react';
import './style/nav.css';



export default class Nav extends React.Component {
    render() {
        return (
            <nav onTransitionEnd={this.display} ref="mainNav" className="app__main__nav">

                <div className="all__notes nav__link">
                    <svg className="link-icon" width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" height="24px">
                        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"></path><path d="M0 0h24v24H0z" fill="none">
                        </path>
                    </svg>
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
                    <div className="js-category">
                        <h3>Catergories</h3>
                        <div className="js-catergory-editbtn">EDIT</div>
                    </div>

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

    display = (e) => {
        this.refs.mainNav.style.display = 'none';
    }
}