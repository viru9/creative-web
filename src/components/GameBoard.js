import React, { Component } from 'react';
import './../App.css';
import ScoreBoard from './ScoreBoard';
import GoButton from './GoButton';
const LEFT_LIMIT = 20;
const RIGHT_LIMIT = 80;

class GameBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userHere: { 'id': 1, 'value': 'Player' },
      userHere1: 'Player',
      userHere2: '',
      userHere3: '',
      userHere4: '',
      userHere5: '',
      userHere6: '',
      userHere7: '',
      userHere8: '',
      userHere9: '',
      inputValue: 0,
      scoreCount: 0,
      roundScore: 0
    }
  }

  componentDidMount() {
    this.startSLider();
  }

  onButtonClick = () => {
    if (this.state.inputValue > LEFT_LIMIT && this.state.inputValue < RIGHT_LIMIT) {
      let currentPlace = this.state.userHere.id;
      this.scoreCounter(true);
      this.setState({
        userHere: { 'id': currentPlace + 1, 'value': 'Player' },
        ['userHere' + currentPlace]: '',
        ['userHere' + (parseInt(currentPlace) + 1)]: 'Player',
      })
      if (currentPlace === 8) {
        setTimeout(() => {
          this.userWonTheGame();
        }, 700);
      }
    }
    else {
      this.scoreCounter(false);
      this.resetState();
    }
  }

  startSLider = () => {
    for (let i = 0; i <= 100; i++) {
      setTimeout(() => {
        if (i === 100) {
          this.reverseSlider();
        }
        this.setState({ inputValue: i });
      }, i * 10);
    }
  }

  reverseSlider = () => {
    for (let j = 100; j >= 0; j--) {
      setTimeout(() => {
        if ((100 - j) === 0) {
          this.startSLider();
        }
        this.setState({ inputValue: 100 - j });
      }, 10 * j);
    }
  }

  userWonTheGame = () => {
    let avgScore = parseFloat((this.state.scoreCount/800)*100);
    alert('You Won The Game: Avg Score Is :'+ avgScore +' %');
    this.resetState();
    this.scoreCounter(false);
  }

  resetState = () => {
    this.setState({
      userHere: { 'id': 1, 'value': 'Player' },
      userHere1: 'Player',
      userHere2: '',
      userHere3: '',
      userHere4: '',
      userHere5: '',
      userHere6: '',
      userHere7: '',
      userHere8: '',
      userHere9: '',
      scoreCount: 0,
      roundScore: 0
    });
  }

  scoreCounter = (valid) => {
    if (valid) {
      let currentSliderValue = this.state.inputValue;
      let difference = Math.abs(50 - currentSliderValue) * 2;
      let score = 100 - difference;
      let scoreCount = this.state.scoreCount;
      scoreCount = score + scoreCount;
      this.setState({ scoreCount: scoreCount, roundScore: score });
    }
    else {
      this.resetState();
    }
  }

  render() {
    return (
      <div>
        <div className="game-board">
          <table>
            <tbody>
              <tr>
                <td>{this.state.userHere1}</td>
                <td>{this.state.userHere2}</td>
                <td>{this.state.userHere3}</td>
              </tr>
              <tr>
                <td>{this.state.userHere4}</td>
                <td>{this.state.userHere5}</td>
                <td>{this.state.userHere6}</td>
              </tr>
              <tr>
                <td>{this.state.userHere7}</td>
                <td>{this.state.userHere8}</td>
                <td>{this.state.userHere9}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <input className="slidecontainer" type="range" min="1" max="100" value={this.state.inputValue} />
        </div>
        <ScoreBoard roundScore={this.state.roundScore} scoreCount={this.state.scoreCount} />
        
        <GoButton onClick={this.onButtonClick} />
      </div>
    )
  }
}

export default GameBoard;