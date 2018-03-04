//@ts-check
import * as actions from "./constants";


const initialState = {
    star: false,
    locked: false
}

export const footer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FILTER_STAR:
            return {
                ...state,
                star: !state.star
            }

        case actions.FILTER_LOCK:
            return {
                ...state,
                locked: action.password
            }

        case "RESET_EDITOR":
            return {
                ...initialState
            }

        default:
            return state;
    }
}