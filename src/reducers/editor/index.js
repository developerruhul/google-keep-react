import { combineReducers } from "redux";
import notes from "./notes";
import ui from "./ui";
import footer from "./footer";

export default combineReducers({
  notes,
  ui,
  footer
});
