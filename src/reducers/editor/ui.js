const constants = {
  CATEGORY_EDITMODE: "CATEGORY_EDITMODE",
  CATEGORY_CHANGE: "CATEGORY_CHANGE",
  TITLE_INPUT_CHANGE: "TITLE_INPUT_CHANGE",
  DESC_INPUT_CHANGE: "DESC_INPUT_CHANGE"
};

export const actions = {
  categoryChange: category => ({
    type: constants.CATEGORY_CHANGE,
    category
  }),

  titleChange: title => ({
    type: constants.TITLE_INPUT_CHANGE,
    title
  }),

  noteChange: note => ({
    type: constants.DESC_INPUT_CHANGE,
    note
  })
};

const initialState = {
  categoryEditMode: false,
  category: "UNCATEGORIZED",
  note: "",
  title: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.CATEGORY_EDITMODE:
      return {
        ...state,
        categoryEditMode: !state.categoryEditMode
      };

    case constants.CATEGORY_CHANGE:
      return {
        ...state,
        category: action.category
      };

    case constants.TITLE_INPUT_CHANGE:
      return {
        ...state,
        title: action.title
      };

    case constants.DESC_INPUT_CHANGE:
      return {
        ...state,
        note: action.note
      };

    case "RESET_EDITOR":
      return {
        ...initialState
      };

    default:
      return state;
  }
};
