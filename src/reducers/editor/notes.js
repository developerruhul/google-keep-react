import { Util } from "../../util";

export const constants = {
  SUBMIT_NOTE: "SUBMIT_NOTE",
  DELETE_NOTE: "DELETE_NOTE",
  MOVE_NOTES: "MOVE_NOTES"
};

export default function notes(state = {}, action) {
  switch (action.type) {
    case constants.SUBMIT_NOTE:
      return {
        ...state,
        [action.id]: action.note
      };

    case constants.DELETE_NOTE:
    case "populate":
      return action.notes;

    case constants.MOVE_NOTES:
      let result = action.ids.reduce(
        (accu, value) => ({
          ...accu,
          [value]: {
            ...state[value],
            category: action.name
          }
        }),
        {}
      );

      return {
        ...state,
        ...result
      };

    default:
      return state;
  }
}

export const actions = {
  noteSubmit: ({
    title,
    note,
    category = "uncategorized",
    star,
    lock,
    id
  }) => ({
    type: constants.SUBMIT_NOTE,
    id: id || Util.createID(),
    note: {
      title,
      note,
      modified: Util.Date(),
      category,
      star,
      lock
    }
  }),

  deleteNote: ({ checkedNotesId, notes }) => {
    let ids = Object.keys(checkedNotesId).filter(id => checkedNotesId[id]);
    let result = { ...notes };

    ids.forEach(id => delete result[id]);

    return {
      type: constants.DELETE_NOTE,
      notes: result
    };
  },

  changeNotesTo: (name, ids) => ({
    type: constants.MOVE_NOTES,
    name,
    ids
  })
};
