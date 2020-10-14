import React , { useState } from 'react';
import './Board.css';
import Square from '../Square/Square';

function Board(props) {
    const [sourceRow, setSourceRow] = useState(null);
    const [sourceCol, setSourceCol] = useState(null);
    const [board, setBoard] = useState([
        //A     B     C     D     E     F     G     H
        ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"], // 1
        ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"], // 2
        ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "], // 3
        ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "], // 4
        ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "], // 5
        ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "], // 6
        ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"], // 7
        ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"]  // 8
    ]);

    // Given 0-based row and column numbers, returns the board coordinate. (0, 0) => "a1", (2, 6) => "c7" etc.
    const getBoardCoord = (i, j) => `${String.fromCharCode(97 + j)}${i + 1}`;

    function isLegalMove(destRow, destCol) {
        return true; // TODO
    }

    function getMoveNotation(destRow, destCol) {
        // Add piece prefix
        // check if rank/file needs to be specified (if multiple pieces can reach same sqr)
        // Add 'x' if square was occupied from before
        // Add destination coordinate
        // Set up new position
        // '=' if promotion
        // Loop over every piece and add postfixes;
            // '+' if king is in vision,
            // '#' if king has nowhere to go or can't block attack or take attacking piece
            // and maybe eventually '!', '!!', '?', '??', '!?', '?!' and all that when engine implemented
        // Also special stuff for castling...man, this is pretty complicated
        
        // Simple impl. for now:    :)
        return `${board[sourceRow][sourceCol][1]}${getBoardCoord(sourceRow, sourceCol)}${getBoardCoord(destRow, destCol)}`;
    }

    function tryMakeMove(destRow, destCol) {        
        if(isLegalMove(destRow, destCol)) {
            console.log(getMoveNotation(destRow, destCol));
            
            // Make move
            let updatedBoard = board;
            updatedBoard[destRow][destCol] = board[sourceRow][sourceCol];
            updatedBoard[sourceRow][sourceCol] = "  ";
            
            // Update board state
            setBoard(updatedBoard);
            
            // Reset source coords
            setSourceCol(null);
            setSourceRow(null);
        }
    }

    function updateSourceSquare(rowNum, colNum) {
        setSourceRow(rowNum);
        setSourceCol(colNum);
    }

    const squares = board.map((row, i) => {
        const columns = row.map((col, j) =>
            <Square
                flipped={props.flipped}
                key={getBoardCoord(i, j)}
                rowNum={i}
                colNum={j}
                occupant={board[i][j]}
                onTryPutPiece={tryMakeMove}
                onSetAsSource={updateSourceSquare}
            />
        );

        return <tr key={"r" + i}>{columns}</tr>
    });

    return(
        <table className={"centered" + (props.flipped ? " flipped-y" : " flipped-x")}>
            <tbody>
                {squares}
            </tbody>
        </table>
    );
}

export default Board;