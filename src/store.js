const intialState = {
    category: {
        "islam": ["id1", "id3"]
    },
    notes: {
        "id1": {
            "title": "MADINA",
            "note": "Medina is a city in western Saudi Arabia. In the city center, the vast Al-Masjid an-Nabawi (Prophet's Mosque) is a major Islamic pilgrimage site. Its striking Green Dome rises above the tombs of the Prophet ",
            "modified": "12/06/2017",
            "filter": "alarm"
        },
        "id2": {
            "title": "USA",
            "note": "The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New ",
            "modified": "12/06/2017",
            "filter": "star"
        },
        "id3": {
            "title": "INDIA",
            "note": "India is a vast South Asian country with diverse terrain – from Himalayan peaks to Indian Ocean coastline – and history reaching back 5 millennia. ",
            "modified": "12/06/2017",
            "filter": "locked"
        }
    }
}


export default function NoteStore(state = intialState, action) {
    switch (action.type) {
        case "addNote":
            return addNote(state, action);

        default:
            return state;
    }
}



function addNote(state, action) {
    return {
        category: state.category,
        notes: {
            ...state.notes,
            [action.id]: action.note
        }
    };
}
