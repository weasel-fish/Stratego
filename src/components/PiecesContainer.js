import Piece
 from "./Piece"
function PiecesContainer({bank, setSelected}) {


    return (
        <div className="pieces">
            {bank.map(piece => <Piece piece={piece} setSelected={setSelected}/>)}
        </div>
    )
}

export default PiecesContainer