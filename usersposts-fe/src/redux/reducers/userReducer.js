import constants from '../constants'

const initialState = {
  users: []
}

export const userReducer = (state = initialState, {type, payload}) => {
  switch(type) {

    case constants.GET_USERS:
      return {
        ...state,
        users: payload
      }

    default:
      return state;
  }
}