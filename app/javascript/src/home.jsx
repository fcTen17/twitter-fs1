import React from 'react'
import ReactDOM from 'react-dom'
import Square from './square'
import './home.scss';



const Home = () => (
  <div>
    <h1>HOME PAGE<i class="fa fa-twitter" aria-hidden="true"></i></h1>
    <p><i class="fa fa-twitter" aria-hidden="true"></i></p>
    <div class="container user-box">
      <div class="logo">
        <p><i class="fa fa-twitter" aria-hidden="true"></i></p>
      </div>
      <div>
        <Square />
      </div>
    </div>
    
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
