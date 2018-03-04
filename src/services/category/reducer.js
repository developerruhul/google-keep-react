// import { combineReducers } from "redux";
import * as actions from "./constant";

export const Category = (state = [], action) => {
  switch (action.type) {
    case actions.CATEGORY_ADD:
      return [...state, action.category];

    case "populate":
      return action.Category;

    case "DELETE_CATEGORY":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case "UPDATE_CATEGORY":
      return Object.assign([], state, {
        [action.index]: action.data
      });

    default:
      return state;
  }
};
