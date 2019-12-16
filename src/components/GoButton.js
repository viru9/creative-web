import React, { Component } from 'react';
import './../App.css';

class GoButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>Go</button>
            </div>
        )
    }
}

export default GoButton;