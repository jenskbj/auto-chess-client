import React from 'react';
import './App.css';
import Board from './Components/Board/Board';

class App extends React.Component {
    constructor() {
        super();

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
