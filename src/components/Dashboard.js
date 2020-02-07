import React, {Component} from 'react'
import {connect} from 'react-redux'
import Tweet from './Tweet'

class Dashboard extends Component{
  //Show all tweets with id passed as props
  render(){
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
          {this.props.tweetIds.map((id)=>(
            <li key={id}>
              <Tweet id={id}/>
          </li>
          ))}
        </ul>
      </div>
    )
  }
}

//This is to get fetch only the tweets state from the store since Dashboard component/container needs only tweets
function mapStateToProps( {tweets} ){
  return {
    tweetIds: Object.keys(tweets)
    .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
