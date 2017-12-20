import { combineReducers } from "redux";
import { Editor } from "./services/editor/reducer";
import { Notes } from "./services/notes/reducer";
import { Category } from "./services/category/reducer";

export const Reducers = combineReducers({
    Editor,
    Notes,
    Category
})