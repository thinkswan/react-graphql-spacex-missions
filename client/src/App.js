import React, { Component } from 'react'
import './App.css'
import logo from './logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="SpaceX" style={{
          display: 'block',
          width: 300,
          margin: 'auto'
        }} />
      </div>
    )
  }
}

export default App
