import React from 'react';
import { connect } from "react-redux";
import IDBUtil from "./util/idb";


class IDBFire extends IDBUtil {
    componentDidMount() {
        this.populateState();
    }

    componentWillReceiveProps(nextProps) {
        this.syncIDB(nextProps);
    }


    // IDB methodes
    syncIDB({ action }) {
        switch (action.type) {
            case "addNote":
                return this.addNoteToIDB(action);

            default:
                break;
        }
    }



    // Firebase methods


}

const stateToProps = ({ action, category, notes }) => ({ action, category, notes });
export default connect(stateToProps)(IDBFire);
