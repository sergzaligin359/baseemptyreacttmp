import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import createRootReducer from './reducers/root'

export const history = createBrowserHistory()
const MIDDLEWARES = [thunk, routerMiddleware(history)]

export const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...MIDDLEWARES))
)