import React from 'react'


const Square = props => {
    return (
    <div className="welcome-box">
      <div className="logo">
          <p className="logo-bird"><i className="fa fa-twitter" aria-hidden="true"></i></p>
      </div>
      <div>
          <p className="welcome">Welcome to Twitter</p>
      </div>
      <div className="user-form">
        <div className="log-in col-xs-4 ">
          <form>
            <div className="form-group">
              <input type="text" className="form-control username" placeholder="Username"></input>
            </div>
            <div className="form-group col-xs-8">
              <input type="password" className="form-control password" placeholder="Password"></input>
            </div>
            <div className="form-button">
                <button id="log-in-btn" className="btn btn-default btn-primary col-xs-3 col-xs-offset-1">LOGIN</button>
            </div>
            <div className="login-options">
                <label>
                <input type="checkbox"></input>
                <span>Remember me</span>
                <span> &#183; </span>
                </label>
                <a href="#">Forgot password?</a>
            </div>
            
          </form>
        </div>
        <div className="sign-up col-xs-4 col-xs-offset-1">
          <form>
            <div className="new-to-t">
              <p><strong>New to twitter?</strong><span> SIGN UP</span></p>
            </div>
            <div className="form-group">
              <input type="text" className="form-control username" placeholder="Username"></input>
            </div>
            <div className="form-group">
              <input type="email" className="form-control email" placeholder="Email"></input>
            </div>
            <div className="form-group">
              <input type="password" className="form-control password" placeholder="Password"></input>
            </div>
            <div className="form-button">
                <button id="sign-up-btn" className="btn btn-default btn-warning pull-right">SIGN UP</button>
            </div>    
          </form>
        </div>
      </div>
    </div>
    )
  }
  
  export default Square;