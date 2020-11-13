import React, { FunctionComponent } from 'react';
import './Piece.css';

type Props = {
    img: any
}

const Piece: FunctionComponent<Props> = ({ img }: Props) => {
    return(
        <img
            onDragStart={(ev) => ev.preventDefault()}
            className={"centered"}
            alt={""}
            src={img}>
        </img>
    )
}

export default Piece;