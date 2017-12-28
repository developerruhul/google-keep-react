import db from "./idb";
import React from "react";
import { connect } from "react-redux";
import isEqual from "lodash.isequal";


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
            ...e
        });
    }

    componentWillReceiveProps({ notes, Category }) {
        let nextKey = Object.keys(notes).length,
            oldKey = Object.keys(this.props.notes).length;

        if (oldKey !== nextKey) {
            this.modify(notes, Category);
        }
    }


    populateState = () => (
        db.transaction("r", db.notes, async () => {
            return await db.notes.toArray().then(e => {
                try {
                    return {
                        notes: e[0].notes,
                        Category: e[0].category
                    }
                } catch (e) {
                    return {};
                }
            });
        })
    )

    modify = (notes, category) => {
        return db.notes.add({ id: "id", notes: {}, category: [] })
            .then(e => this.addToIDB(notes, category))
            .catch(e => this.addToIDB(notes, category));
    }

    addToIDB = (notes, category) => {
        return db.notes.where('id').equals('id')
            .modify(x => {
                x.notes = notes;
                x.category = category
            })
    }
}


const mapStateToProps = ({ Editor: { notes }, Category }) => ({
    notes, Category
});

export default connect(mapStateToProps)(IDB);
