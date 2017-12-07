import React from 'react';

export default class MainUtil extends React.Component {
    toggleAll = () => {
        let { checkedNotesId, checkAll } = this.state,
            copy = { ...checkedNotesId };

        for (const i in copy) {
            if (copy.hasOwnProperty(i)) copy[i] = !checkAll;
        }

        this.setState(prev => ({
            checkedNotesId: copy,
            checkAll: !checkAll
        }))
    }

    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode });
    }

    changeCheck = (id) => {
        this.setState(prev => this.checkBoxStateChange(prev, id));
    }

    extractIdFromNotes = (notes) => {
        let checkedNotesId = {};

        for (const i in notes) {
            if (notes.hasOwnProperty(i)) {
                checkedNotesId[i] = false;
            }
        }

        this.setState({ checkedNotesId });
    }

    checkBoxStateChange(prev, id) {
        return ({
            checkedNotesId: {
                ...prev.checkedNotesId,
                [id]: !prev.checkedNotesId[id]
            },
            checkAll: false
        });
    }

    deleteNote = () => {
        this.props.dispatch({
            type: "delete",
            ids: (() => {
                let keys = Object.keys(this.state.checkedNotesId)
                return keys.filter(id => this.state.checkedNotesId[id]);
            })()
        })
    }
}
