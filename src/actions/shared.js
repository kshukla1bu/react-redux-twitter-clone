import {getInitialData} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {receiveTweets} from '../actions/tweets'
import {setAuthedUser} from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

//handleInitialData thunk action creator - Returns function instead of action for thunk to invoke the dispatch functions given here
export default function handleInitialData(){
  return (dispatch) => {
    getInitialData()
    .then(({users,tweets}) => {
      dispatch(receiveUsers(users))
      dispatch(receiveTweets(tweets))
      dispatch(setAuthedUser(AUTHED_ID))
    })
  }
}
