import React, { Component } from 'react';
import './../App.css';

class SlidingBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0
        }
    }

    componentDidMount() {
        this.startSLider();
    }

    startSLider = () => {
        for (let i = 0; i <= 100; i++) {
            setTimeout(() => {
                // console.log('forward:',i);
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
                // console.log('backkk:',10-j);
                if ((100 - j) === 0) {
                    this.startSLider();
                }
                this.setState({ inputValue: 100 - j });
            }, 10 * j);
        }
    }

    render() {
        return (
            <div>
                <div className="slidecontainer">
                    <input type="range" min="1" max="100" value={this.state.inputValue} />
                </div>
            </div>
        )
    }

}



export default SlidingBar;