import { combineReducers } from 'redux'

import { userReducer } from './userReducer'
import { postReducer} from './postReducer'

export const reducer = combineReducers({ userReducer: userReducer, postReducer: postReducer });