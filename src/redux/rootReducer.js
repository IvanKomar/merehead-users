import { combineReducers } from 'redux'
import { users } from './users/reducer'
import { spinners } from './spinners/reducer'


export default combineReducers({
  users,
  spinners
})
