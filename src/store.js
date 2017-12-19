import { combineReducers } from "redux";
import { Editor } from "./services/editor/reducer";
import { Notes } from "./services/notes/reducer";

export const Reducers = combineReducers({
    Editor,
    Notes
})