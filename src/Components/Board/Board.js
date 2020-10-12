import React from 'react';
import './Board.css';
import Square from '../Square/Square';

function Board(props) {
    let boardArr = [
        //A     B     C     D     E     F     G     H
        ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"], // 1
        ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"], // 2
        ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "], // 3
        ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "], // 4
        ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "], // 5
        ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "], // 6
        ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"], // 7
        ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"]  // 8
    ]

    const board = boardArr.map((row, i) => {
        const columns = row.map((col, j) => {
            return(
                <Square
                    flipped={props.flipped}
                    key={`${String.fromCharCode(65 + j)}${i + 1}`}
                    rowNum={i}
                    colNum={j}
                    occupant={boardArr[i][j]}
                />
            )
        });

        return <tr key={"r" + i}>{columns}</tr>
    });

    return(
        <table className={"centered" + (props.flipped ? " flipped-y" : " flipped-x")}>
            <tbody>
                {board}
            </tbody>
        </table>
    );
}

export default Board;