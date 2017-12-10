import React from 'react';
import './style/header.css';

export default class Header extends React.Component {
    state = {
        navOpen: true
    }

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
        this.state.navOpen ?
            document.body.classList.add("hide__main__nav") :
            document.body.classList.remove("hide__main__nav");

        this.setState({ navOpen: !this.state.navOpen });
    }

}
