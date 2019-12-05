import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import rootReducer from './reducers'

import { createStore} from 'redux'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

console.log(store.getState().firstReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
