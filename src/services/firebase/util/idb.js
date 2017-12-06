import React, { Component } from 'react';
import { Util } from "../../../util/index";
import db from '../idb';


export default class IDBUtil extends Component {
    render() { return null }

    populateState = () => {
        let category, notes;
        db.transaction("r", db.category, db.notes, async () => {
            await db.category.toArray().then(e => category = Util.idbToSate(e));
            await db.notes.toArray().then(e => notes = Util.arrayToObj(e));
        }).then(e => {
            this.props.dispatch({
                type: "populate",
                data: { category, notes }
            });
        });
    }

    createCategory(id, callback) {
        db.category.add({ id, notesId: [] })
            .then(e => callback())
            .catch(e => callback());
    }

    addIdToCategory = (category, id) => {
        return db.category.where('id').equals(category)
            .modify(x => x.notesId.push(id));
    }

    addNoteToIDB = ({ id, category, data }) => {
        this.createCategory(category, () => this.addIdToCategory(category, id));
        db.notes.add({ id, ...data });
    }
}