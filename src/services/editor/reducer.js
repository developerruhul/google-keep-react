import { notes } from "./index";
import { ui } from "./ui";
import { combineReducers } from "redux";
import { footer } from "./editorFooter";

export const Editor = combineReducers({
  notes,
  ui,
  footer
});
