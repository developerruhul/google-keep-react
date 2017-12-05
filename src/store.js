const intialState = {
    category: {
        uncategorized: []
    },
    notes: {},
    action: {}
}


export default function NoteStore(state = intialState, action) {
    switch (action.type) {
        case "addNote":
            return addNote(state, action);

        default:
            return state;
    }

    // forward action to IDBFire to sync with IDB and Firebase


}



function addNote(state, action) {
    const categoryInState = state.category[action.category];

    return {
        category: {
            ...state.category,
            [action.category]: [...categoryInState, action.id]
        },
        notes: {
            ...state.notes,
            [action.id]: action.data
        },
        action: action
    };
}
