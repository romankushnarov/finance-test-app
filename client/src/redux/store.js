import { applyMiddleware, combineReducers, createStore } from "redux";
import { tickersReducer } from "./reducers/tickersReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
    tickers: tickersReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))