import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import SlidingBar from './components/SlidingBar';
import ScoreBoard from './components/ScoreBoard';
import GoButton from './components/GoButton';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <GameBoard />
        <SlidingBar />
        <ScoreBoard />
        <GoButton />
      </div>
    )
  }

}



export default App;