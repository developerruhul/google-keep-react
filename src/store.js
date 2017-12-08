import { combineReducers } from "redux";
import { notes } from "./services/editor/reducer";
import { extractId } from "./services/notes/reducer";

export const Reducers = combineReducers({
    notes,
    extractId
})