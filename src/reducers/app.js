export const snack = (state = { open: false, message: "" }, action) => {
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

export const route = (state = false, action) => {
  switch (action.type) {
    case "ROUTE_CHANGE":
      return action.route;

    default:
      return state;
  }
};
