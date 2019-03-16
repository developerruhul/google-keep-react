import mapValues from "lodash.mapvalues";

const constants = {
  EXTRACT_ID_FROM_NOTE: "EXTRACT_ID_FROM_NOTE",
  CHECK_ALL: "CHECK_ALL",
  TOGGLE_EDIT_MODE: "TOGGLE_EDIT_MODE",
  TOGGLE_NOTE: "TOGGLE_NOTE",
  TOGGLE_ACTIVE_NOTE: "TOGGLE_ACTIVE_NOTE",
  CHANGE_CATEGORY_EDITMODE: "CHANGE_CATEGORY_EDITMODE"
};

export const actions = {
  extractIdFromNotes: notes => {
    let checkedNotesId = {};

    for (const i in notes) {
      if (notes.hasOwnProperty(i)) checkedNotesId[i] = false;
    }

    return {
      type: constants.EXTRACT_ID_FROM_NOTE,
      checkedNotesId
    };
  },

  toggleAll: ({ checkAll, checkedNotesId }) => {
    let copy = { ...checkedNotesId };
    for (const i in copy) {
      if (copy.hasOwnProperty(i)) copy[i] = !checkAll;
    }

    return {
      checkAll: !checkAll,
      checkedNotesId: copy,
      type: constants.CHECK_ALL
    };
  },

  toggleNote: id => ({
    type: constants.TOGGLE_NOTE,
    id
  }),

  toggleActiveNote: note => ({
    type: constants.TOGGLE_ACTIVE_NOTE,
    note
  }),

  toggleEditMode: () => ({
    type: constants.TOGGLE_EDIT_MODE
  }),

  changeCategoryEditMode: _ => ({
    type: constants.CHANGE_CATEGORY_EDITMODE
  })
};

const initialState = {
  checkedNotesId: {},
  checkAll: false,
  activeNote: false,
  editMode: false,
  categoryEditMode: false
};

export default function Notes(state = initialState, action) {
  switch (action.type) {
    case constants.EXTRACT_ID_FROM_NOTE:
      return {
        ...state,
        checkedNotesId: action.checkedNotesId
      };

    case constants.CHECK_ALL:
      return {
        ...state,
        checkedNotesId: action.checkedNotesId,
        checkAll: action.checkAll
      };

    case constants.TOGGLE_NOTE:
      return {
        ...state,
        checkAll: false,
        checkedNotesId: {
          ...state.checkedNotesId,
          [action.id]: !state.checkedNotesId[action.id]
        }
      };

    case constants.TOGGLE_ACTIVE_NOTE:
      return {
        ...state,
        activeNote: action.note
      };

    case constants.TOGGLE_EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode
      };
    case "RESET_NOTE":
      return {
        ...initialState,
        checkedNotesId: mapValues(state.checkedNotesId, _ => false)
      };

    case constants.CHANGE_CATEGORY_EDITMODE:
      return {
        ...state,
        categoryEditMode: !state.categoryEditMode
      };

    default:
      return state;
  }
}
