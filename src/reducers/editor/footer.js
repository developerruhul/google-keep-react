const constants = {
  FILTER_STAR: "FILTER_STAR",
  FILTER_LOCK: "FILTER_LOCK"
};

export const actions = {
  starFilter: _ => ({
    type: constants.FILTER_STAR
  }),

  lockFilter: locked => {
    const password = !!locked
      ? false
      : prompt("Enter the password", "") || false;

    return {
      type: constants.FILTER_LOCK,
      password
    };
  }
};

const initialState = {
  star: false,
  locked: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FILTER_STAR:
      return {
        ...state,
        star: !state.star
      };

    case constants.FILTER_LOCK:
      return {
        ...state,
        locked: action.password
      };

    case "RESET_EDITOR":
      return {
        ...initialState
      };

    default:
      return state;
  }
};
