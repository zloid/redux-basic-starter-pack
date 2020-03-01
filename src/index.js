// by libs
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

// by user
import App from './App'
import rootReducer from 'reducers'

// start here
const middlewares = [logger]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
