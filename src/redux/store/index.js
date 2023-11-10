import { configureStore, combineReducers } from '@reduxjs/toolkit'
import searchMusicReducer from '../reducers/search'
import likeMusicReducer from '../reducers/like'

const mainReducer = combineReducers({
    search: searchMusicReducer,
    like: likeMusicReducer,
})

const store = configureStore({
    reducer: mainReducer,
})

export default store