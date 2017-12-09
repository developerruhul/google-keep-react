import * as actions from './constants';

export function notes(state = {}, action) {
    switch (action.type) {
        case actions.SUBMIT_NOTE:
            return {
                ...state,
                [action.id]: action.note
            }

        case "DELETE_NOTE":
            return {
                ...action.notes
            }

        case "populate":
            return {
                ...action.notes
            }

        default: return state;
    }
}
