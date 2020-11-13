import React, { FunctionComponent } from 'react';
import './Square.css';
import Piece from '../Piece/Piece';

type Props = {
    onTryPutPiece: Function,
    onSetAsSource: Function,
    rowNum: number,
    colNum: number,
    occupant: string,
    flipped: boolean
}

const Square: FunctionComponent<Props> = ({ onTryPutPiece, onSetAsSource, rowNum, colNum, occupant, flipped }: Props) => {
    let isOccupied = occupant !== "  ";

    function tryPutPiece() {
        onTryPutPiece(rowNum, colNum);
    }
    
    function setAsSource() {
        onSetAsSource(rowNum, colNum);
    }

    return (
        <td
            onMouseUp={tryPutPiece}
            onMouseDown={setAsSource}
            // onMouseEnter={setDestSquare(`${rowNum}${colNum}`)}
            className={`sqr${(rowNum + colNum) % 2 === 0 ? " sqr-dark" : " sqr-light"}${flipped ? " flipped-y" : " flipped-x"}`}>
            {isOccupied && <Piece img={require(`../../Images/Pieces/${occupant[0]}/${occupant[1]}.png`)}/>}
        </td>
    );
}

export default Square;