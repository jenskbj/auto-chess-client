import React from 'react';
import './Piece.css';

function Piece(props) {
    return(
        <img className={"centered"} alt={""} src={props.img}></img>
    )
}

export default Piece;