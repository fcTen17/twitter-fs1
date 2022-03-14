import React from 'react'
import './TweetCard.scss';
import { Link } from "react-router-dom";
import { json, checkStatus} from './utils';

const TweetCard = (props) => {  
    const {
      tweetUsername,
      sessionUsername,
      tweetIndexId,
      tweetMessage,               
      tweetImage,
      handleDeleteFunction,
      handleUserSelection
    } = props;
  
    if (tweetUsername === sessionUsername) {
      return (
        <div className="tweet-card-wrapper" id={tweetIndexId}>     
          <div className="tweet-card-top">
            <div className="tweet-card-info">
              <div className="tweet-card-avatar">
                <i className="fas fa-user"></i>
              </div>
              <div className="tweet-card-top-text">
                <div className="tweet-card-id">
                  <Link to={tweetUsername} className="link-tweetcard" data-value={tweetUsername} onClick={handleUserSelection}>   
                      <span className="tweetcard-user-name" >{tweetUsername}</span>
                      <span className="tweetcard-screen-name">@{tweetUsername}</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="delete-wrapper">
              <p><button type="button" onClick={handleDeleteFunction} value={tweetIndexId} className="btn tweet-button-delete btn-outline-danger">X</button></p>
            </div>           
          </div>
          <div className="tweet-card-message">
              <p>{tweetMessage}</p>
          </div>  
          
        </div>
      )
    } else {
      return (
        <div className="tweet-card-wrapper" id={tweetIndexId}>     
          <div className="tweet-card-top">
            <div className="tweet-card-info">
              <div className="tweet-card-avatar">
                <i className="fas fa-user"></i>
              </div>
              <div className="tweet-card-top-text">
                <div className="tweet-card-id">
                  <Link to={tweetUsername} className="link-tweetcard" data-value={tweetUsername} onClick={handleUserSelection}>   
                      <span className="tweetcard-user-name" >{tweetUsername}</span>
                      <span className="tweetcard-screen-name">@{tweetUsername}</span>
                  </Link>
                </div>
              </div>
            </div>
                      
          </div>
          <div className="tweet-card-message">
              <p>{tweetMessage}</p>
          </div>  
          
        </div>
      )
    }
};

export default TweetCard;