import {saveLikeToggle,saveTweet} from '../utils/api'

export const RECEIVE_TWEETS='RECEIVE_TWEETS'
export const TOGGLE_TWEET='TOGGLE_TWEET'
export const ADD_TWEET='ADD_TWEET'

//addTweet action creator
function addTweet(tweet){
  return {
    type: ADD_TWEET,
    tweet
  }
}

//handleAddTweet thunk/asynchronous action creator to add a tweet - Optimistic Updates
export function handleAddTweet(text, replyingTo){
  return (dispatch, getState) => {
    const {authedUser} = getState()

    return saveTweet({
      text,
      author: authedUser,
      replyingTo
    })
    .then((tweet) => dispatch(addTweet(tweet)))
    .catch((e) => {
      console.warn('Error in handleAddTweet: ',e)
      alert('There was an error adding the tweet. Try again.')
    })
  }
}

//receiveTweets action creator
export function receiveTweets(tweets){
  return{
    type: RECEIVE_TWEETS,
    tweets
  }
}

//toggleTweet action creator for liking tweets
function toggleTweet({id,authedUser,hasLiked}){
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked
  }
}

//handleToggleTweet thunk/asynchronous action creator to handle liking of the tweet - Optimistic Updates
export function handleToggleTweet(info){
  return (dispatch) => {
    dispatch(toggleTweet(info))
    return saveLikeToggle(info)
    .catch((e) => {
      console.warn('Error in handleToggleTweet: ',e)
      dispatch(toggleTweet(info))
      alert('There was an error liking the tweet. Please try again later.')
    })
  }
}
