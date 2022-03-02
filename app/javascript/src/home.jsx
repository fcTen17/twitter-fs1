import React from 'react'
import ReactDOM from 'react-dom'
import Square from './square'
import './home.scss';



const Home = () => (
  <div>
    <div className="container user-box">
        <Square />
    </div>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
