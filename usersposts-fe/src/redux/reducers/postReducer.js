import constants from '../constants';

const initialState = {
  posts: []
}

export const postReducer = (state = initialState, {type, payload}) => {
  switch(type) {

    case constants.GET_POSTS:
      return {
        ...state,
        posts: payload
      }

    default:
      return state;
  }
}