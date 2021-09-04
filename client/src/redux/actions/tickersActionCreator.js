import {SET_ITEMS} from '../types'

export const setItems = (items) => ({
    type: SET_ITEMS,
    payload: items
})