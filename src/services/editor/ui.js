import * as actions from "./constants";



const initialState = { categoryEditMode: false, category: 'UNCATEGORIZED' };

export const ui = (state = initialState, action) => {
    switch (action.type) {
        case actions.CATEGORY_EDITMODE:
            return {
                ...state,
                categoryEditMode: !state.categoryEditMode,
            }

        case actions.CATEGORY_CHANGE:
            return {
                ...state,
                category: action.category
            }

        default:
            return state;
    }
}
