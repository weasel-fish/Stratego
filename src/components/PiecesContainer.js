import Piece
 from "./Piece"
function PiecesContainer({bank, setSelected}) {

    let bankArray = Object.values(bank)
    console.log(bankArray)

    return (
        <div className="pieces">
            {bankArray.map(piece => <Piece piece={piece} setSelected={setSelected}/>)}
        </div>
    )
}

export default PiecesContainer