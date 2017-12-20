import * as actions from './constants';
import { Util } from "../../util/index";


export const noteSubmit = (title, note) => ({
    type: actions.SUBMIT_NOTE,
    id: Util.createID(),
    note: {
        title, note,
        filter: false,
        modified: Util.Date(),
        category: 'uncategorized'
    }
})

export const deleteNote = ({ checkedNotesId, notes }) => {
    let ids = Object.keys(checkedNotesId).filter(id => checkedNotesId[id]);
    let result = { ...notes };
    ids.forEach(id => delete result[id]);

    return {
        type: actions.DELETE_NOTE,
        notes: result
    };
}

// export const changeEditMode = currentMode => ({
//     type: actions.CATEGORY_EDITMODE,
//     categoryEditmode: !currentMode
// })
export const categoryChange = category => ({
    type: actions.CATEGORY_CHANGE,
    category
})
