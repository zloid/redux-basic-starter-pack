import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import thunk from 'redux-thunk'
// import thunk from 'thunk'
import { Provider } from 'react-redux'
import quotes from './reducers/reducer'

import getQuoteAction from './actions/actions'

// import { createLogger } from 'redux-logger'

// const loggerMiddleware = createLogger()

// const store = createStore(quotes, applyMiddleware(thunkMiddleware));
const store = createStore(quotes, applyMiddleware(thunk))

// const store = createStore(quotes, applyMiddleware(thunk));

store.dispatch(getQuoteAction())
store.dispatch(getQuoteAction())
store.dispatch(getQuoteAction())

store.dispatch(getQuoteAction())
// setInterval(() => {
//     store.dispatch(getQuoteAction())
// }, 5000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
