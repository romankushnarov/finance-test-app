import {SET_ITEMS, SET_IS_LOADED} from '../types'

const initialState = {
    items: [],
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
        default: 
            return state
    }
}