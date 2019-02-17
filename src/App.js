import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageBoard from './components/MessageBoard/MessageBoard'
import StatusBar from './components/StatusBar/StatusBar'
import Choice from './components/Choice/Choice'
import Game from './components/Game/Game'

class App extends Component {
  render() {
    return (
      <Game></Game>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
