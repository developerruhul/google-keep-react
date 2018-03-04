import { combineReducers } from "redux";
import { Editor } from "./services/editor/reducer";
import { Notes } from "./services/notes/reducer";
import { Category } from "./services/category/reducer";
import * as editorActions from "./services/editor/constants";
import * as categoryActions from "./services/category/constant";

const action = (state = false, action) => {
  switch (action.type) {
    case editorActions.SUBMIT_NOTE:
    case editorActions.DELETE_NOTE:
    case categoryActions.CATEGORY_ADD:
    case editorActions.MOVE_NOTES:
    case "UPDATE_CATEGORY":
    case "DELETE_CATEGORY":
      return state + 1;

    default:
      return state;
  }
};
const snack = (state = { open: false, message: "" }, action) => {
  switch (action.type) {
    case "MODIFY_SNACK":
      return {
        open: action.bool,
        message: action.message
      };

    default:
      return state;
  }
};

const route = (state = false, action) => {
  switch (action.type) {
    case "ROUTE_CHANGE":
      return action.route;

    default:
      return state;
  }
};

export const Reducers = combineReducers({
  Editor,
  Notes,
  Category,
  action,
  snack,
  route
});
