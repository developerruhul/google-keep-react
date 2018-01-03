import React from 'react';
import './styles/app.css';
import Header from './header/header';
import Nav from './nav/Nav';
import NotesContainer from './notes/App';
import MainForm from './editor/App';
import IDB from "../../services/idb/index";
import { Snack } from '../../components/snackbar/index';
import { connect } from "react-redux";
import { withRouter, Route } from "react-router-dom";



class HomePage extends React.Component {
    render() {
        return (
            <main className="js-wrapper">
                <Header />
                <Nav />

                <main className="o-main">
                    <div className="o-main-layout">
                        <MainForm />
                        <NotesContainer />
                    </div>
                </main>

                {/* IDB Database declarative style */}
                <IDB />

                <Snack
                    open={this.props.snack.open}
                    handleClose={this.props.closeSnack}
                    message={this.props.snack.message}
                />

            </main>
        )
    }
}

const mapDispatchToProps = d => ({
    closeSnack: _ => d({ type: "MODIFY_SNACK", bool: false, message: '' })
})

export default withRouter(connect(({ snack }) => ({ snack }), mapDispatchToProps)(HomePage));
