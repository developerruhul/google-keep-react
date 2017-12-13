import React from 'react';
import './style/header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className="o-app-header" >
                <section className="o-app-menu-title">
                    <i onClick={this.toggleNav} className="material-icons js-app-menu">menu</i>

                    <div role="heading" className="c-samsung-title">
                        <h1>Samsung Notes</h1>
                        <sup className="c-super-like">Web</sup>
                    </div>
                </section>
            </header>
        )
    }

    toggleNav = () => {
        const body = document.body.classList;
        return body.toggle("hide__main__nav", !body.contains("hide__main__nav"));
    }

}
