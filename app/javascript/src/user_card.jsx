import React from 'react'
import './user_card.scss';

const UserCard = (props) => {
  const {
    username,
    handleLogout
  } = props;
  
  
  return (
    <div className="card-wrapper">
      <div className="card-user-data">
        <div className="names">         
            <p className="user-name">{username}</p>
            <p className="user-screen-name">@{username}</p>        
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
