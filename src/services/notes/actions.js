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
