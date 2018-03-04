import * as actions from './constants';

export function notes(state = {}, action) {
    switch (action.type) {
        case actions.SUBMIT_NOTE:
            return {
                ...state,
                [action.id]: action.note
            }

        case actions.DELETE_NOTE:
        case "populate":
            return action.notes

        case actions.MOVE_NOTES:
            let result = action.ids.reduce((accu, value) => ({
                ...accu,
                [value]: {
                    ...state[value],
                    category: action.name
                }
            }), {});

            return {
                ...state,
                ...result
            }


        default:
            return state;
    }
}