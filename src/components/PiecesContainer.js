import Piece
 from "./Piece"
function PiecesContainer({bank, setSelected}) {


    return (
        <div className="pieces">
            {Object.keys(bank).map(type => <Piece type={type} num={bank[type]}/>)}
        </div>
    )
}

export default PiecesContainer