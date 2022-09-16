import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import allReducers from './state/reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { createStore, compose, applyMiddleware } from 'redux'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)))

if (process.env.NODE_ENV === 'development') {
  require('./mocks/browser.js')
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
