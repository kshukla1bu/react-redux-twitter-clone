export const RECEIVE_USERS='RECEIVE_USERS'

//receiveUsers action creator
export function receiveUsers(users){
  return {
    type: RECEIVE_USERS,
    users
  }
}
