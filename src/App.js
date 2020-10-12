import React from 'react';
import './App.css';
import Board from './Components/Board/Board';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flipped: true
        };
    }

    flipBoard = () =>
        this.setState((state) => ({
            flipped: !state.flipped
        }));

    resetBoard() {
        console.log("Board reset.")
    }

    render() {
        return (
            <>
                <button id="btn-flip" onClick={this.flipBoard}>Flip board</button>
                <Board flipped={this.state.flipped} />
                <button id="btn-reset" onClick={this.resetBoard}>Reset board</button>
            </>
        );
    }
}

export default App;
