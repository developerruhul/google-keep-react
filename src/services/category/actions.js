import * as actions from "./constant";

export const addCategory = category => ({
  type: actions.CATEGORY_ADD,
  category
});
