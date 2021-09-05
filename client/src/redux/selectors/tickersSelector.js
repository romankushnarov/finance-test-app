export const getTickers = (state) => {
    // sholud use reselect
    let result = []
    state.tickers.items.forEach(item => {
        if(!state.tickers.unfollowed.includes(item.ticker)) {
            result.push(item)
        }
    })
    return result
}

export const getUnfollowedTickers = (state) => {
    return state.tickers.unfollowed
}

export const getIsLoaded = (state) => {
    return state.tickers.isLoaded
}