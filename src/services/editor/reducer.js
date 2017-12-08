import * as actions from './constants';

export function notes(state = {}, action) {
    switch (action.type) {
        case actions.SUBMIT_NOTE:
            return { ...state, [action.id]: action.note }

        default:
            return state;
    }
}
