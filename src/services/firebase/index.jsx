import React from 'react';
import { connect } from "react-redux";
import db from './idb';


class IDBFire extends React.Component {
    render() { return null }

    componentWillReceiveProps(nextProps) {
        this.syncIDB(nextProps);
    }

    syncIDB({ action }) {
        switch (action.type) {
            case "addNote":
                return this.addNoteToIDB(action);

            default:
                break;
        }
    }

    addNoteToIDB = ({ id, category, data }) => {
        this.createCategory(category, addIdToCategory(category, id));
        db.notes.add({ id, ...data });
    }

    createCategory(name, callback) {
        db.category.add({ name, notesId: [] })
            .then(e => callback()).catch(e => callback())
    }
}



function addIdToCategory(category, id) {
    return () => {
        db.category.where('name').equals(category)
            .modify(x => x.notesId.push(id));
    };
}






const stateToProps = ({ action, category, notes }) => ({ action, category, notes });
export default connect(stateToProps)(IDBFire);
