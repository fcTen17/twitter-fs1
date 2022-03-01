import React from 'react'


const Square = props => {
    return (
      <div class="container">
            <div class="square">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control username" placeholder="Username"></input>
                    </div>
                    <div class="form-group col-xs-8">
                        <input type="password" class="form-control password" placeholder="Password"></input>
                    </div>
                        <button id="log-in-btn" class="btn btn-default btn-primary col-xs-3 col-xs-offset-1">Log in</button>
                    <label>
                        <input type="checkbox"></input>
                        <span>Remember me</span>
                        <span> &#183; </span>
                    </label>
                    <a href="#">Forgot password?</a>
                </form>    
            </div>  
      </div>
    )
  }
  
  export default Square;