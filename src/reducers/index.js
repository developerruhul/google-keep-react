import { combineReducers } from "redux";
import editor from "./editor";
import { route, snack } from "./app";
import notes from "./notes";
import category from "./category";

export default combineReducers({
  editor,
  notes,
  category,
  snack,
  route
});
