import * as actions from './constants';
import {
    Util
} from "../../util/index";


export const noteSubmit = ({title, note, category = 'uncategorized',star,lock,id}) => ({
    type: actions.SUBMIT_NOTE,
    id: id || Util.createID(),
    note: {
        title,
        note,
        modified: Util.Date(),
        category,
        star,
        lock
    }
})

export const deleteNote = ({checkedNotesId,notes}) => {
    let ids = Object.keys(checkedNotesId).filter(id => checkedNotesId[id]);
    let result = { ...notes};

    ids.forEach(id => delete result[id]);

    return {
        type: actions.DELETE_NOTE,
        notes: result
    };
}

export const categoryChange = category => ({
    type: actions.CATEGORY_CHANGE,
    category
})

export const starFilter = _ => ({
    type: actions.FILTER_STAR
})

export const lockFilter = locked => {
    const password = !!locked ? false : prompt("Enter the password",'') || false;

    return {
        type: actions.FILTER_LOCK,
        password
    }
}

export const titleChange = title => ({
    type: actions.TITLE_INPUT_CHANGE,
    title
})

export const noteChange = note => ({
    type: actions.DESC_INPUT_CHANGE,
    note
})

export const changeNotesTo = (name,ids) => ({
    type: actions.MOVE_NOTES,
    name,ids
})