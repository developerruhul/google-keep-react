import { combineReducers } from "redux";
import { notes } from "./services/editor/reducer";
import { Notes } from "./services/notes/reducer";

export const Reducers = combineReducers({
    notes,
    Notes
})