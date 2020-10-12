import React from 'react';
import './Square.css';
import Piece from '../Piece/Piece';

function Square(props) {
    let isOccupied = props.occupant !== "  ";

    return (
        <td
            className={`sqr${(props.rowNum + props.colNum) % 2 === 0 ? " sqr-dark" : " sqr-light"}${props.flipped ? " flipped-y" : " flipped-x"}`}>
            {isOccupied && <Piece img={require(`../../Images/Pieces/${props.occupant[0]}/${props.occupant[1]}.png`)}/>}
        </td>
    );
}

export default Square;