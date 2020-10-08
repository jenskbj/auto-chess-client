import React from 'react';
import './Board.css';

function Board(props) {
    const rowCount = 8;
    const colCount = 8;
    const boardArr = []

    let position = [
        //A     B     C     D     E     F     G     H
        ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"], // 1
        ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"], // 2
        ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "], // 3
        ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "], // 4
        ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "], // 5
        ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "], // 6
        ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"], // 8
        ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"]  // 7
    ]

    for(let i = 0; i < rowCount; i++) {
        boardArr.push([]);

        for(let j = 0; j < colCount; j++) {
            boardArr[i].push([]);
        } 
    }

    function dragStart(ev) {
        ev.dataTransfer.setData("text/plain", ev.target.innerText);
        ev.dataTransfer.dropEffect = "move";
    }

    function drop(ev) {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text/plain");
        ev.target.innerHTML = data;
    }

    function dragover(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
    }

    const board = boardArr.map((row, i) =>
        <tr key={"r" + i}>
            {row.map((col, j) => {
                const piece =
                    <span
                        draggable="true"
                        onDragStart={dragStart}>
                        {position[i][j][1]}
                    </span>;

                return <td
                        key={"c" + i + j}
                        className={"sqr " + ((i + j) % 2 === 0 ? "sqr-dark" : "sqr-light")}
                        onDrop={drop}
                        onDragOver={dragover}>
                        {piece}
                    </td>
            }
            )}
        </tr>
    );

    return(
        <table>
            <tbody>
                {board}
            </tbody>
        </table>
    );
}

export default Board;