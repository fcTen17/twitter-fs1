import React from 'react'


const Square = props => {
    return (
    <div className="welcome-box">
      <div className="logo">
          <p className="logo-bird"><i class="fa fa-twitter" aria-hidden="true"></i></p>
      </div>
      <div>
          <p className="welcome">Welcome to Twitter</p>
      </div>
      <div className="user-form">
        <div class="log-in col-xs-4 ">
          <form>
            <div class="form-group">
              <input type="text" class="form-control username" placeholder="Username"></input>
            </div>
            <div class="form-group col-xs-8">
              <input type="password" class="form-control password" placeholder="Password"></input>
            </div>
            <div className="form-button">
                <button id="log-in-btn" class="btn btn-default btn-primary col-xs-3 col-xs-offset-1">LOGIN</button>
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
        <div class="sign-up col-xs-4 col-xs-offset-1">
          <form>
            <div class="new-to-t">
              <p><strong>New to twitter?</strong><span> SIGN UP</span></p>
            </div>
            <div class="form-group">
              <input type="text" class="form-control username" placeholder="Username"></input>
            </div>
            <div class="form-group">
              <input type="email" class="form-control email" placeholder="Email"></input>
            </div>
            <div class="form-group">
              <input type="password" class="form-control password" placeholder="Password"></input>
            </div>
            <div className="form-button">
                <button id="sign-up-btn" class="btn btn-default btn-warning pull-right">SIGN UP</button>
            </div>    
          </form>
        </div>
      </div>
    </div>
    )
  }
  
  export default Square;