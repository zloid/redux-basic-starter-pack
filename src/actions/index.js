import { GET_KEY_AT_CLICK } from 'actions/actionTypes'

export const getKeyAtClick = id => ({
  type: GET_KEY_AT_CLICK,
  payload: id,
})
