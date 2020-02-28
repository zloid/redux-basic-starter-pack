// by libs
import React from 'react'
import { render } from 'react-dom'
import { createStore} from 'redux'
// import { applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'

// by user
import App from './App'
import rootReducer from 'reducers'

// start here
const store = createStore(rootReducer)

//for test
// console.log(store.getState().firstReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
