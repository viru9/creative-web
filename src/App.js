import React, { Component } from 'react';
import GameBoard from './components/GameBoard';

class App extends Component {

  render() {
    return (
      <div className="game-container">
        <GameBoard />
      </div>
    )
  }
}

export default App;