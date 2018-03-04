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

export const toggleAll = ({ checkAll, checkedNotesId }) => {
    let copy = { ...checkedNotesId };
    for (const i in copy) {
        if (copy.hasOwnProperty(i)) copy[i] = !checkAll;
    }

    return {
        checkAll: !checkAll,
        checkedNotesId: copy,
        type: actions.CHECK_ALL
    };
}

export const toggleNote = (id) => ({
    type: actions.TOGGLE_NOTE,
    id
})

export const toggleActiveNote = (note) => ({
    type: actions.TOGGLE_ACTIVE_NOTE,
    note
})

export const toggleEditMode = () => ({
    type: actions.TOGGLE_EDIT_MODE
})

export const changeCategoryEditMode = _ => ({
    type: actions.CHANGE_CATEGORY_EDITMODE
})


