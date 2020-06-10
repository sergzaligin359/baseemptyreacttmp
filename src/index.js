import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import Layout from './layouts'

import createRootReducer from './store/reducers'

import './styles/index.css'

const history = createBrowserHistory()
const MIDDLEWARES = [thunk, routerMiddleware(history)]

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...MIDDLEWARES))
)

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <Layout />
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root')
)