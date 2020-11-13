import React , { useState, FunctionComponent } from 'react';
import './Board.css';
import Square from '../Square/Square';

type Props = {
    flipped: boolean
}

const Board: FunctionComponent<Props> = ({ flipped }: Props) => {
    const [sourceRow, setSourceRow] = useState(-1);
    const [sourceCol, setSourceCol] = useState(-1);
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
    const getBoardCoord = (i: number, j: number) => `${String.fromCharCode(97 + j)}${i + 1}`;

    function isLegalMove(destRow: number, destCol: number) {
        return true; // TODO
    }

    function getMoveNotation(destRow: number, destCol: number) {
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

    function tryMakeMove(destRow: number, destCol: number) {        
        if(isLegalMove(destRow, destCol)) {
            console.log(getMoveNotation(destRow, destCol));
            
            // Make move
            let updatedBoard = board;
            updatedBoard[destRow][destCol] = board[sourceRow][sourceCol];
            updatedBoard[sourceRow][sourceCol] = "  ";
            
            // Update board state
            setBoard(updatedBoard);
            
            // Reset source coords
            setSourceCol(-1);
            setSourceRow(-1);
        }
    }

    function updateSourceSquare(rowNum: number, colNum: number) {
        setSourceRow(rowNum);
        setSourceCol(colNum);
    }

    const squares = board.map((row, i) => {
        const columns = row.map((col, j) =>
            <Square
                flipped={flipped}
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
        <table className={"centered" + (flipped ? " flipped-y" : " flipped-x")}>
            <tbody>
                {squares}
            </tbody>
        </table>
    );
}

export default Board;