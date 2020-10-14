import React from 'react';
import './Square.css';
import Piece from '../Piece/Piece';

function Square(props) {
    let isOccupied = props.occupant !== "  ";

    function tryPutPiece() {
        props.onTryPutPiece(props.rowNum, props.colNum);
    }
    
    function setAsSource() {
        props.onSetAsSource(props.rowNum, props.colNum);
    }

    return (
        <td
            onMouseUp={tryPutPiece}
            onMouseDown={setAsSource}
            // onMouseEnter={props.setDestSquare(`${props.rowNum}${props.colNum}`)}
            className={`sqr${(props.rowNum + props.colNum) % 2 === 0 ? " sqr-dark" : " sqr-light"}${props.flipped ? " flipped-y" : " flipped-x"}`}>
            {isOccupied && <Piece img={require(`../../Images/Pieces/${props.occupant[0]}/${props.occupant[1]}.png`)}/>}
        </td>
    );
}

export default Square;