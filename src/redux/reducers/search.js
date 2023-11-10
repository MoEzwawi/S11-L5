import { SEARCH_MUSIC } from "../actions";

const initialState = {
    content: ''
}

const searchMusicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MUSIC:
            return {
                ...state,
                content: action.payload,
            }

        default:
            return state
    }
}

export default searchMusicReducer