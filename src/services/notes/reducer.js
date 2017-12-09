import * as actions from './constants';


const initialState = {
    checkedNotesId: {},
    checkAll: false,
    editMode: false
};


export function Notes(state = initialState, action) {
    switch (action.type) {
        case actions.EXTRACT_ID_FROM_NOTE:
            return {
                ...state,
                checkedNotesId: action.checkedNotesId
            }

        case actions.CHECK_ALL:
            return {
                ...state,
                checkedNotesId: action.checkedNotesId,
                checkAll: action.checkAll
            }

        case actions.TOGGLE_EDIT_MODE:
            return {
                ...state,
                editMode: action.editMode
            };

        case actions.TOGGLE_NOTE:
            return {
                ...state,
                checkAll: false,
                checkedNotesId: {
                    ...state.checkedNotesId,
                    [action.id]: !state.checkedNotesId[action.id]
                }
            }

        default:
            return state;
    }
}


