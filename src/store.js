import { combineReducers } from "redux";
import { Editor } from "./services/editor/reducer";
import { Notes } from "./services/notes/reducer";
import { Category } from "./services/category/reducer";
import * as editorActions from "./services/editor/constants";
import * as categoryActions from "./services/category/constant";



const action = (state = 0, action ) => {
    return action.type === editorActions.SUBMIT_NOTE ||
           action.type === editorActions.DELETE_NOTE ||
           action.type === categoryActions.CATEGORY_ADD ? state + 1 : state;
}


export const Reducers = combineReducers({
    Editor,
    Notes,
    Category,
    action
})