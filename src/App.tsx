import React, { Component } from 'react';
import './App.css';
import Board from './Components/Board/Board';

type State = {
    flipped: boolean
}

class App extends Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            flipped: true
        };
    }

    flipBoard = () =>
        this.setState((state) => ({
            flipped: !state.flipped
        }));

    render() {
        return (
            <>
                <Board flipped={this.state.flipped} />
                <button className={"centered"} id="btn-flip" onClick={this.flipBoard}>Flip board</button>
            </>
        );
    }
}

export default App;
