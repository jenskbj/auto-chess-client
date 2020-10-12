import React from 'react';
import './Board.css';
import '../Piece/Piece';
import Piece from '../Piece/Piece';

function Board() {
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

    function prettyPrintBoard() {
        console.log("+----+----+----+----+----+----+----+----+");

        for(let i = boardArr.length-1; i >= 0; i--) {
            let rowStr = "|";

            for(let j = 0; j < boardArr[i].length; j++) {
                rowStr += " " + boardArr[i][j] + " |";
            }

            console.log(rowStr);
            console.log("+----+----+----+----+----+----+----+----+");
        }
    }

    prettyPrintBoard();

    const board = boardArr.map((row, i) => {
        const columns = row.map((col, j) => {
            const pieceString = boardArr[i][j];

            return <td
                    key={"c" + i + j}
                    className={"sqr " + ((i + j) % 2 === 0 ? "sqr-dark" : "sqr-light")}>
                    {pieceString === "  " ? "" : <Piece img={require(`../../Images/Pieces/${pieceString[0]}/${pieceString[1]}.png`)}/>}
                </td>
        });

        return <tr key={"r" + i}>
            {columns}
            </tr>
    });

    return(
        <table>
            <tbody>
                {board}
            </tbody>
        </table>
    );
}

export default Board;