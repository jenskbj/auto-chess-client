import React from 'react';
import './Piece.css';

function Piece(props) {
    return(
        <img
            onDragStart={(ev) => ev.preventDefault()}
            className={"centered"}
            alt={""}
            src={props.img}>
        </img>
    )
}

export default Piece;