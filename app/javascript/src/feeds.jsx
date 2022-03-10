import React from 'react'
import ReactDOM from 'react-dom'
import UserCard from './user_card'
import TweetCard from './TweetCard'
import {logoutUser, authenticate} from './requests'
import { json, checkStatus , readURL } from './utils';
import 'bootstrap/dist/css/bootstrap.css'
import './feeds.scss';

class Feeds extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      tweets: {tweets: [{id: 0, username: ' ', message: ' '}]},
      userTweets: '',
      username: '',
      error: ''
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.tweetRender = this.tweetRender.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleShowAllTweets = this.handleShowAllTweets.bind(this);
    this.handleShowUserTweets = this.handleShowUserTweets.bind(this);
  }

  handleShowAllTweets () {   
    fetch(`api/tweets`)
    .then(checkStatus)
    .then(json)      
    .then((data) => {
      if (data) {         
        this.setState({ tweets: data})
      }
    })
    .catch((error) => {
      this.setState({ error: error.message });
      console.log(error);
    });   
  }
  
  handleShowUserTweets () {
    let username = this.state.username;
    fetch(`api/users/${username}/tweets`)
    .then(checkStatus)
    .then(json)      
    .then((data) => {
      if (data) {         
        this.setState({ tweets: data})
      }
    })
    .catch((error) => {
      this.setState({ error: error.message });
      console.log(error);
    });
  }

  tweetRender = (tweetsObj, handleDeleteFunction) => {
    let tweetArr = tweetsObj.tweets;
    let listArr =[];
      
    for (let i = 0; i < tweetArr.length ; i++) {
      let tweetIndexId = tweetArr[i].id;
      let tweetUsername = tweetArr[i].username;
      let tweetMessage = tweetArr[i].message;
      listArr.push(<TweetCard tweetUsername={tweetUsername} tweetIndexId={tweetIndexId} key={tweetIndexId} handleDeleteFunction={handleDeleteFunction} tweetMessage={tweetMessage}/>);
    }   
    return listArr;
  }
  
  handleDelete (event) {
    const id = event.target.value;
    fetch(`api/tweets/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'same-origin',
    })
    .then(checkStatus)
    .then(json)      
    .then((data) => {
      if (data) {
        console.log(data);
      }
    })
    .catch((error) => {
      this.setState({ error: error.message });
      console.log(error);
    });
    this.handleShowAllTweets ();
  };
  

  handleLogout() {
    logoutUser(function(){
      authenticate(function(response) {
        if(!response.authenticated) {
          window.location.replace("/");
        }
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let message = $('.post-input').val();
    let username = this.state.username;
    console.log(message + ' from ' + username);
    /*let imageSelect = $('#image-select');
    let image = imageSelect.files[0];*/

    fetch('api/tweets', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        tweet: {
          username: username,
          message:  message,
          //image: image
        }
      })
    })
    .then(checkStatus)
    .then(json)      
    .then((data) => {
      if (data) {
        console.log(data);
        $('.post-input').val('');                 
      }
    })
    .catch((error) => {
      this.setState({ error: error.message });
      console.log(error);
    });

    this.handleShowAllTweets ();
  }

  componentDidMount() {    
    this.handleShowAllTweets ();

    fetch(`api/authenticated`, {
      credentials: 'same-origin'
    })
    .then(checkStatus)
    .then(json)
    .then((data) => {
      if (data) {
        console.log(data);          
        this.setState({ username: data.username})
      }
    })
    .catch((error) => {
      this.setState({ error: error.message });
      console.log(error);
    });
  }

 render() {
  return (
    <div className="feeds-wrapper">  
      <div className="feeds-box container">
        <div className="row row-height">
          
          <div className="user-column info-column col-4">
            <p id="user-column-bird"><i className="fa fa-twitter" aria-hidden="true"></i></p>
            <UserCard username={this.state.username} handleLogout={this.handleLogout}/>
            <div className="feed-selection">
              <h1>FEED</h1>
              <div id="radioButtons">
                  <div className="radio">
                    <input type="radio" id="allSelected" className="filter" onClick={this.handleShowAllTweets} name="filter" value="all" defaultChecked></input> 
                    <label htmlFor="allSelected">ALL</label>
                  </div>
            
                  <div className="radio">
                    <input type="radio" id="yourSelected"  className="filter" onClick={this.handleShowUserTweets} name="filter" value="active"></input> 
                    <label htmlFor="yourSelected">@{this.state.username} (<span id="yourTotal"></span>)</label>
                  </div>                  
              </div>
            </div>
          </div>
           
          <div className="feeds-column info-column col-8">
            <div id="newTweetDiv">
              <form className="form-group tweet-form">              
                  <textarea className="form-control mt-4 mb-2 post-input"  placeholder="What's happening?" val="new Tweet" required></textarea>                 
                  <div className="tweet-options-submit">
                    <div>
                      <p className="post-char-counter"></p>
                    </div>                   
                    <div>
                      <input id="newTweetSubmit" type="submit" className="btn mb-2" onClick={this.handleSubmit} value="Tweet"></input>
                    </div>
                  </div>         
              </form>
            </div>
            <div className="tweet-feeds">
              {(() => {
                return this.tweetRender( this.state.tweets, this.handleDelete );
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
 }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feeds />,
    document.body.appendChild(document.createElement('div')),
  )
})
