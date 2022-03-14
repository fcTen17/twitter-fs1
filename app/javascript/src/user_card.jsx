import React from 'react'
import './user_card.scss';
import { Link } from "react-router-dom";

const UserCard = (props) => {
  const {
    username,
    handleLogout,
    handleShowUserTweets
  } = props;
  
  
  return (
    <div className="card-wrapper">
      <div className="card-user-data">
        <div className="names">
        <Link to={username} className="names" onClick={handleShowUserTweets}>
            <p className="user-name">{username}</p>
            <p className="user-screen-name">@{username}</p> 
        </Link>           
                   
        </div>
        <div className="user-logout">
          <button type="button" id="log-out" className="btn" onClick={handleLogout}><p><i className="fas fa-sign-out-alt"></i></p></button>
        </div>     
      </div>
      
      
      <div className="">
        <div className="row">
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>

        </div>      
      </div> 
    </div>
    )
}

export default UserCard
