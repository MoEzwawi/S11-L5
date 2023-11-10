export const SEARCH_MUSIC = 'SEARCH_MUSIC'

export const searchMusicAction = (query) => {
    return {
        type: SEARCH_MUSIC,
        payload: query
    }
}
export const LIKE_MUSIC = 'LIKE_MUSIC'

export const likeMusicAction = (query) => {
    return {
        type: LIKE_MUSIC,
        payload: query
    }
}