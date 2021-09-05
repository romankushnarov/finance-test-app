import {SET_ITEMS, SET_IS_LOADED, FOLLOW_TICKER, UNFOLLOW_TICKER} from '../types'

const setItems = (items) => ({
    type: SET_ITEMS,
    payload: items
})

const setIsLoaded = (value) => ({
    type: SET_IS_LOADED,
    payload: value
})

export const followTicker = (ticker) => ({
    type: FOLLOW_TICKER,
    payload: ticker
})
export const unfollowTicker = (ticker) => ({
    type: UNFOLLOW_TICKER,
    payload: ticker
})

export const loadItems = (socket) => {
    return (dispatch) => {
        socket.emit('start')
        socket.on('ticker', data => {
            dispatch(setItems(data))
            dispatch(setIsLoaded(true))
        })
    }
}

export const disconnect = (socket) => {
    return (dispatch) => {
        socket.disconnect()
        dispatch(setItems([]))
        dispatch(setIsLoaded(false))
    }
}