// import { combineReducers } from "redux";
import * as actions from "./constant";


export const Category = (state = [], action) => {
    switch (action.type) {
        case actions.CATEGORY_ADD:
            return [
                ...state,
                action.category
            ]

        case "populate":
            return action.Category;

        default:
            return state;
    }
}