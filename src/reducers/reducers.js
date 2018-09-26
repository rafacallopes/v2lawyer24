import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import AddReducer from './AddReducer'



export default combineReducers({
  auth: AuthReducer,
  add: AddReducer,
})