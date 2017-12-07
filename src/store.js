const intialState = {
    category: {
        uncategorized: []
    },
    notes: {}
}


export default function NoteStore(state = intialState, action) {
    switch (action.type) {
        case "addNote": return addNote(state, action);
        case "populate": return { ...action.data };
        case "delete": return deleteNote(state, action);
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
        }
    };
}

function deleteNote(state, action) {
    let notes = { ...state.notes };
    let category = { ...state.category };

    function Notes() {
        action.ids.forEach(id => {
            delete notes[id];
            filterValue(id);
        });
    }

    function filterValue(id) {
        for (const i in category) {
            if (category.hasOwnProperty(i)) {
                category[i] = category[i].filter(key => !id === key);
            }
        }
    }

    Notes();
    return { category, notes, action }
}
