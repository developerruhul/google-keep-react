import * as actions from './constants';

export function extractId(state = {}, action) {
    switch (action.type) {
        case actions.EXTRACT_ID_FROM_NOTE:
            return { ...action.checkedNotesId }

        default:
            return state;
    }
}
