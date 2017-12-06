const intialState = {
    category: {
        uncategorized: []
    },
    notes: {},
    action: {}
}


export default function NoteStore(state = intialState, action) {
    switch (action.type) {
        case "addNote": return addNote(state, action);
        case "populate": return populate(state, action);

        default:
            return state;
    }
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

function populate(state, action) {
    return {
        action,
        ...action.data
    }
}
