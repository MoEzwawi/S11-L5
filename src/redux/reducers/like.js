import { LIKE_MUSIC } from "../actions";

const initialState = {
    content: []
}

const likeMusicReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_MUSIC:
            return {
                ...state,
                content: [...state.content, action.payload],
            }

        default:
            return state
    }
}

export default likeMusicReducer