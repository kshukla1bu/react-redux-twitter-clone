import {combineReducers} from 'redux'
import authedUser from './authedUser'
import tweets from './tweets'
import users from './users'

//Combine all reducers since Redux takes only one reducer as argument
export default combineReducers({
  authedUser,
  tweets,
  users
})
