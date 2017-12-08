import * as actions from './constants';


export const extractIdFromNotes = (notes) => {
    let checkedNotesId = {};

    for (const i in notes) {
        if (notes.hasOwnProperty(i)) checkedNotesId[i] = false;
    }

    return {
        type: actions.EXTRACT_ID_FROM_NOTE,
        checkedNotesId
    }
}

export const toggleAll = (ids, checkAll) => {
    let copy = { ...ids };

    for (const i in copy) {
        if (copy.hasOwnProperty(i)) copy[i] = !checkAll;
    }

    return {
        type: actions.CHECK_ALL,
        checkedNotesId: copy,
        checkAll: !checkAll
    }
}

export const toggleEditMode = (editMode) => ({
    type: actions.TOGGLE_EDIT_MODE,
    editMode: !editMode
})

export const toggleNote = (id) => ({
    type: actions.TOGGLE_NOTE,
    id
})
