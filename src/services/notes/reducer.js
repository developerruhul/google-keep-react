//@ts-check
import * as actions from "./constants";
import mapValues from "lodash.mapvalues";

const initialState = {
  checkedNotesId: {},
  checkAll: false,
  activeNote: false,
  editMode: false,
  categoryEditMode: false
};

export function Notes(state = initialState, action) {
  switch (action.type) {
    case actions.EXTRACT_ID_FROM_NOTE:
      return {
        ...state,
        checkedNotesId: action.checkedNotesId
      };

    case actions.CHECK_ALL:
      return {
        ...state,
        checkedNotesId: action.checkedNotesId,
        checkAll: action.checkAll
      };

    case actions.TOGGLE_NOTE:
      return {
        ...state,
        checkAll: false,
        checkedNotesId: {
          ...state.checkedNotesId,
          [action.id]: !state.checkedNotesId[action.id]
        }
      };

    case actions.TOGGLE_ACTIVE_NOTE:
      return {
        ...state,
        activeNote: action.note
      };

    case actions.TOGGLE_EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode
      };
    case "RESET_NOTE":
      return {
        ...initialState,
        checkedNotesId: mapValues(state.checkedNotesId, _ => false)
      };

    case actions.CHANGE_CATEGORY_EDITMODE:
      return {
        ...state,
        categoryEditMode: !state.categoryEditMode
      };

    default:
      return state;
  }
}
