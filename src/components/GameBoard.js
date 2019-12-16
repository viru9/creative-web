import React, { Component } from 'react';
import './../App.css';

class GameBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="game-board">
          <table>
            <tbody>
              <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
              </tr>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>80</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    )
  }

}



export default GameBoard;