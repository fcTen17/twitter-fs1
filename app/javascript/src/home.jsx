import React from 'react'
import ReactDOM from 'react-dom'

import './home.scss';

const Home = props => (
  <div id="title">Home page</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
