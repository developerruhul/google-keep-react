import db from "./idb";
import React from "react";
import { connect } from "react-redux";


class IDB extends React.Component {
    render() { return null }

    componentDidMount() {
        this.populateState().then(e => {
            this.dispatchPopulate(e);
        }).catch(e => console.log(e))
    }

    dispatchPopulate = (e) => {
        this.props.dispatch({
            type: "populate",
            notes: e
        });
    }

    componentWillReceiveProps({ notes }) {
        let nextKey = Object.keys(notes).length,
            oldKey = Object.keys(this.props.notes).length;

        if (oldKey !== nextKey) this.modify(notes);
    }


    populateState = () => (
        db.transaction("r", db.notes, async () => {
            return await db.notes.toArray().then(e => {
                try {
                    return e[0].notes
                } catch (e) {
                    return {};
                }
            });
        })
    )

    modify = (notes) => {
        return db.notes.add({ id: "id", notes: {} })
            .then(e => this.addToIDB(notes))
            .catch(e => this.addToIDB(notes));
    }

    addToIDB = (notes) => {
        return db.notes.where('id').equals('id')
            .modify(x => x.notes = notes)
    }
}


const mapStateToProps = ({ Editor: { notes } }) => ({
    notes
})

export default connect(mapStateToProps)(IDB);
