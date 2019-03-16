export const constants = { CATEGORY_ADD: "CATEGORY_ADD" };

export const actions = {
  addCategory: category => ({
    type: constants.CATEGORY_ADD,
    category
  })
};

export default (state = [], action) => {
  switch (action.type) {
    case constants.CATEGORY_ADD:
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
