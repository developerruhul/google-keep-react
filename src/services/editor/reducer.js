import { notes } from "./index";
import { ui } from "./ui";
import { combineReducers } from "redux";

export const Editor = combineReducers({
    notes,
    ui
})
