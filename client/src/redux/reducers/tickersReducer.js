import {SET_ITEMS, SET_IS_LOADED, FOLLOW_TICKER, UNFOLLOW_TICKER} from '../types'

const initialState = {
    items: [],
    unfollowed: [],
    isLoaded: false
}

export const tickersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS: 
            return {
                ...state,
                items: [...action.payload],
            }
        case SET_IS_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
        case FOLLOW_TICKER: 
            return {
                ...state, 
                unfollowed: state.unfollowed.filter(item => item !== action.payload)
            }
        case UNFOLLOW_TICKER:
            return {
                ...state, 
                unfollowed: [...state.unfollowed, action.payload]
            }
        default: 
            return state
    }
}