import React, { Component } from 'react';
import './../App.css';

class ScoreBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                Round Score: <label>{this.props.roundScore ? this.props.roundScore +'/100': 0+'100'}</label><br />
                Full Score: <label>{this.props.scoreCount ? this.props.scoreCount +'/800' : 0+'/800'}</label>
            </div>
        )
    }

}

export default ScoreBoard;