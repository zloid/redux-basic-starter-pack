import {QUOTE_REQUESTED, QUOTE_RECEIVED, QUOTE_FAILED} from '../actions/actions'

const initialState = { data: [], status: "test status"}

function quotes(state = initialState, action) {
    switch (action.type) {
        case QUOTE_REQUESTED:
            return {...state, status: 'waiting'}
        case QUOTE_RECEIVED:
            // return {...state, data: [...action.payload], status: 'received'}
            return {...state, data: [...state.data, ...action.payload], status: 'received2'}
        case QUOTE_FAILED:
            return {...state, status: 'failed', error: action.payload}
        default:
            return state
    }
}

export default quotes