//@ts-check
import * as actions from "./constants";
import {
    EditorState
} from "draft-js";



const initialState = {
    categoryEditMode: false,
    category: 'UNCATEGORIZED',
    note: EditorState.createEmpty(),
    title: EditorState.createEmpty()
};


export const ui = (state = initialState, action) => {
    switch (action.type) {
        case actions.CATEGORY_EDITMODE:
            return {
                ...state,
                categoryEditMode: !state.categoryEditMode,
            }

        case actions.CATEGORY_CHANGE:
            return {
                ...state,
                category: action.category
            }

        case actions.TITLE_INPUT_CHANGE:
            return {
                ...state,
                title: action.title
            }

        case actions.DESC_INPUT_CHANGE:
            return {
                ...state,
                note: action.note
            }

        case "RESET_EDITOR":
            return {
                ...initialState
            }

        default:
            return state;

    }
}