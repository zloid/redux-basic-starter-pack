// import mock from 'api/mockPhones'
import { GET_KEY_AT_CLICK } from 'actions/actionTypes'

const initialState = {
  testData: [
    'hi',
    "i'am",
    'mapped',
    'from',
    'array',
    'placed',
    'at',
    'reducers/firstReducer',
  ],
}

const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KEY_AT_CLICK:
      console.log(state)
      return { ...state, testData: [...state.testData, action.payload] }
    default:
      return state
  }
}
// console.log(mock)
export default firstReducer
