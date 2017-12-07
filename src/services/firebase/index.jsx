import { connect } from "react-redux";
import React from 'react';
import db from './idb';


class IDBFire extends React.Component {
    render() { return null }

    componentDidMount() {
        this.populateState();
    }

    componentWillReceiveProps({ notes, category }) {
        this.prop = { notes, category };
        this.syncIDB();
    }


    // IDB methodes
    populateState = () => {
        let category, notes;
        db.transaction("r", db.category, db.notes, async () => {

            await db.category.toArray().then(e => category = e[0].category);
            await db.notes.toArray().then(e => notes = e[0].notes);

        }).then(e => {

            this.props.dispatch({
                type: "populate",
                data: { category, notes }
            });

        });
    }

    addToIDB = (whatProps = "category", whatDb = "category") => {
        return db[whatDb].where('id').equals('id')
            .modify(x => x[whatDb] = this.prop[whatProps]);
    }

    syncIDB = () => {
        db.category.add({ id: "id", category: {} })
            .then(e => this.addToIDB())
            .catch(e => this.addToIDB());

        db.notes.add({ id: "id", notes: {} })
            .then(e => this.addToIDB("notes", "notes"))
            .catch(e => this.addToIDB("notes", "notes"));
    }


    // Firebase methods


}

const stateToProps = ({ action, category, notes }) => ({ action, category, notes });
export default connect(stateToProps)(IDBFire);
